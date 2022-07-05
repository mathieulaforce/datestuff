import { GetListResponse } from "../types/x";
import lamaAxios from "../utils/LaMaAxios";

const getList = async () => {
    const response = await lamaAxios.get<GetListResponse>(`https://randomuser.me/api/?page=3&results=10&seed=abc`);        
    return response.data.results;
} 
 
    
  export const RandomPeopleApi =  { 
    getList
  }