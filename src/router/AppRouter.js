import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Collection from '../pages/Collection';
import ThonReBlog from '../pages/ThonReBlog';
import ViewbyPage from '../view/viewbypage';

const AppRouter = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/thonreblog" element={<ThonReBlog />} />
            <Route path="/trgby" element={<ViewbyPage />}  />
        </Routes>

    );
};

export default AppRouter;