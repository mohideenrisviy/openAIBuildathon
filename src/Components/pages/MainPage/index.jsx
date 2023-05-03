import React from 'react'
import PageLayout from '../../LayoutComponents/PageLayout'
import Banner from '../../sections/Banner'
import AboutVideo from '../../sections/AboutVideo'
import HowItWorks from '../../sections/HowItWorks'

const MainPage = () => {
    return (
        <PageLayout>
            <Banner />
            <AboutVideo />
            <HowItWorks />
        </PageLayout>
    )
}

export default MainPage