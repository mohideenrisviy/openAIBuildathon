import React from 'react'

const Button = (props) => {
    const { title, color, onClick, disable, loading } = props
    return (
        <div className={`boxShadow flex jc-c ac mw100 py10 ${color} br5 px20 cursor hover ${disable}`} onClick={disable ? () => { } : onClick}>
            {loading
                ? <div className='spinner'></div>
                : <span className='fs15 b'>{title}</span>
            }

        </div>
    )
}
export default Button