import { Box, Button, Container, Grid, Typography } from '@mui/material';
import iconPrice from 'assets/price/IconPrice.svg';
import { FormattedMessage } from 'react-intl';
const typographyStyle = {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: 'black',
    width: '100%',
    px: '10%',
    border: '0.2px solid #f1f1f1',
    borderRadius: '10px',
    padding: '16px',
    transition: 'background-color 0.3s ease, color 0.3s ease',

    fontSize: {
        xs: '16px',
        sm: '16px',
        lg: '18px'
    }
};
const typographyStyle2 = {
    padding: '16px',
    backgroundColor: '#00A64F',
    color: 'white',
    '& img': {
        filter: 'brightness(0) invert(1)'
    },
    '& *': {
        color: 'white'
    },
    fontSize: {
        xs: '16px',
        sm: '16px',
        lg: '18px'
    }
};

function Price() {
    const handleScrollToSection = (sectionId: string, key?: number) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const topOffset = section.offsetTop - 110;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
    };

    return (
        <>
            <section id="price" className="home__summary">
                <Container>
                    <Grid mt="80px" fontFamily="Montserrat">
                        <h1 style={{ textAlign: 'center', fontWeight: '600', fontSize: '32px', color: 'black' }}>
                            <FormattedMessage id="price_h1" />
                        </h1>
                        <br />
                        <Box
                            sx={{
                                overflowX: 'auto',
                                display: 'flex',
                                flexWrap: 'nowrap',
                                '&::-webkit-scrollbar': {
                                    height: '6px'
                                }
                            }}
                        >
                            <Grid
                                container
                                spacing={2}
                                sx={{
                                    flexWrap: 'nowrap',
                                    '& > .MuiGrid-item': {
                                        flexShrink: 0,
                                        width: { xs: '85%', sm: '45%', md: '25%' },
                                        maxWidth: { xs: '85%', sm: '45%', md: '25%' }
                                    }
                                }}
                            >
                                <Grid item xs={12} sm={12} md={3}>
                                    <Typography
                                        fontFamily="Montserrat"
                                        fontWeight="500"
                                        color="black"
                                        width="10%"
                                        px="10%"
                                        style={{ border: '0.2px solid #f1f1f1', borderRadius: '30px' }}
                                        sx={typographyStyle}
                                    >
                                        <Box display="flex" justifyContent="center" alignItems="center">
                                            <img
                                                src={iconPrice}
                                                alt="bg"
                                                width="80px"
                                                height="80px"
                                                style={{ marginRight: '8px', marginTop: '4px' }}
                                            />
                                        </Box>
                                        <br />
                                        <Box>
                                            <Typography
                                                fontWeight="600"
                                                fontSize="32px"
                                                textAlign="center"
                                                color="#00A64F"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="25" />
                                            </Typography>
                                            <Typography
                                                fontWeight="500"
                                                fontSize="18px"
                                                lineHeight="29.26px"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="c_starter" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="time" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="1m" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="time2" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="30d" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="sumScan" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="ulm" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="sumQR" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="500QR" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="buy" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="50d" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="storage" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="2gb" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="buy2" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="price_b1" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="max_user" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="10" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="sale" />
                                            </Typography>
                                            <Typography
                                                fontWeight="600"
                                                fontSize="16px"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                                height={'43px'}
                                            >
                                                <FormattedMessage id="bonus1" />
                                            </Typography>
                                            <br />
                                            <Box display="flex" justifyContent="center" mt={2}>
                                                <Button
                                                    onClick={() =>
                                                        window.open(
                                                            `${process.env.REACT_APP_PUBLIC_ROUTER}/register?package=package_id_4&trialMode=trialMode`,
                                                            '_blank'
                                                        )
                                                    }
                                                    sx={{
                                                        borderRadius: '10px',
                                                        height: '52px',
                                                        color: 'black',
                                                        padding: '5px 14px',
                                                        width: '100%',
                                                        marginLeft: '10px',
                                                        ':hover': { background: '#00A64F', color: 'white' },
                                                        fontFamily: 'Montserrat',
                                                        border: ' 1px solid #00A64F'
                                                    }}
                                                >
                                                    <Typography sx={{ fontSize: '16px', fontFamily: 'Montserrat' }}>
                                                        <FormattedMessage id="btnTry" />
                                                    </Typography>
                                                </Button>
                                            </Box>
                                            <Box display="flex" justifyContent="center" mt={2}>
                                                <Button
                                                    onClick={() => handleScrollToSection('contact')}
                                                    sx={{
                                                        borderRadius: '10px',
                                                        height: '52px',
                                                        color: 'white',
                                                        padding: '5px 14px',
                                                        width: '100%',
                                                        background: '#00A64F',
                                                        marginLeft: '10px',
                                                        ':hover': { background: '#00A64F', color: 'white' },
                                                        fontFamily: 'Montserrat'
                                                    }}
                                                >
                                                    <Typography sx={{ fontSize: '16px', fontFamily: 'Montserrat' }}>
                                                        <FormattedMessage id="btnBuy" />
                                                    </Typography>
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3}>
                                    <Typography
                                        fontFamily="Montserrat"
                                        fontWeight="500"
                                        color="black"
                                        width="100%"
                                        px="10%"
                                        style={{ border: '0.2px solid #f1f1f1', borderRadius: '30px' }}
                                        sx={typographyStyle}
                                    >
                                        <Box display="flex" justifyContent="center" alignItems="center">
                                            <img
                                                src={iconPrice}
                                                alt="bg"
                                                width="80px"
                                                height="80px"
                                                style={{ marginRight: '8px', marginTop: '4px' }}
                                            />
                                        </Box>
                                        <br />
                                        <Box>
                                            <Typography
                                                fontWeight="600"
                                                fontSize="32px"
                                                textAlign="center"
                                                color="#00A64F"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="300" />
                                            </Typography>
                                            <Typography
                                                fontWeight="500"
                                                fontSize="18px"
                                                lineHeight="29.26px"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="c_basic" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="time" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="1y" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="time2" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="90d" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="sumScan" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="ulm" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="sumQR" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="6000QR" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="buy" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="50d" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="storage" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="5gb" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="buy2" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="price_b1" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="max_user" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="100" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="sale" />
                                            </Typography>
                                            <Typography
                                                fontWeight="600"
                                                fontSize="16px"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                                height={'43px'}
                                            >
                                                <FormattedMessage id="bonus2" />
                                            </Typography>
                                            <br />
                                            <Box display="flex" justifyContent="center" mt={2}>
                                                <Button
                                                    onClick={() =>
                                                        window.open(
                                                            `${process.env.REACT_APP_PUBLIC_ROUTER}/register?package=package_id_1&trialMode=trialMode`,
                                                            '_blank'
                                                        )
                                                    }
                                                    sx={{
                                                        borderRadius: '10px',
                                                        height: '52px',
                                                        color: 'black',
                                                        padding: '5px 14px',
                                                        width: '100%',
                                                        marginLeft: '10px',
                                                        ':hover': { background: '#00A64F', color: 'white' },
                                                        fontFamily: 'Montserrat',
                                                        border: ' 1px solid #00A64F'
                                                    }}
                                                >
                                                    <Typography sx={{ fontSize: '16px', fontFamily: 'Montserrat' }}>
                                                        <FormattedMessage id="btnTry" />
                                                    </Typography>
                                                </Button>
                                            </Box>
                                            <Box display="flex" justifyContent="center" mt={2}>
                                                <Button
                                                    onClick={() => handleScrollToSection('contact')}
                                                    sx={{
                                                        borderRadius: '10px',
                                                        color: 'white',
                                                        height: '52px',

                                                        fontSize: '16px',
                                                        padding: '5px 14px',
                                                        width: '100%',
                                                        background: '#00A64F',
                                                        marginLeft: '10px',
                                                        ':hover': { background: '#00A64F', color: 'white' },
                                                        fontFamily: 'Montserrat'
                                                    }}
                                                >
                                                    <Typography sx={{ fontSize: '16px', fontFamily: 'Montserrat' }}>
                                                        <FormattedMessage id="btnBuy" />
                                                    </Typography>
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3}>
                                    <Typography
                                        fontFamily="Montserrat"
                                        fontWeight="500"
                                        color="black"
                                        width="100%"
                                        px="10%"
                                        style={{ border: '0.2px solid #f1f1f1', borderRadius: '30px ' }}
                                        sx={typographyStyle2}
                                    >
                                        <Box display="flex" justifyContent="center" alignItems="center">
                                            <img
                                                src={iconPrice}
                                                alt="bg"
                                                width="80px"
                                                height="80px"
                                                style={{ marginRight: '8px', marginTop: '4px' }}
                                            />
                                        </Box>
                                        <br />
                                        <Box>
                                            <Typography
                                                fontWeight="600"
                                                fontSize="32px"
                                                textAlign="center"
                                                color="#00A64F"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="900" />
                                            </Typography>
                                            <Typography
                                                fontWeight="500"
                                                fontSize="18px"
                                                lineHeight="29.26px"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="c_advanced" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="time" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="1y" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="time2" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="90d" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="sumScan" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="ulm" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="sumQR" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="20000QR" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="buy" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="50d" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="storage" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="20gb" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="buy2" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="price_b1" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="max_user" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="500" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="sale" />
                                            </Typography>
                                            <Typography
                                                fontWeight="600"
                                                fontSize="16px"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                                height={'43px'}
                                            >
                                                <FormattedMessage id="bonus3" />
                                            </Typography>
                                            <br />
                                            <Box display="flex" justifyContent="center" mt={2}>
                                                <Button
                                                    onClick={() =>
                                                        window.open(
                                                            `${process.env.REACT_APP_PUBLIC_ROUTER}/register?package=package_id_2&trialMode=trialMode`,
                                                            '_blank'
                                                        )
                                                    }
                                                    sx={{
                                                        borderRadius: '10px',
                                                        fontSize: '16px',
                                                        color: 'white',
                                                        padding: '5px 14px',
                                                        height: '52px',

                                                        width: '100%',
                                                        background: '#00A64F',
                                                        marginLeft: '10px',
                                                        ':hover': { background: '#00A64F', color: 'white' },
                                                        border: ' 1px solid white',
                                                        fontFamily: 'Montserrat'
                                                    }}
                                                >
                                                    <Typography sx={{ fontSize: '16px', fontFamily: 'Montserrat' }}>
                                                        <FormattedMessage id="btnTry" />
                                                    </Typography>
                                                </Button>
                                            </Box>
                                            <Box display="flex" justifyContent="center" mt={2}>
                                                <Button
                                                    onClick={() => handleScrollToSection('contact')}
                                                    sx={{
                                                        borderRadius: '10px',
                                                        fontSize: '16px',
                                                        color: 'white',
                                                        padding: '5px 14px',
                                                        height: '52px',

                                                        width: '100%',
                                                        background: '#00A64F',
                                                        marginLeft: '10px',
                                                        ':hover': { background: '#00A64F', color: 'white' },
                                                        border: ' 1px solid white',
                                                        fontFamily: 'Montserrat'
                                                    }}
                                                >
                                                    <Typography sx={{ fontSize: '16px', fontFamily: 'Montserrat' }}>
                                                        <FormattedMessage id="btnBuy" />
                                                    </Typography>
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={3}>
                                    <Typography
                                        fontFamily="Montserrat"
                                        fontWeight="500"
                                        color="black"
                                        width="100%"
                                        px="10%"
                                        style={{ border: '0.2px solid #f1f1f1', borderRadius: '30px' }}
                                        sx={typographyStyle}
                                    >
                                        <Box display="flex" justifyContent="center" alignItems="center">
                                            <img
                                                src={iconPrice}
                                                alt="bg"
                                                width="80px"
                                                height="80px"
                                                style={{ marginRight: '8px', marginTop: '4px' }}
                                            />
                                        </Box>
                                        <br />
                                        <Box>
                                            <Typography
                                                fontWeight="600"
                                                fontSize="32px"
                                                textAlign="center"
                                                color="#00A64F"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="hd_contact" />
                                            </Typography>
                                            <Typography
                                                fontWeight="500"
                                                fontSize="18px"
                                                lineHeight="29.26px"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="c_pro" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="time" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="ulm" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="time2" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="90d" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="sumScan" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="ulm" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="sumQR" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="ulm" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="buy" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="hd_contact" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="storage" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="ulm" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="buy2" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="hd_contact" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="max_user" />
                                            </Typography>
                                            <Typography fontWeight="600" fontSize="16px" textAlign="center" fontFamily="Montserrat">
                                                <FormattedMessage id="ulm" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontWeight="500"
                                                fontSize="12px"
                                                color="#8F8F8F"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                            >
                                                <FormattedMessage id="sale" />
                                            </Typography>
                                            <Typography
                                                fontWeight="600"
                                                fontSize="16px"
                                                textAlign="center"
                                                fontFamily="Montserrat"
                                                height={'43px'}
                                            >
                                                <FormattedMessage id="bonus3" />
                                            </Typography>
                                            <br />
                                            <Box display="flex" justifyContent="center" mt={2}>
                                                <Button
                                                    onClick={() =>
                                                        window.open(
                                                            `${process.env.REACT_APP_PUBLIC_ROUTER}/register?package=package_id_3&trialMode=trialMode`,
                                                            '_blank'
                                                        )
                                                    }
                                                    sx={{
                                                        borderRadius: '10px',
                                                        height: '52px',
                                                        color: 'black',
                                                        padding: '5px 14px',
                                                        width: '100%',
                                                        marginLeft: '10px',
                                                        ':hover': { background: '#00A64F', color: 'white' },
                                                        fontFamily: 'Montserrat',
                                                        border: ' 1px solid #00A64F'
                                                    }}
                                                >
                                                    <Typography sx={{ fontSize: '16px', fontFamily: 'Montserrat' }}>
                                                        <FormattedMessage id="btnTry" />
                                                    </Typography>
                                                </Button>
                                            </Box>
                                            <Box display="flex" justifyContent="center" mt={2}>
                                                <Button
                                                    onClick={() => handleScrollToSection('contact')}
                                                    sx={{
                                                        borderRadius: '10px',
                                                        height: '52px',

                                                        color: 'white',
                                                        padding: '5px 14px',
                                                        fontSize: '16px',
                                                        width: '100%',
                                                        background: '#00A64F',
                                                        marginLeft: '10px',
                                                        ':hover': { background: '#00A64F', color: 'white' },
                                                        fontFamily: 'Montserrat'
                                                    }}
                                                >
                                                    <Typography sx={{ fontSize: '16px', fontFamily: 'Montserrat' }}>
                                                        <FormattedMessage id="btnBuy" />
                                                    </Typography>
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Container>
            </section>
        </>
    );
}

export default Price;
