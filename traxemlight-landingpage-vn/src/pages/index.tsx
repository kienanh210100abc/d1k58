// project imports
import { Box } from '@mui/material';
import SumIntro from './SumIntro';
import Benefit from './Benefit';
import Feature from './Feature';
import Procedure from './Procedure';
import Price from './Price';
import Ecosystem from './Ecosystem';
import ContactUs from './ContactUs';
// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
    <>
        <SumIntro />
        <Box>
            <Benefit />
            <Feature />
            <Procedure />
            <Price />
            <Ecosystem />
            <ContactUs />
        </Box>
    </>
);

export default Landing;
