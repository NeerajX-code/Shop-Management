import axios from "../../Utils/axios";
import { loaduser } from "../reducers/userSlice";
import Cookies from "js-cookie"

export const asyncLoginUser = (user) => async (dispatch, getState) => {
    try {
        let { data } = await axios.post("/auth/login", user);
        Cookies.set("token", `${data.token}`, {
            expires: 7, // days
            secure: true, // only over HTTPS
            sameSite: "strict",
        })
        console.log(data)
        dispatch(asyncUserProfile(data.token))
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
export const asyncUserProfile = (token) => async (dispatch) => {
    try {
        let res = await axios.get("/user/profile", {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        dispatch(loaduser(res?.data));
        // console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
