import axios from "../../Utils/axios"
import Cookies from "js-cookie"

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