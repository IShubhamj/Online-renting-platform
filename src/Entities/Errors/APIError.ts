import { StatusCodes } from "../../Utils/Constatnts";
import BaseError from "./BaseError";
import IError from "./IError";

export default class APIError extends BaseError {
  constructor(
    message: string,
    status: number = StatusCodes.INTERNAL_SERVER_ERROR,
    data: IError[] = [],
    type: string = APIError.name,
    isPublic: boolean = false
  ) {
    super(message, status, data, type, isPublic);
  }
}
