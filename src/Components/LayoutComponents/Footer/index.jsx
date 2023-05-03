import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer fontWhite p20 flex jc ac fd-c'>
            {/* <h1> Footer</h1> */}
            <div className='flex jc-c ac' style={{ width: '100%', textAlign: 'center' }}>
                Please note that the financial recommendations provided by our AI chatbot are based on the information provided by the user and are intended for informational purposes only. The recommendations should not be construed as financial advice or a guarantee of financial performance. The user is solely responsible for any financial decisions made based on the recommendations provided by the chatbot. We do not accept any liability for any losses or damages incurred as a result of using the chatbot's recommendations.
            </div>
            <div className='f10'>
                &copy; Copywrite, All reserved to Mohideen Risvi
            </div>
        </footer>
    )
}

export default Footer