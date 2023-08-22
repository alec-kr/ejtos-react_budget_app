import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <span style={{ marginRight: '0.5rem' }}>Remaining: {currency}{budget - totalExpenses}</span>
</div>

    );
};
export default Remaining;
