import axiosClient from "./axiosclient";

const authToken = (token) => {

    if(token){
        return axiosClient.defaults.headers.common["x-auth-token"] = token
    }else{

      return delete axiosClient.defaults.headers.common["x-auth-token"]
    }

}


export default authToken