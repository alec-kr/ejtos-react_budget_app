import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining'
import ExpenseTotal from './components/ExpenseTotal'
import ExpenseItem from './components/ExpenseItem'
import ExpenseList from './components/ExpenseList'


import { AppProvider } from './context/AppContext';
import AllocationForm from './components/AllocationForm';
import CurrencyChanger from './components/CurrencyChanger';
const App = () => {
    return (
        <AppProvider>
            <div className='container' style={{ textAlign: 'center' }}>
    <h1 className='mt-3'>Company's Budget Allocation</h1>
    <div className='row mt-4' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        {/* Budget */}
        <div className='col-sm' style={{ marginBottom: '1rem' }}>
            <Budget />
        </div>

        {/* Remaining */}
        <div className='col-sm' style={{ marginBottom: '1rem' }}>
            <Remaining />
        </div>

        {/* Expense Total */}
        <div className='col-sm' style={{ marginBottom: '1rem' }}>
            <ExpenseTotal />
        </div>

        {/* Currency Changer */}
        <div className='col-sm' style={{marginBottom: "1rem"}}>
            <CurrencyChanger />
        </div>
    </div>

    {/* Expense List */}
    <div className='row mt-3' style={{ width: '90%', margin: '0 auto' }}>
        <div className='col-sm'>
            <ExpenseList />
        </div>
    </div>

    {/* Expense Item */}
    <div className='row mt-3'>
        <div className='col-sm'>
            <ExpenseItem />
        </div>
    </div>

    {/* Allocation Form */}
    <div className='row mt-3'>
        <div className='col-sm'>
            <AllocationForm />
        </div>
    </div>

    
</div>

        </AppProvider>
    );
};
export default App;
