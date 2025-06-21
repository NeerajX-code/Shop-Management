import axios from "../../Utils/axios";
import { loaduser } from "../reducers/userSlice";
import Cookies from "js-cookie"

export const asyncFetchUser = () => async (dispatch) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            dispatch(loaduser(user));
        }
    } catch (error) {
        console.log(error);
    }
}

export const asyncLoginUser = (user) => async (dispatch, getState) => {
    try {
        let { data } = await axios.post("/auth/login", user);
        dispatch(loaduser(data.user));
        localStorage.setItem("user", JSON.stringify(data.user));
        Cookies.set("token", `${data.token}`, {
            expires: 7, // days
            secure: true, // only over HTTPS
            sameSite: "strict",
        })
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

// // Example using fetch
// const res = await fetch("https://your-backend.com/auth/login", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     email: "user@example.com",
//     password: "password123",
//     role: "customer" // or "owner" / "salesman"
//   })
// });

// const data = await res.json();
// const token = data.token; // ← Your JWT token