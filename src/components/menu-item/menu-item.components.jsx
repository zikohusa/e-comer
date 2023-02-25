import React from "react";
import './menu-item.styles.scss'

const MenuItem = ({title, key, image, size}) => ( //{title} = props.title
    <div className={`${size} menu-item`}>
        <div className="background-image" style={{backgroundImage: `URL(${image})`}}></div>
            <div className="content">
                <h1 className="title" key={`${key}`} >{title.toUpperCase()}</h1>
                <span className="subtitle">Shop now</span>
            </div>
        
    </div>
)

export default MenuItem;