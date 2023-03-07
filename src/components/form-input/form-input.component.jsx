import React from "react";
import "./form-input.styles.scss"

const FormInput = ({label, ...otherProps}) => (
    <div className="group">
        <input className="form-input" {...otherProps}/>
        {
            label ?
                (<label className={ `form-input-label ${otherProps.value.length ? "shrink" : ""}` }>
                    {label}
                </label>)
                : 
                null
        }
    </div>
)

export default FormInput 