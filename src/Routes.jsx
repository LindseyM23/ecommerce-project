// where pages will be link 
// intead of the app.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; 
import CartPage from './pages/CartPage'; 
import ContentSection from "./components/ContentSection";
import ItemView from "./pages/ItemView";
import DashboardBag from "./components/DashboardBag";

function AppRoutes() {
    return (
        <Router>
            <div>
                
                <Routes>
            <Route path="/dashboard" element={<ContentSection/>}/>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/cart" element={<CartPage />} />
                   <Route path="/product" element={<ItemView/>}/>
<Route path="/dashboard-bag" element={<DashboardBag/>}/>
                </Routes>
                </div>
        </Router>
    );
}

export default AppRoutes;
