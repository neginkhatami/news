import {getAxiosInstanceJsonServer} from "./api";


export  const registerApi = (data,callback)=>{
    getAxiosInstanceJsonServer().post("/register",data)
        .then(response => {
            const data = response.data;
            callback(true,data)
        }).catch(error =>{
            callback(false,error)
    })
};

export const loginApi = (data,callback) => {
    getAxiosInstanceJsonServer().post("/register" ,data)
        .then(response => {
            const data = response.data;
            callback(true,data)
        }).catch(error => {
            callback(false,data)
    })
};