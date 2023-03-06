import React from "react";
import CustomButton from "../../custom-button/custom-button.component";
import FormInput from "../../form-input/form-input.component";
import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:"", password:""})

    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value})
        console.log(event.target)
    }

    render() {
        return(
            <div className="sign-in">
                <h1 className="title">SIGN IN </h1>
                <h3>I already have an account</h3>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput onChange={this.handleChange} type="email" label="Email" name="email" value={this.state.email} required />
                    <FormInput onChange={this.handleChange} type="password" label="Password" name="password" value={this.state.password} required />
                    <CustomButton type="submit" >Sign In</CustomButton>
                </form>
            </div>
        ) 
    }
}
export default SignIn