import React from "react";
import Submitbtn from "../Submitbtn";
import UserStore from "../../../store/UserStore";
import ValidationHelper from "../../../utility/ValidationHelper";
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
const loginFrom = () => {
  const navigate = useNavigate()
  const {loginData,loginDataReq,OTPReqest} = UserStore();
  let SubmitFrom = async()=>{
    if(!ValidationHelper.IsEmail(loginData.email)){
      toast.error('Email Address Requird ')
    }else{
       await OTPReqest(loginData);
      console.log(loginData);
      loginData?navigate('/otp'):toast.error('Somthig went wrong');
    }
  }

  return (
    <div className=" h-screen flex items-center justify-center bg-green-200 p-10 " >
      <div className=" flex justify-center items-center bg-green-600 rounded-xl ">
        <div className=" ">
          <div className="p-5 ">
            <h4 className="text-center">Enter Your Information</h4>
            <p className="text-center">
              A verification code will be sent to the email address you provide
            </p>
            <input
              value={loginData.name}
              onChange={(e)=>{loginDataReq("name",e.target.value)}}
              
              placeholder="Enter Name"
              type="Name"
              className="form-control m-2"
            />
             <input
              value={loginData.email}
              onChange={(e)=>{loginDataReq("email",e.target.value)}}
              
              placeholder="Email Address"
              type="email"
              className="form-control m-2"
            />
            <input
              value={loginData.phone}
              onChange={(e)=>{loginDataReq("mobile",e.target.value)}}
              
              placeholder="Enter phone"
              type="number"
              className="form-control m-2"
            />
              <input
              value={loginData.password}
              onChange={(e)=>{loginDataReq("password",e.target.value)}}
              
              placeholder="Enter password"
              type="password"
              className="form-control m-2"
            />
            <Submitbtn onClick={SubmitFrom} text = "next"/>
          </div >
        </div>
      </div>
    </div>
  );
};

export default loginFrom;
