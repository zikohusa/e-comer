import React from "react";
import SignIn from "../../components/sign/sign-in/sign-in.component";
import SignUp from "../../components/sign/sign-up/sign-up.component";
import './authentication.styles.scss'

const Authentication = () => {
    
    return(
        <div className="authentication-container">
            <SignIn />
            <SignUp />
        </div>
    )
};

export default Authentication