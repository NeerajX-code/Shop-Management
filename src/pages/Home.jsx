import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Login from "../components/Login";
import Register from "../components/Register";
import OwnerHome from "./owner/OwnerHome";
import { useSelector } from "react-redux";
import UserHome from "./user/userHome"


const Home = () => {
    const user = useSelector(state => state.userReducer.user)
    const [activeForm, setActiveForm] = useState("Register");

    return (

        <>
        {!user && <div className='home' style={{ fontFamily: "Lexend" }}>

            <section className='sec-home'>
                <h1>{activeForm}</h1>
                <div className='log-reg-div'>
                    <button className='log-reg-btn log-btn' style={{ backgroundColor: `${activeForm === "Login" ? "rgb(245, 243, 243)" : "transparent"}` }} onClick={() => setActiveForm('Login')}>Login</button>
                    <button className='log-reg-btn reg-btn' style={{ backgroundColor: `${activeForm === "Register" ? "rgb(245, 243, 243)" : "transparent"}` }} onClick={() => setActiveForm('Register')}>Register</button>
                </div>
                <Login activeForm={activeForm} />
                <Register activeForm={activeForm} setActiveForm={setActiveForm} />
            </section >
        </div>}

        {user && (
            <>
             {user?.role === "owner" && <OwnerHome />}
             {user?.role === "customer" && <UserHome />}
            </>
        )}
        
        </>
    );
};

export default Home;
