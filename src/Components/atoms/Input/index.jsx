import React from 'react';
import './input.css'

const Input = (props) => {
    const { label, type, id, onChange } = props
    return (
        <div className='input-grid'>
            <span>{label}</span>
            <input type={type} id={id} onChange={onChange}></input>
        </div>
    )
}

export default Input