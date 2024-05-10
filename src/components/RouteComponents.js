

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectPage from '../pages/ProjectPage.js';
import HomePage from '../pages/HomePage.js'
import NotFoundPage from '../pages/NotFoundPage.js';

const RouteComponents = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />

                    <Route path="/project/:id" element={<ProjectPage />} />

                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </>
    );
};

export default RouteComponents;
