import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from '../Utils/axios';
import Login from '../components/login';
import Register from '../components/Register';

const Home = () => {
    const [activeForm, setActiveForm] = useState('Register');
   
   
  


    return (
        <div className='home' style={{ fontFamily: "Lexend" }}>

            <section className='sec-home'>
                <h1>{activeForm}</h1>
                <div className='log-reg-div'>
                    <button className='log-reg-btn log-btn' style={{ backgroundColor: `${activeForm === "Login" ? "rgb(245, 243, 243)" : "transparent"}` }} onClick={() => setActiveForm('Login')}>Login</button>
                    <button className='log-reg-btn reg-btn' style={{ backgroundColor: `${activeForm === "Register" ? "rgb(245, 243, 243)" : "transparent"}` }} onClick={() => setActiveForm('Register')}>Register</button>
                </div>
                <Login activeForm={activeForm} />
                <Register activeForm={activeForm} />
            </section >
        </div>

    );
};

export default Home;