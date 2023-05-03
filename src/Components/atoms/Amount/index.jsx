import React from 'react'
import '../Input/input.css'

const Amount = (props) => {
    const { label, type, id, onChange, currency, data } = props
    return (
        <div className='input-grid'>
            <span>{label}</span>
            <div className='input-box'>
                <div>
                    <span className='f15'>{currency} </span>
                    <input type={'number'} id={id} value={data[id]} onChange={onChange}></input>
                </div>
                <div>
                    <span>/</span>
                    <select id={`${id}_frequency`} value={data[`${id}_frequency`]} onChange={onChange}>
                        {/* <option hidden={true} value={''}>{'Select an Option'}</option> */}
                        {
                            [{ value: 'year', label: 'Annum' }, { value: 'month', label: 'Month' }, { value: 'week', label: 'Week' }].map(
                                (item, key) => <option key={key} value={item.value}>{item.label}</option>
                            )
                        }
                    </select>
                </div>

            </div>

        </div>
    )
}

export default Amount