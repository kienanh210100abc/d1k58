import { Grid } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import { FormattedMessage } from 'react-intl';
import organic from 'assets/application/organic.svg';
import history from 'assets/application/history.svg';
import infor from 'assets/application/infor.svg';
import product from 'assets/application/product.svg';
import tourist from 'assets/application/tourist.svg';
import environment from 'assets/application/environment.svg';

const Application = () => {
    return (
        <>
            <section
                style={{
                    background: 'linear-gradient(180deg, #E6F7EE 90%, #E6F7EE 100%)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    padding: '50px, 60px, 50px, 60px',
                    gap: '60px',
                    marginTop: '80px'
                }}
            >
                <Stack>
                    <Container>
                        <Grid fontFamily="Montserrat">
                            <h1
                                style={{ textAlign: 'center', fontWeight: '600', fontSize: '32px', color: '#414042', lineHeight: 'normal' }}
                            >
                                <FormattedMessage id="application" />
                            </h1>

                            <br />

                            <Box display="flex" flexWrap="wrap" gap="50px">
                                <Grid spacing={5} container item xs={12} sm={12} md={12}>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Box flex="1" minWidth="300px" bgcolor="transparent">
                                            <img
                                                src={organic}
                                                alt="bg"
                                                style={{ width: '100%', height: 'auto', marginBottom: '10px', borderRadius: '20px' }}
                                            />
                                            <Box
                                                mt={2}
                                                sx={{
                                                    fontSize: {
                                                        lg: '24px'
                                                    }
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        fontWeight: '600',
                                                        fontFamily: 'Montserrat',
                                                        lineHeight: '24px',
                                                        textAlign: 'justify',
                                                        color: '#414142'
                                                    }}
                                                >
                                                    <FormattedMessage id="organic" />
                                                </p>
                                            </Box>
                                            <Box
                                                mt={2}
                                                sx={{
                                                    fontSize: {
                                                        lg: '16px'
                                                    }
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        fontWeight: '500',
                                                        fontFamily: 'Montserrat',
                                                        lineHeight: '19.5px',
                                                        textAlign: 'justify',
                                                        color: '#414042'
                                                    }}
                                                >
                                                    <FormattedMessage id="organic-ct" />
                                                </p>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Box flex="1" minWidth="300px" bgcolor="transparent">
                                            <img
                                                src={product}
                                                alt="bg"
                                                style={{ width: '100%', height: 'auto', marginBottom: '10px', borderRadius: '20px' }}
                                            />
                                            <Box
                                                mt={2}
                                                sx={{
                                                    fontSize: {
                                                        lg: '24px'
                                                    }
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        fontWeight: '600',
                                                        fontFamily: 'Montserrat',
                                                        lineHeight: '24px',
                                                        textAlign: 'justify',
                                                        color: '#414142'
                                                    }}
                                                >
                                                    <FormattedMessage id="consumer-product" />
                                                </p>
                                            </Box>
                                            <Box
                                                mt={2}
                                                sx={{
                                                    fontSize: {
                                                        lg: '16px'
                                                    }
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        fontWeight: '500',
                                                        fontFamily: 'Montserrat',
                                                        lineHeight: '19.5px',
                                                        textAlign: 'justify',
                                                        color: '#414042'
                                                    }}
                                                >
                                                    <FormattedMessage id="consumer-product-ct" />
                                                </p>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Box flex="1" minWidth="300px" bgcolor="transparent">
                                            <img
                                                src={history}
                                                alt="bg"
                                                style={{ width: '100%', height: 'auto', marginBottom: '10px', borderRadius: '20px' }}
                                            />
                                            <Box
                                                mt={2}
                                                sx={{
                                                    fontSize: {
                                                        lg: '24px'
                                                    }
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        fontWeight: '600',
                                                        fontFamily: 'Montserrat',
                                                        lineHeight: '24px',
                                                        textAlign: 'justify',
                                                        color: '#414142'
                                                    }}
                                                >
                                                    <FormattedMessage id="history" />
                                                </p>
                                            </Box>
                                            <Box
                                                mt={2}
                                                sx={{
                                                    fontSize: {
                                                        lg: '16px'
                                                    }
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        fontWeight: '500',
                                                        fontFamily: 'Montserrat',
                                                        lineHeight: '19.5px',
                                                        textAlign: 'justify',
                                                        color: '#414042'
                                                    }}
                                                >
                                                    <FormattedMessage id="history-ct" />
                                                </p>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Box flex="1" minWidth="300px" bgcolor="transparent">
                                            <img
                                                src={tourist}
                                                alt="bg"
                                                style={{ width: '100%', height: 'auto', marginBottom: '10px', borderRadius: '20px' }}
                                            />
                                            <Box
                                                mt={2}
                                                sx={{
                                                    fontSize: {
                                                        lg: '24px'
                                                    }
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        fontWeight: '600',
                                                        fontFamily: 'Montserrat',
                                                        lineHeight: '29.26px',
                                                        textAlign: 'justify',
                                                        color: '#414142',
                                                        height: '58px'
                                                    }}
                                                >
                                                    <FormattedMessage id="tourist" />
                                                </p>
                                            </Box>
                                            <Box
                                                mt={2}
                                                sx={{
                                                    fontSize: {
                                                        lg: '16px'
                                                    }
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        fontWeight: '500',
                                                        fontFamily: 'Montserrat',
                                                        lineHeight: '19.5px',
                                                        textAlign: 'justify',
                                                        color: '#414042'
                                                    }}
                                                >
                                                    <FormattedMessage id="tourist-ct" />
                                                </p>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Box flex="1" minWidth="300px" bgcolor="transparent">
                                            <img
                                                src={environment}
                                                alt="bg"
                                                style={{ width: '100%', height: 'auto', marginBottom: '10px', borderRadius: '20px' }}
                                            />
                                            <Box
                                                mt={2}
                                                sx={{
                                                    fontSize: {
                                                        lg: '24px'
                                                    }
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        fontWeight: '600',
                                                        fontFamily: 'Montserrat',
                                                        lineHeight: '29.26px',
                                                        color: '#414142',
                                                        height: '58px'
                                                    }}
                                                >
                                                    <FormattedMessage id="environment" />
                                                </p>
                                            </Box>
                                            <Box
                                                mt={2}
                                                sx={{
                                                    fontSize: {
                                                        lg: '16px'
                                                    }
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        fontWeight: '500',
                                                        fontFamily: 'Montserrat',
                                                        lineHeight: '19.5px',
                                                        textAlign: 'justify',
                                                        color: '#414042'
                                                    }}
                                                >
                                                    <FormattedMessage id="environment-ct" />
                                                </p>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Box flex="1" minWidth="300px" bgcolor="transparent">
                                            <img
                                                src={infor}
                                                alt="bg"
                                                style={{ width: '100%', height: 'auto', marginBottom: '10px', borderRadius: '20px' }}
                                            />
                                            <Box
                                                mt={2}
                                                sx={{
                                                    fontSize: {
                                                        lg: '24px'
                                                    }
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        fontWeight: '600',
                                                        fontFamily: 'Montserrat',
                                                        lineHeight: '24px',
                                                        textAlign: 'justify',
                                                        color: '#414142',
                                                        height: '58px'
                                                    }}
                                                >
                                                    <FormattedMessage id="infor-safe" />
                                                </p>
                                            </Box>
                                            <Box
                                                mt={2}
                                                sx={{
                                                    fontSize: {
                                                        lg: '16px'
                                                    }
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        fontWeight: '500',
                                                        fontFamily: 'Montserrat',
                                                        lineHeight: '19.5px',
                                                        textAlign: 'justify',
                                                        color: '#414042'
                                                    }}
                                                >
                                                    <FormattedMessage id="infor-safe-ct" />
                                                </p>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Container>
                </Stack>
            </section>
        </>
    );
};

export default Application;
