import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
        // Add your login logic here
      };



  const handleLoginClick = () => {
    document.getElementById("my_modal_signup").close();
    document.getElementById("my_modal_3").showModal();
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='w-[600px]'>
        <div className='modal-box'>
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_signup").close()}
            >
              ✕
            </Link>
          
          <h3 className="font-bold text-lg">Signup</h3>
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-80 px-3 border rounded-md outline-none"
              {...register('Name', { required: true })}
            />
            <br />
            {errors.email && <span className="text-red-500 text-sm ">Email is required</span>}
          </div>
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 border rounded-md outline-none"
              {...register('email', { required: true })}
            />
            <br />
            {errors.email && <span className="text-red-500 text-sm ">Email is required</span>}
          </div>
          {/* Password */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 border rounded-md outline-none"
              {...register('password', { required: true })}
            />
            <br />
            {errors.password && <span className="text-red-500 text-sm  ">Password is required</span>}
          </div>
          {/* Confirm Password */}
          {/* <div className="mt-4 space-y-2">
            <span>Confirm Password</span>
            <br />
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-80 px-3 border rounded-md outline-none"
            />
          </div> */}
          {/* Button */}
          <div className="flex justify-around mt-4">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
            >
              Signup
            </button>
            <p>
              Already registered?{' '}
              <button
                type="button"
                className="underline text-blue-200 cursor-pointer"
                onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>{" "}
              <Login/>
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
