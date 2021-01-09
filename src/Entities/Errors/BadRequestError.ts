import { StatusCodes } from "../../Utils/Constatnts";
import APIError from "./APIError";
import IError from "./IError";

export default class BadRequestError extends APIError {
  constructor(errors: IError[]) {
    super(
      "Validation Error",
      StatusCodes.BAD_REQUEST,
      errors,
      BadRequestError.name
    );
  }
}
