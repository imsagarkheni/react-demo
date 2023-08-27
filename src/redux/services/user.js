import { GETPRODUCT } from "../../apis/constApi";
import { apiInstance } from "../axiosApi";



export const getProduct = (payload) => {
  return apiInstance.get(GETPRODUCT, payload);
};

