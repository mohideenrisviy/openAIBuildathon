import React from 'react'
import './howitworks.css'

const HowItWorks = () => {
    return (
        <div className='how-it-works-container'>
            <h1 className='font-Roboto-medium-40'>Ease your financial decision-making process with FinAdvisor.</h1>
            <div className='small-line'></div>
            <div className='grid-container'>
                <div className='grid-item'>
                    <div className='circle'>
                        <span className='font-Roboto'>1</span>
                    </div>
                    <h3 className='font-Roboto-medium-20'>State your finances: Income and Expense</h3>
                    <span className='justify font-nunito'>As a prerequisite, it is imperative to furnish your personal particulars, inclusive of total earnings, outflows, and the allocated amount from your savings earmarked for this purchase, as well as the product you intend to procure, to initiate the AI-driven analysis. The AI shall scrutinize your inputs and provide a suitable recommendation based on the same.</span>
                </div>
                <div className='align-left'>
                    <div className='circle'>
                        <span className='font-Roboto'>2</span>
                    </div>
                    <h3 className='font-Roboto-medium-20'>Categorize expenses for optimal purchases</h3>
                    <span className='justify font-nunito'>In step 2, in order to enhance the accuracy of the AI recommendations, it is necessary to categorize your expenses into different segments. The AI will scrutinize your expenditures and propose feasible ways to minimize them, enabling you to fulfill your aspirations of making your desired purchase.</span>
                </div>
                <div className='grid-item'>
                    <div className='circle'>
                        <span className='font-Roboto'>3</span>
                    </div>
                    <h3 className='font-Roboto-medium-20'>Sharing savings & loans for AI analysis</h3>
                    <span className='justify font-nunito'>As part of step 3, you are required to furnish a detailed account of your savings and loans, specifying the interest earned on each savings account, the interest paid on each loan, the loan tenure, and other relevant particulars. The AI will scrutinize your savings and loans and provide you with suitable recommendations, such as closing high-interest loans with your savings, and advise on whether it would be prudent to utilize your savings for your dream purchase or opt for a new loan.</span>
                </div>
                <div className='align-left'>
                    <div className='circle'>
                        <span className='font-Roboto'>4</span>
                    </div>
                    <h3 className='font-Roboto-medium-20'>Optimizing finance with asset inputs</h3>
                    <span className='justify font-nunito'>As the final step, it is necessary to input your asset details to provide the AI with a comprehensive understanding of your financial standing. The AI will scrutinize your assets and the data you have provided thus far and present its ultimate recommendation on how to obtain your desired product. Additionally, it will suggest a new proposed personal budget based on your proposed income and expenses.</span>
                </div>


            </div>

        </div>
    )
}

export default HowItWorks