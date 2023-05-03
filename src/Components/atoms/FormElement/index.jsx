import React from 'react'
import Select from '../Select'
import Input from '../Input'
import Amount from '../Amount'

const FormElement = (props) => {
    switch (props.type) {
        case 'select': return <Select {...props} />
        case 'input': return <Input {...props} />
        case 'amount': return <Amount {...props} />
        default: null
    }

}

export default FormElement