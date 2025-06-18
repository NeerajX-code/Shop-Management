import axios from "../../Utils/axios";


export const asyncLoginUser = () => async (dispatch) => {
    try {
        let {data} =  await axios.get("/auth/login", user);
        console.log(data);
    } catch (error) {
        
    }
}
export const asyncRegisterUser = (user) => async () => {
    try {
       await axios.post("/auth/register", user);
       return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}