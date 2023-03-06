import React from "react";
import SignIn from "../../components/sign/sign-in/sign-in.component";
import { signInWithGooglePopup, CreateUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import CustomButton from "../../components/custom-button/custom-button.component";

const SignInUp = () => {
    const LogGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await CreateUserDocumentFromAuth(user);
    } ;
    return(
        <div>
            <SignIn />
            <CustomButton onClick={LogGoogleUser}>Sign In With Google</CustomButton>
        </div>
    )
};

export default SignInUp