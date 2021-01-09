import { validationResult } from "express-validator";

import UnprocessableError from "../Entities/Errors/UnprocessibleError";
import IError from "../Entities/Errors/IError";

export default function validationHandler() {
  return (req: any, res: any, next: any) => {
    if (res.locals.isHit) {
      return next();
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Inside Validation Handler", errors);
      return next(new UnprocessableError(errors.array() as IError[]));
    }

    next();
  };
}
