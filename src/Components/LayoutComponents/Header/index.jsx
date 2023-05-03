import React from 'react'
import './header.css'
import Button from '../../atoms/Button'
import logo from '../../../assets/logo.svg'
const Header = () => {
    return (
        <header className='flex jc ac p20 h50 boxShadow header'>
            <div className='left-header'>
                <img src={logo} width={'200px'} />
            </div>
            <div className='right-header flex jc ac'>
                {/* <span className='mr20'>About us</span>
                <span className='mr20'>About us</span> */}
                <Button title='Contact Us' color='silver' />
            </div>
        </header>
    )
}

export default Header