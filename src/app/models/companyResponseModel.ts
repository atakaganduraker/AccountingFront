import { Company } from "./company";
import { ResponseModel } from "./responseModel";

export interface CategoryResponseModel extends ResponseModel{
    data:Company[]
}