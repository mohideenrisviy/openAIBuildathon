import React from 'react';

// Import necessary components from react-router-dom library
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import custom components to render for different routes
import MainPage from './Components/pages/MainPage'
import PageNotFound from './Components/pages/PageNotFound';
import GenerateAdvice from './Components/pages/GenerateAdvice';

const NavigationRoutes = () => {
    // Render the component's content, which includes a Router component with nested Routes
    return (
        <Router>
            <Routes>
                {/* Define the root route, which redirects to the home route */}
                <Route path='/' element={<Navigate to='/home' />} />


                <Route path='/home' element={<MainPage />} />
                <Route path='/generate-advice' element={<GenerateAdvice />} />

                {/* Define the PageNotFound route, which renders the PageNotFound component */}
                <Route path='/page-not-found' element={<PageNotFound />} />

                {/* Define a catch-all route, which redirects to the PageNotFound route for any unrecognized routes */}
                <Route path='*' element={<Navigate to='/page-not-found' />} />
            </Routes>
        </Router>
    );
};

export default NavigationRoutes;
