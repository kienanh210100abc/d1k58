import { Box, Container, Grid, Stack } from '@mui/material';
import imgEco1 from 'assets/ecosystem/ImgEco1.svg';
import imgEco2 from 'assets/ecosystem/ImgEco2.svg';
import traXemAgri from 'assets/ecosystem/TraXemAgri.svg';
import traXemEmarket from 'assets/ecosystem/TraXemMarket.svg';
import traXemSCM from 'assets/ecosystem/TraXemSCM.svg';
import { FormattedMessage } from 'react-intl';

const Ecosystem = () => {
    return (
        <>
            <section id="summaryIntro" className="home__summary">
                <Stack style={{ padding: '20px' }}>
                    <Container>
                        <Grid mt="80px" fontFamily="Montserrat">
                            <h1
                                style={{ textAlign: 'center', fontWeight: '600', fontSize: '32px', color: '#414042', lineHeight: 'normal' }}
                            >
                                <FormattedMessage id="eco_h1" />
                            </h1>
                            <h2 style={{ textAlign: 'center', fontWeight: '600', fontSize: '18px', color: '#414042' }}>
                                <FormattedMessage id="eco_h2" />
                            </h2>

                            <br />

                            <Box display="flex" flexWrap="wrap" gap="50px">
                                <Grid spacing={5} container item xs={12} sm={12} md={12}>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Box flex="1" minWidth="300px" bgcolor="transparent">
                                            <img
                                                src={imgEco1}
                                                alt="bg"
                                                style={{ width: '100%', height: 'auto', marginBottom: '10px', borderRadius: '20px' }}
                                            />
                                            <Box display="flex" gap="10px">
                                                <img src={traXemAgri} alt="bg" style={{ width: '20%', height: 'auto' }} />
                                                <img src={traXemEmarket} alt="bg" style={{ width: '48%', height: 'auto' }} />
                                            </Box>
                                            <Box
                                                mt={2}
                                                sx={{
                                                    fontSize: {
                                                        xs: '16px',
                                                        lg: '18px'
                                                    }
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        fontWeight: '500',

                                                        fontFamily: 'Montserrat',
                                                        lineHeight: '22px',
                                                        textAlign: 'justify',
                                                        color: '#333333'
                                                    }}
                                                >
                                                    <FormattedMessage id="eco_ct1" />
                                                </p>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Box flex="1" minWidth="300px" bgcolor="transparent">
                                            <img
                                                src={imgEco2}
                                                alt="bg"
                                                style={{ width: '100%', height: 'auto', marginBottom: '10px', borderRadius: '20px' }}
                                            />
                                            <Box display="flex" justifyContent="space-between" gap="10px">
                                                <img src={traXemSCM} alt="bg" style={{ width: '33%', height: 'auto' }} />
                                            </Box>
                                            <Box
                                                mt={2}
                                                sx={{
                                                    fontSize: {
                                                        xs: '16px',
                                                        lg: '18px'
                                                    }
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        fontWeight: '500',
                                                        fontFamily: 'Montserrat',
                                                        lineHeight: '22px',
                                                        textAlign: 'justify',
                                                        color: '#333333'
                                                    }}
                                                >
                                                    <FormattedMessage id="eco_ct2" />
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

export default Ecosystem;
