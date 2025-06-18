import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

   
const Login = ({activeForm}) => {
     const { register, reset, handleSubmit,  formState: { errors } } = useForm();
      const loginSubmit = (data) => {
        console.log(data);
    }

  return (
    <>
                {activeForm === 'Login' && (
                    <form onSubmit={handleSubmit(loginSubmit)} className='form login'>
                      

                        <p>Email :</p>
                        <input {...register("emailL")} type="text" placeholder='Enter Your Email' />
                        <p>Password :</p>
                        <input {...register("passwordL")} type="password" placeholder='Enter Your password' />
                        <Link to='/'>Forgot Password?</Link>

                        <input type="submit" value="Login" />
                    </form>
                )}
</>
  )
}

export default Login