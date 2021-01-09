import { StatusCodes } from "../../Utils/Constatnts";
import IResponse, { IData, IMetadata } from "./IResponse";

export default class InternalServerErrorResponse implements IResponse {
  public data: IData;
  public metadata: IMetadata;

  constructor(data: IData, message: string = "") {
    this.data = data;
    this.metadata = {
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message,
      timestamp: new Date(),
    };
  }
}
