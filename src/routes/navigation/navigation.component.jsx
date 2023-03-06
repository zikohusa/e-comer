import React from 'react'
import { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
    return (
        <Fragment >
        <div className='navigation'>
            <Link to="/" className='logo-container'>
                <img src={logo} alt="SVG logo" />
            </Link>
            <div className='options'>
                <Link to="shop" className='option'>
                    SHOP
                </Link>
                <Link to="shop" className='option'>
                    CONTACT
                </Link>
                <Link to="signin" className='option'>
                    SIGN IN
                </Link>
            </div>
        </div>
        <Outlet />
        </Fragment>
    )
}


export default Navigation;