import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';

const PagesLanding = Loadable(lazy(() => import('pages')));

// ==============================|| MAIN ROUTES RENDER ||============================== //

const MainRoutes = () => (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<PagesLanding />} />
        </Route>
    </Routes>
);

export default MainRoutes;
