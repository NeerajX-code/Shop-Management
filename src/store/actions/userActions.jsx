import axios from "../../Utils/axios";
import { loaduser } from "../reducers/userSlice";


export const asyncLoginUser = (user) => async (dispatch,getState) => {
    try {
        let {data} =  await axios.post("/auth/login", user);
        dispatch(loaduser(data));
        console.log(data)
    } catch (error) {
        console.log(error);
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