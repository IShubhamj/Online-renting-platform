import {
  BadRequestError,
  NotFoundError,
  UnprocessableError,
} from "../Entities";
import {
  BadRequestResponse,
  InternalServerErrorResponse,
  NotFoundResponse,
  UnprocessableResponse,
} from "../Entities/Responses";
import IResponse from "../Entities/Responses/IResponse";
import { StatusCodes } from "../Utils/Constatnts";

export default function errorHandler(env: string) {
  return (err: any, req: any, res: any, next: any) => {
    console.log(err);
    let response: IResponse;
    switch (err.type) {
      case UnprocessableError.name:
        response = new UnprocessableResponse(err.data, err.message);
        break;
      case BadRequestError.name:
        response = new BadRequestResponse(err.data, err.message);
        break;
      case NotFoundError.name:
        response = new NotFoundResponse(err.message);
        break;
      case InternalServerErrorResponse.name:
      default:
        response = new InternalServerErrorResponse(
          err.data,
          err.isPublic ? err.message : StatusCodes[err.status]
        );
        break;
    }

    res.locals.response = response;
    res.locals.outcome = "failed";

    res.status(response.metadata.code).json(response);
  };
}
