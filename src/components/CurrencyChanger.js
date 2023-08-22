import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyChanger = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    };

    const currencyOptions = [
        { symbol: '$', name: 'Dollar' },
        { symbol: '£', name: 'Pound' },
        { symbol: '€', name: 'Euro' },
        { symbol: '₹', name: 'Rupee' },
    ];

    return (
        <div className="alert alert-success" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <select
    value={currency}
    onChange={handleCurrencyChange}
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgreen',
        color: 'white',
        width: '100%',
        height: '100%',
        borderRadius: '4px'
    }}
>
    {currencyOptions.map((option) => (
        <option
            key={option.symbol}
            value={option.symbol}
            style={{
                // display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black'
            }}
        >
            Currency ({option.symbol} {option.name})
        </option>
    ))}
</select>



        </div>
    );
};

export default CurrencyChanger;
