import React, { useState, useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux'; // Import useDispatch for Redux actions
import { useNavigate } from 'react-router-dom'; // Import useNavigate to programmatically navigate


const ShippingAdd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const existingAddress = useSelector((state) => state.user?.address || {});

    
    const [address, setAddress] = useState({
        name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });

    useEffect(() => {
        if (existingAddress) {
            setAddress(existingAddress);
        }
    }, [existingAddress]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress({ ...address, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dispatch the updated address to Redux store
        dispatch({ type: 'UPDATE_ADDRESS', payload: address });
        // Navigate back to the Checkout page
        navigate('/checkout');
    };



    return (
        <div className="shipping-address-form">
            <h2>Edit Shipping Address</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Full Name" value={address.name} onChange={handleChange} required />
                <input type="text" name="street" placeholder="Street Address" value={address.street} onChange={handleChange} required />
                <input type="text" name="city" placeholder="City" value={address.city} onChange={handleChange} required />
                <input type="text" name="state" placeholder="State" value={address.state} onChange={handleChange} required />
                <input type="text" name="zip" placeholder="ZIP Code" value={address.zip} onChange={handleChange} required />
                <input type="text" name="country" placeholder="Country" value={address.country} onChange={handleChange} required />
                <button type="submit">Save Address</button>
            </form>
        </div>
    );
};

export default ShippingAdd;
