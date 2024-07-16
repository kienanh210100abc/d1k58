import { Outlet } from 'react-router-dom';

// material-ui
import { styled } from '@mui/material/styles';

// project imports
import Footer from 'pages/Footer';
import AppBar from 'ui-component/extended/AppBar';
import { Toaster } from 'react-hot-toast';

// ==============================|| MAIN LAYOUT ||============================== //

const HeaderWrapper = styled('div')(({ theme }) => ({
    // paddingBottom: 30,
    overflowX: 'hidden',
    overflowY: 'clip',
    [theme.breakpoints.down('md')]: {
        // paddingBottom: 42
    }
}));

const SecondWrapper = styled('div')(({ theme }) => ({
    // paddingTop: 160,
    [theme.breakpoints.down('md')]: {
        // paddingTop: 60
    }
}));

const MainLayout = () => {
    return (
        <>
            <HeaderWrapper id="home">
                <AppBar />
                <Toaster
                    toastOptions={{
                        style: {
                            wordBreak: 'break-all'
                        }
                    }}
                />
            </HeaderWrapper>
            <SecondWrapper>
                <Outlet />
            </SecondWrapper>
            <Footer />
        </>
    );
};

export default MainLayout;
