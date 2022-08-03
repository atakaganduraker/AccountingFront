import { Operation } from "./operation";
import { ResponseModel } from "./responseModel";

export interface OperationResponseModel extends ResponseModel{
    data:Operation[],
}