import { NextFunction, Request, Response } from "express";

import { NotFoundError } from "../Entities/";

export default (req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError([]));
};
