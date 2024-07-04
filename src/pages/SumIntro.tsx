import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import introIMG from 'assets/images/landing/Home/IntroIMG.svg';
import { FormattedMessage } from 'react-intl';

const SumIntro = () => {
    return (
        <>
            <section id="summaryIntro" className="home__summary">
                <Container>
                    <Grid
                        mt="80px"
                        container
                        sx={{
                            flexDirection: {
                                xs: 'column-reverse',
                                md: 'row'
                            }
                        }}
                    >
                        <Grid item xs={12} sm={12} md={6}>
                            <Stack alignItems="start" height="100%" width="100%" justifyContent="center" pt="10%">
                                <Typography
                                    fontWeight="600"
                                    fontFamily="Montserrat"
                                    color="#00A64F"
                                    width="100%"
                                    px="10%"
                                    sx={{
                                        fontSize: {
                                            xs: '32px',
                                            sm: '35px',
                                            lg: '44px'
                                        }
                                    }}
                                >
                                    <FormattedMessage id="intro_header" />
                                </Typography>
                                <br />
                                <Typography
                                    fontFamily="Montserrat"
                                    fontWeight="500"
                                    color="#393939"
                                    width="100%"
                                    px="10%"
                                    align="justify"
                                    sx={{
                                        fontSize: {
                                            xs: '16px',
                                            sm: '18px',
                                            lg: '18px'
                                        },
                                        alignItems: 'Justified'
                                    }}
                                >
                                    <FormattedMessage id="intro_ct1" />
                                    <span style={{ color: '#00A64F' }}>
                                        {' '}
                                        <FormattedMessage id="intro_ct2" />
                                    </span>
                                    .
                                    <FormattedMessage id="intro_ct3" />
                                </Typography>
                                <br />
                                <Typography
                                    fontFamily="Montserrat"
                                    fontWeight="500"
                                    color="#393939"
                                    width="100%"
                                    px="10%"
                                    align="justify"
                                    sx={{
                                        fontSize: {
                                            xs: '16px',
                                            sm: '18px',
                                            lg: '18px'
                                        }
                                    }}
                                >
                                    <FormattedMessage id="intro_ct4" />
                                    <span style={{ color: '#00A64F' }}>
                                        <FormattedMessage id="intro_ct5" />
                                    </span>
                                    <FormattedMessage id="intro_ct6" />
                                </Typography>{' '}
                                <br />
                                <Typography fontFamily="Montserrat" fontWeight="500" color="#393939" width="100%" px="10%" align="justify">
                                    <Button
                                        sx={{
                                            borderRadius: '41px',
                                            fontSize: {
                                                sx: '16px',
                                                sm: '16px',
                                                lg: '18px'
                                            },
                                            color: 'white',
                                            padding: '10px 15px',
                                            background: '#00A64F',
                                            fontWeight: '700',
                                            ':hover': { background: '#00A64F', color: 'white' },
                                            textTransform: 'none',
                                            fontFamily: 'Montserrat'
                                        }}
                                    >
                                        <FormattedMessage id="btn_try" />
                                    </Button>
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <img src={introIMG} alt="bg" width="100%" />
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default SumIntro;
