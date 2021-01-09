import { StatusCodes } from "../../Utils/Constatnts";
import { getEnumKeyOrValue } from "../../Utils/Utilities";
import IResponse, { IData, IMetadata } from "./IResponse";

export default class BadRequestResponse implements IResponse {
  public data: IData;
  public metadata: IMetadata;

  constructor(
    data: IData,
    message: string = getEnumKeyOrValue(StatusCodes, StatusCodes.BAD_REQUEST)
  ) {
    this.data = data;
    this.metadata = {
      code: StatusCodes.BAD_REQUEST,
      message,
      timestamp: new Date(),
    };
  }
}
