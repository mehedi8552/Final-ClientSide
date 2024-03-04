import React from "react";
import Submitbtn from "../../Component/Submitbtn";
import UserStore from "../../../store/UserStore";
import ValidationHelper from "../../../utility/ValidationHelper";
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
const OTPFrom = () => {
  const navigate = useNavigate()
    const {OTP,OTPData,LoginRequest}= UserStore();

    let SubmitOTP = async()=>{
      if(ValidationHelper.IsEmpty(OTP.otp)){
        toast.error('OTP not match')
      }else{
        
        let res =  await LoginRequest(OTP.otp)
        console.log(res)
        res? navigate('/'):toast.error('Somthig went wrong');
      }
    }
  

  return (
    <div className="">
      <div className=" h-screen flex justify-center bg-green-200  ">
        <div className="">
          <div className=" p-5 bg-green-600 m-16 rounded-xl">
            <h4>Enter Verification Code</h4>
            <p>
              A verification code has been sent to the email address you provide
            </p>
            <input
              value={OTP.otp}
              onChange={(e)=>{OTPData("otp",e.target.value)}}
              placeholder="Verification"
              type="text"
              className="form-control"
            />
            <Submitbtn
              onClick={SubmitOTP}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPFrom;
