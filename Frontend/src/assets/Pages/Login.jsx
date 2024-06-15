import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const HandleLogin = () => {
    toast.success("successful login")
    navigate('/Dashboard');
  };
  return (
    <div className="bg-blue-300 min-h-screen flex items-center justify-center text-gray-800">
      <div className="p-2 bg-white rounded-lg flex-1 max-w-[600px] mx-4">
        <p className="text-2xl mx-4 font-medium">Login</p>
        <div className="hover:border-gray-300 border-transparent border rounded-md p-2 my-1">
          <p className="text-xs font-medium mb-1">email</p>
          <input
            type="email"
            name=""
            className="w-full py-1 outline-none"
            placeholder="Enter your email"
          />
        </div>
        {/*  */}
        <div className="hover:border-gray-300 border-transparent border rounded-md p-2 my-1">
          <p className="text-xs font-medium mb-1">password</p>
          <input
            type="password"
            name=""
            className="w-full py-1 outline-none"
            placeholder="Enter your password"
          />
        </div>
        {/*  */}
        {/* <div className="hover:border-gray-300 border-transparent border rounded-md p-2">
          <p className="text-xs font-medium mb-1">name</p> 
          <input type="text" name="" className="w-full py-1 outline-none" placeholder="Enter your name" />
        </div> */}

        <button
          className="bg-blue-400 w-full rounded-md p-3 mt-5 text-white active:scale-95"
          onClick={HandleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
