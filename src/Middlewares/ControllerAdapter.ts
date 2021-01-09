import { NextFunction, Request, Response } from "express";

import { APIError } from "../Entities/";
import { SuccessResponse } from "../Entities/Responses";
import { StatusCodes } from "./../Utils/Constatnts";

export default function controllerAdapter(
  controller: any,
  functionName: string = ""
) {
  return async (req: any, res: Response, next: NextFunction) => {
    const {
      headers: { authorization },
      params,
      query,
      body,
      user
    } = req;
    const { locals } = res;
    try {
      if (locals.isHit) {
        return next();
      }

      const result = await controller[functionName]({
        headers: { authorization },
        params,
        query,
        locals,
        body,
        user
      });
      res.locals.isHit = true;
      if (result && result.type === APIError.name) {
        next(result);
      } else {
        let response: any = null;
        if (result.statusCode === 201) {
          delete result.statusCode;
          response = new SuccessResponse(result, {
            code: StatusCodes.CREATED,
            message: "",
            timestamp: new Date()
          });
        } else {
          response = new SuccessResponse(result);
        }
        res.locals.response = response;
        return res.status(response.metadata.code).json(response);
      }
    } catch (error) {
      console.log(error);
      console.log("controllerAdapter - error:", JSON.stringify(error, null, 2));
      const status = error.status || 500;
      res.status(status).json(error);
    }
  };
}
