import React from "react";
import CustomButton from "../../custom-button/custom-button.component";
import FormInput from "../../form-input/form-input.component";
import { useState } from "react";
import {CreateUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../../utils/firebase/firebase.utils";
import './sign-in.styles.scss'


const defaultFormFields = {
    email: '',
    password: '',
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response)
            setFormFields(defaultFormFields)
        } catch(error) {
            switch(error.code) {
                case 'auth/wrong-password' : alert('wrong password')
                    break;
                case 'auth/user-not-found' : alert("no user associated with this email")
                default : console.log('error : ', error);
            };
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value})
    }

    const signInWithGoogle = async() => {
        const {user} = await signInWithGooglePopup();
        await CreateUserDocumentFromAuth(user);
    } ;

        return(
            <div className="sign-in-container">
                <h1 className="title">SIGN In </h1>
                <h3>You don't have an account</h3>
                <span>Sign In with your name, email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput onChange={handleChange} type="email" label="Email" name="email" value={email} required />
                    <FormInput onChange={handleChange} type="password" label="Password" name="password" value={password} required />
                    <div className="button-container">
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} buttonType='google'>Google Sign In</CustomButton>
                    </div>
                </form>
            </div>
        ) 
};
export default SignIn;