import {api} from '../../../config/api'

export const getAllProductApi = async ()=>{
   try{
     let res = await api.get("/products")
     return res.data
   }
   catch(error){
    console.log("error in api",error);
   }
}