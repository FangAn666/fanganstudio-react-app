import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Collection from '../pages/Collection';
import ThonReBlog from '../pages/ThonReBlog';

const AppRouter = () => {
    return (
        <Routes >
            <Route path="/"  element={<Home />} />
            <Route path='/colloection'  element={<Collection />} />
            <Route path='/thonreblog'  element={<ThonReBlog />} />
        </Routes>
    );
};

export default AppRouter;