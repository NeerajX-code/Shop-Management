import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { asyncLoginUser } from "../store/actions/userActions";

const Login = ({ activeForm }) => {
  const dispatch = useDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const loginSubmit = (data) => {
    dispatch(asyncLoginUser(data));
  };

  return (
    <>
      {activeForm === "Login" && (
        <form onSubmit={handleSubmit(loginSubmit)} className="form login">
          <p>Email :</p>
          <input
            {...register("email")}
            type="text"
            placeholder="Enter Your Email"
          />
          <p>Password :</p>
          <input
            {...register("password")}
            type="text"
            placeholder="Enter Your password"
          />
          <Link to="/">Forgot Password?</Link>

          <input className="" type="submit" value="Login" />
        </form>
      )}
    </>
  );
};

export default Login;
