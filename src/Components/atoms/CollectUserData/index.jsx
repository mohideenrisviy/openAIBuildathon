import React from 'react'
import FormElement from '../FormElement'
import Button from '../Button'

const CollectUserData = (props) => {
    const { pageMetadata, image, title, onClick, handleChange, data, options, currency, disable, loading } = props
    return (
        <div className='advice-grid'>
            <div className='flex jc ac'>
                <img src={require(`../../../assets/${image}`)} width={'100%'} />
            </div>
            <div className=' '>
                <div className='form-container boxShadow'>
                    <div className='flex jc-c ac'>
                        <h1 className='font-Roboto-medium'>{title}</h1>
                    </div>
                    {pageMetadata.map(item => <FormElement {...item} onChange={handleChange} data={data} options={options} currency={currency} />)}
                    <div className='flex jc-end ac mt30'>
                        <Button disable={disable || loading ? 'disable' : null} loading={loading} title={'Generate'} color={'orange'} onClick={() => { onClick() }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectUserData