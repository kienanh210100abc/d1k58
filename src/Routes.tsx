import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loadable from 'ui-component/Loadable';
import MainLayout from 'layout/MainLayout';

const PagesLanding = Loadable(lazy(() => import('pages')));

// ==============================|| MAIN ROUTES RENDER ||============================== //

const MainRoutes = () => (
    // <Routes>
    //     <Route path="/" element={<MainLayout />}>
    //         {/* ================== Landing ================== */}
    //         <Route path="/" element={<PagesLanding />} />
    //     </Route>
    // </Routes>
    <Routes>
        {/* Route cho tiếng Việt */}
        <Route path="/" element={<MainLayout />}>
            <Route index element={<PagesLanding />} />
        </Route>

        {/* Route cho tiếng Anh */}
        <Route path="/en" element={<MainLayout />}>
            <Route index element={<PagesLanding />} />
        </Route>
    </Routes>
);

export default MainRoutes;
