import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        const newBudget = parseFloat(event.target.value);
        dispatch({ type: 'SET_BUDGET', payload: newBudget });
    };

    return (
        <div className='alert alert-secondary' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <span style={{ marginRight: '0.5rem' }}>Budget:</span>
    <span style={{ fontSize: '1.2em' }}>{currency}</span>
    <input
        type='number'
        value={budget}
        onChange={handleBudgetChange}
        style={{ width: '8rem', marginLeft: '0.5rem' }}
        step={10}
        max={20000}
        min={totalExpenses}
    />
</div>

    
    );
};

export default Budget;
