import axios from "axios";


export const getAxiosInstanceJsonServer = () =>{
    return axios.create({
            baseURL : "http://localhost:3000",
            headers : {
                all :{
                    API_KEY : " "
                }
            }
        }
    );
};