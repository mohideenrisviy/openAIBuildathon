import React from 'react'
import './aboutvideo.css'

const AboutVideo = () => {
    return (
        <div className='about-video-container'>
            <div className='heading'>
                <span className='red f50 font-Roboto'>Get Started with FinAdvisor </span>
                {/* <br /> */}
                <span className='red font-Roboto-thin grey f10'>A Quick Tour and Overview</span>
            </div>

            <div className='video-bg'>
                <iframe
                    className='video-iframe'
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/rGeJmCguaYU"
                    title="FinAdvisor Intro"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>

            </div>

        </div>
    )
}

export default AboutVideo