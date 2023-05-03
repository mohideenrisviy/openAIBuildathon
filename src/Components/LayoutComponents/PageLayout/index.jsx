import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const PageLayout = (props) => {
    return (
        <div className='flex jc fd-c mh100'>
            <div>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>

    )
}

export default PageLayout