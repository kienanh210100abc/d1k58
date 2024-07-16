// project imports
import { Box } from '@mui/material';
import SumIntro from './SumIntro';
import Benefit from './Benefit';
import Feature from './Feature';
import Procedure from './Procedure';
import Price from './Price';
import Ecosystem from './Ecosystem';
import ContactUs from './ContactUs';
import Application from './Application';
// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
    <>
        <SumIntro />
        <Box>
            <Benefit />
            <Feature />
            <Procedure />
            <Application />
            <Price />
            <Ecosystem />
            <ContactUs />
        </Box>
    </>
);

export default Landing;
