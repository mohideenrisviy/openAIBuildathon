import React from 'react';
import './banner.css'
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className='banner-container'>
            <div className='banner'>
                <img src={require('../../../assets/b1.jpg')} height={'100%'} width={'100%'} />
            </div>
            <div className='overlapText'>
                <span className='fontWhite b f50 font-Roboto text-shadow'>Welcome to FinAdvisor</span>
                <span className='fontWhite font-Roboto-thin grey'>Your Personal Financial AI Advisor </span>
                <button className='button f25 cursor hover font-Roboto-medium' onClick={() => navigate('/generate-advice')}>
                    <span>Get Started</span>
                </button>
            </div>
        </div>
    )
}

export default Banner