import React from 'react';
import '../Input/input.css'

const Select = (props) => {
    const { label, type, id, onChange, options, data } = props
    console.log(data)
    return (
        <div className='input-grid'>
            <span>{label}</span>
            <select onChange={onChange} value={data[id]} id={id}>
                <option hidden={true} value={''}>{'Select an Option'}</option>
                {
                    options[id]?.map(
                        (item, key) => <option key={key} value={item.value}>{item.label}</option>
                    )
                }
            </select>
        </div>
    )
}

export default Select