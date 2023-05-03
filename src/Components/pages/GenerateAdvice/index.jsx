import React, { useEffect, useRef, useState } from 'react'
import PageLayout from '../../LayoutComponents/PageLayout'
import './generateadvice.css'
import axios from 'axios'
import Result from '../../atoms/Result';
import CollectUserData from '../../atoms/CollectUserData';

var ctzc = require('country-tz-currency');

const page1 = [
    {
        label: 'Name',
        type: 'input',
        id: 'name'

    },
    {
        label: 'Age',
        type: 'input',
        id: 'age'
    },
    {
        label: 'Gender',
        type: 'select',
        id: 'gender',
    },
    {
        label: 'Nationality',
        type: 'select',
        id: 'nationality'
    },
    {
        label: 'Income',
        type: 'amount',
        id: 'income'
    },
    {
        label: 'Expenses',
        type: 'amount',
        id: 'expense'
    },
    {
        label: 'I want to buy a',
        type: 'input',
        id: 'buy'
    },
    {
        label: 'Savings',
        type: 'input',
        id: 'savings'
    }

]

const page2 = [
    {
        label: 'Housing Expenses',
        type: 'amount',
        id: 'housingExpenses'
    },
    {
        label: 'Utilities',
        type: 'amount',
        id: 'utilities'
    },
    {
        label: 'Food',
        type: 'amount',
        id: 'food',
    },
    {
        label: 'Transportation',
        type: 'amount',
        id: 'transportation'
    },
    {
        label: 'Child Care',
        type: 'amount',
        id: 'childCare'
    },
    {
        label: 'Education',
        type: 'amount',
        id: 'education'
    },
    {
        label: 'Health Care',
        type: 'amount',
        id: 'healthCare'
    },
    {
        label: 'Personal Care',
        type: 'amount',
        id: 'personalCare'
    },
    {
        label: 'Entertainment',
        type: 'amount',
        id: 'entertainment'
    },
    {
        label: 'Gift & Donation',
        type: 'amount',
        id: 'giftsAndDonations'
    },
    {
        label: 'Misc Savings',
        type: 'amount',
        id: 'miscSavings'
    },
    {
        label: 'Taxes',
        type: 'amount',
        id: 'taxes'
    }
]
const page2_initialValues = {
    "housingExpenses_frequency": "year",
    "utilities_frequency": "year",
    "food_frequency": "year",
    "transportation_frequency": "year",
    "childCare_frequency": "year",
    "education_frequency": "year",
    "healthCare_frequency": "year",
    "personalCare_frequency": "year",
    "entertainment_frequency": "year",
    "giftsAndDonations_frequency": "year",
    "miscSavings_frequency": "year",
    "taxes_frequency": "year",
}
const optionsObject = {
    'gender': [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }]
}

const getCurrency = (country) => {
    const countries = ctzc.getAllCountries()
    let selectedCountry = Object.entries(countries).find(item => item[1].countryName === country)
    return ctzc.getCurrencyByCode(selectedCountry[1].currencyCode)
        ?.symbol ? ctzc.getCurrencyByCode(selectedCountry[1].currencyCode)?.symbol
        : selectedCountry[1].currencyCode
}

const GenerateAdvice = () => {
    const [data, setData] = useState({ 'nationality': "India", currency: getCurrency("India"), income_frequency: "year", expense_frequency: "year", ...page2_initialValues })
    const [options, setOptions] = useState(optionsObject)
    const [currency, setCurrency] = useState(ctzc.getCurrencyByCode("INR").symbol)

    const [showR1, setShowR1] = useState(false)
    const [showR2, setShowR2] = useState(false)
    const [showR3, setShowR3] = useState(false)
    const [showR4, setShowR4] = useState(false)

    const [showP2, setShowP2] = useState(false)
    const [showP3, setShowP3] = useState(false)
    const [showP4, setShowP4] = useState(false)

    const [results, setResults] = useState({})
    const [loading, setLoading] = useState(false)

    const r1 = useRef(null)
    const p2 = useRef(null)
    const r2 = useRef(null)
    const p3 = useRef(null)
    const r3 = useRef(null)
    const p4 = useRef(null)
    const r4 = useRef(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        const countries = ctzc.getAllCountries()
        let countriesOptions = Object.entries(countries).map(item => {
            return { value: item[1].countryName, label: item[1].countryName }
        })
        setOptions({ ...options, 'nationality': countriesOptions })
    }, [])


    const handleChange = (e) => {

        if (e.target.id === 'nationality') {
            setCurrency(getCurrency(e.target.value))
            setData({ ...data, "currency": getCurrency(e.target.value), [e.target.id]: e.target.value })
        } else {
            setData({ ...data, [e.target.id]: e.target.value })
        }
    }

    const onClick = (page) => {
        // r1.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setLoading(true)
        switch (page) {
            case 'page1': setShowR1(false); break;
            case 'page2': setShowR2(false); break;
            case 'page3': setShowR3(false); break;
            case 'page4': setShowR4(false); break;
            default: null
        }
        console.log({ page, ...data })
        axios.post('http://localhost:8080/chatwithopenai', { page, ...data })
            .then(res => {
                setLoading(false)
                setResults({ ...results, [page]: res.data.split('\n') })

                switch (page) {
                    case 'page1': setShowR1(true); r1.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); break;
                    case 'page2': setShowR2(true); r2.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); break;
                    case 'page3': setShowR3(true); r3.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); break;
                    case 'page4': setShowR4(true); r4.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); break;
                    default: null
                }
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    }
    const isdisable = (metadata) => {
        let disable = false;
        metadata.forEach(item => {
            if (data[item.id] === undefined || data[item.id] === "")
                disable = true
        });
        return disable ? 'disable' : null
    }
    return (
        <PageLayout>
            <CollectUserData
                title='State your finances: Income & Expense'
                onClick={() => onClick('page1')}
                handleChange={handleChange}
                data={data}
                pageMetadata={page1}
                image='Stage1.png'
                options={options}
                currency={currency}
                disable={isdisable(page1)}
                loading={loading}
            />
            <div ref={r1}>
                {showR1 && <Result name={data.name} result={results.page1} onClick={() => { setShowP2(true); p2.current.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} />}
            </div>

            <div ref={p2}>
                {showP2 && (
                    <CollectUserData
                        title='Categorize expenses for optimal purchases'
                        onClick={() => onClick('page2')}
                        handleChange={handleChange}
                        data={data}
                        pageMetadata={page2}
                        image='Stage2.png'
                        options={options}
                        currency={currency}
                        disable={isdisable(page2)}
                        loading={loading}
                    />
                )}
            </div>
            <div ref={r2}>
                {showR2 && <Result name={data.name} result={results.page2} onClick={() => { alert("My advice is currently limited to the first two stages; I'm in the process of developing advice for stages 3 and 4.") }} />}
            </div>
        </PageLayout>
    )
}

export default GenerateAdvice