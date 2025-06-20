import axios from "../../Utils/axios"

export const asyncCreateProduct = (product) => async (dispatch,getState) => {
  try {
    const {res} =  await axios.post(" https://wholesale-backend-cnfg.onrender.com/products/",product)
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}