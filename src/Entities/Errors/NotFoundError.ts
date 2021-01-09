import { StatusCodes } from "../../Utils/Constatnts";
import APIError from "./APIError";
import IError from "./IError";

export default class NotFoundError extends APIError {
  constructor(errors: IError[]) {
    super("Page Not found", StatusCodes.NOT_FOUND, errors, NotFoundError.name);
  }
}
