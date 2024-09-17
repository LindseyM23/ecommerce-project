import React from 'react';
import CardSelection from '../components/CardSelection';
import AddNewCard from '../components/AddNewCard';
import '../Styles/PaymentPage/PaymentPage.css';

const PaymentPage = () => {
    return (
        <div className="payment-page">
            <CardSelection />
            <AddNewCard />
        </div>
    );
};

export default PaymentPage;