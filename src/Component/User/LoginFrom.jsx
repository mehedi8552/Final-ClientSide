import React from 'react';
import UserStore from "../../../store/UserStore";
import Submitbtn from "../../Component/Submitbtn";
import ValidationHelper from "../../../utility/ValidationHelper";
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
const loginFrom = () => {
  const navigate = useNavigate()
    const {login,loginReq,OldLoginreq} = UserStore();

    let SubmitLoing = async()=>{
        if(ValidationHelper.IsEmpty(login)){
          toast.error('Must Fill to loging')
        }
        else{
          let res= await OldLoginreq(login.email)
          //console.log(res)
          res? navigate('/'):toast.error('Somthig went wrong');
        }
      }
    return (
        <div className=" h-screen flex justify-center items-center bg-green-200 p-4 ">
         <div className="flex justify-content-center bg-green-600 rounded-xl">
        <div >
          <div className=" p-5">
            <h4 className="text-center">Enter Your Information</h4>
            <p className="text-center">
              A verification code will be sent to the email address you provide
            </p>
            <input
              value={login.email}
              onChange={(e)=>{loginReq("email",e.target.value)}}
              
              placeholder="Email"
              type="email"
              className="form-control m-2"
            />
             <input
              value={login.password}
              onChange={(e)=>{loginReq("password",e.target.value)}}
              
              placeholder="Password"
              type="password"
              className="form-control m-2"
            />
            <Submitbtn onClick={SubmitLoing} text = "next"/>
          </div >
        </div>
      </div>
    </div>
    );
};

export default loginFrom;