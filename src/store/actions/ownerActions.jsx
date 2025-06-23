import axios from "../../Utils/axios"
import Cookies from "js-cookie"
import { loadproducts } from "../reducers/productSlice";

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  const token = Cookies.get("token");
  try {
    const res = await axios.post(
      "https://wholesale-backend-cnfg.onrender.com/products",
      product,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Success:", res.data);
    alert("Product Created Successfully!");
  } catch (error) {
    console.log(error)
  }
}

export const asyncGetOwnerProduct = (token) => async (dispatch) => {
    try {
      if(token){
        const {data} = await axios.get("/products",{
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
        console.log(data.products);
        dispatch(loadproducts(data.products));
      } else {
        return { error: "Token not provided" };
      }
    } catch (error) {
      console.log(error);
      return error?.response?.data || { error: "An error occurred" };
    }
}