import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Register = ({ activeForm }) => {
  const [userType, setType] = useState("customer");
  const {
    register,
    reset,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (userType !== "customer") unregister("shopId");
    if (userType !== "sellsmen") unregister("enterpriseName");
    if (userType !== "owner") {
      unregister("shopName");
      unregister("shopType");
    }
  }, [userType, unregister]);

  const RegisterSubmit = async (data) => {
    try {
      userType == "owner" && (data.shopId = nanoid());
      data.role = userType;
      console.log(data);
      let res = await axios.post("/auth/register", data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {activeForm === "Register" && (
        <>
          <div className="userTypeDiv">
            <button
              className="userTypeBtn"
              style={{
                backgroundColor: `${
                  userType === "customer" ? "rgb(245, 243, 243)" : "transparent"
                }`,
              }}
              onClick={() => setType("customer")}
            >
              User
            </button>

            <button
              className="userTypeBtn"
              style={{
                backgroundColor: `${
                  userType === "salesman" ? "rgb(245, 243, 243)" : "transparent"
                }`,
              }}
              onClick={() => setType("salesman")}
            >
              SellsMen
            </button>

            <button
              className="userTypeBtn"
              style={{
                backgroundColor: `${
                  userType === "owner" ? "rgb(245, 243, 243)" : "transparent"
                }`,
              }}
              onClick={() => setType("owner")}
            >
              WholeSeller
            </button>
          </div>

          <form
            onSubmit={handleSubmit(RegisterSubmit)}
            className="form register"
          >
            <input
              {...register("name")}
              type="text"
              placeholder="Enter Your Name"
            />
            <input
              {...register("email")}
              type="email"
              placeholder="Enter Your Email"
            />
            <input
              {...register("password")}
              type="password"
              placeholder="Enter Your password"
            />

            {userType === "customer" && (
              <input
                {...register("shopId")}
                type="text"
                placeholder="Enter WholeSeller ID"
              />
            )}

            {userType === "sellsmen" && (
              <input
                {...register("enterpriseName")}
                type="text"
                placeholder="Enter Enterprise Name"
              />
            )}

            {userType === "owner" && (
              <>
                <input
                  {...register("shopName")}
                  type="text"
                  placeholder="Enter Your Shop Name"
                />
                <input
                  {...register("address")}
                  type="text"
                  placeholder="Enter Your Address"
                />
                <select {...register("shopType")} className="form-select">
                  <option value="">Select Category</option>
                  <option value="RetailPackStore">Retail Pack Shop</option>
                  <option value="BulkRationStore">Bulk Ration Shop</option>
                </select>
              </>
            )}
            <input type="submit" value="Register" />
          </form>
        </>
      )}
    </>
  );
};

export default Register;
