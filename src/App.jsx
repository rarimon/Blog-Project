import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ByCatagoryPage from "./pages/ByCatagoryPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/bycategory/:categoryID" element={<ByCatagoryPage />} />
                <Route path="/details/:postID" element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;