import React from "react";
import CustomButton from "../../custom-button/custom-button.component";
import FormInput from "../../form-input/form-input.component";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, CreateUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";
import './sign-up.styles.scss'


const defaultFormFields = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {fullName, email, password, confirmPassword} = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("passwords do not match")
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await CreateUserDocumentFromAuth(user, {fullName});
            setFormFields(defaultFormFields);
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('email account already in use')
            } else {
                console.log('user creation encountered an error', error)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value})
    }

        return(
            <div className="sign-up-container">
                <h1 className="title">SIGN UP </h1>
                <h3>You don't have an account</h3>
                <span>Sign up with your name, email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput onChange={handleChange} type="text" label="Full Name" name="fullName" value={fullName} required />
                    <FormInput onChange={handleChange} type="email" label="Email" name="email" value={email} required />
                    <FormInput onChange={handleChange} type="password" label="Password" name="password" value={password} required />
                    <FormInput onChange={handleChange} type="password" label="Confirm Password" name="confirmPassword" value={confirmPassword} required />
                    <CustomButton type="submit" >Sign Up</CustomButton>
                </form>
            </div>
        ) 
};
export default SignUp;