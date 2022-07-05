import axios from "axios";
import moment from "moment";

const lamaAxios = axios.create();

lamaAxios.interceptors.response.use(originalResponse => {
  handleDates(originalResponse.data);
  return originalResponse;
});

export default lamaAxios;
 

function isDate(value: any): boolean {
    if( value && typeof value === "string"){ 
        const date = moment(value);
        return date.isValid();
    }
    return false; 
}

export function handleDates(body: any) {
    

  if (body === null || body === undefined || typeof body !== "object")
    return body; 
  for (const key of Object.keys(body)) {
    const value = body[key];
    if (isDate(value)){ 
        console.log("key", key)
        body[key] = moment(value);
    }
    else if (typeof value === "object") handleDates(value);
  }
}