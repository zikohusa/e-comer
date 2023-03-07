import React from "react";
import './custom-button.styles.scss'

const buttonTypeClasses = {
    google: 'google-sign-in',
    inverted: 'inverted'
};

const CustomButton = ({children, buttonType, ...otherProps}) => (
    <button className={`default-button ${buttonTypeClasses[buttonType]}`}  {...otherProps}>
        {children}
    </button>
)
export default CustomButton