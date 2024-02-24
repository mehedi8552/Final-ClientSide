import React from 'react';
import UserStore from '../../store/UserStore';

const Submitbtn = (props) => {

    const {isSubmitbtn} = UserStore();

    if (isSubmitbtn === false){

        return <button onClick={props.onClick} className="btn mt-3 btn-success mx-1" text="Submit" > Submit</button>
    }else{
        return <button className="btn mt-3 btn-success mx-5 " text="Submit" ><div className="spinner-border spinner-border-sm " role="status"></div> Processing...</button>
    }

};

export default Submitbtn;