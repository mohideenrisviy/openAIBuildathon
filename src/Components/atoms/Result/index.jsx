import React from 'react'
import './result.css'
import Button from '../Button'

const Result = ({ result, onClick, name }) => {
    // console.log(result)
    return (
        <div className='result-container'>
            <h1 className='font-Roboto-medium'>Automated Investment Advice</h1>
            <p className='font-nunito'>{`Dear ${name}`}</p>
            {result.map((res, index) => {
                // console.log(res)
                const row = res.split(':')
                console.log(row)
                return (
                    <>
                        {row.length < 2 || (row.length === 2 && row[1] === "")
                            ? res !== "" && <p key={index} className='font-nunito'>{res}</p>
                            : (
                                <div className='table'>
                                    <div>
                                        <span className='font-nunito-b'>{row[0]} </span>
                                    </div>
                                    <div>
                                        <span className='font-nunito'>{row[1]} </span>
                                    </div>
                                </div>
                            )
                        }
                    </>
                )
            })}

            <div className='flex jc-end ac mt30'>
                <Button title='Fine-Tune Suggestions' color={'orange'} onClick={onClick} />
            </div>
        </div>
    )
}

export default Result