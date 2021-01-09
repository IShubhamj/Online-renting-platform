import APIError from "./APIError";
import IError from "./IError";
import { StatusCodes } from "../../Utils/Constatnts";

export default class UnprocessableError extends APIError {
  constructor(errors: IError[]) {
    super(
      "Validation Error",
      StatusCodes.UNPROCESSABLE,
      errors,
      UnprocessableError.name
    );
  }
}
