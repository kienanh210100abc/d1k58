import { toast } from 'react-hot-toast';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Captcha from 'ui-component/Capcha';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactApi } from 'utils/contact';
import traXemAgri from 'assets/contact/TraXemAgri.svg';
import aceCRM from 'assets/contact/AceCRM.svg';
import eMedia from 'assets/contact/EMedia.svg';
import emPL from 'assets/contact/EmPL.svg';
import emTeller from 'assets/contact/EmTeller.svg';
import instanceView from 'assets/contact/InstanceView.svg';
import smeAccel from 'assets/contact/SmeAccel.svg';
import traXemMarket from 'assets/contact/TraXemMarket.svg';
import traXemSCM from 'assets/contact/TraXemSCM.svg';
import { FormattedMessage } from 'react-intl';
import { Container } from '@mui/system';
const defaultValues = {
    name: '',
    phoneNum: '',
    email: '',
    message: '',
    captvalue: ''
};
const schema = z.object({
    name: z.string().min(4, 'min_length').max(100, 'max_length'),
    phoneNum: z.string().regex(/(84|0)(3|5|7|8|9)+([0-9]{8})\b/, 'phone'),
    email: z.string().email(),
    message: z.string().min(5, 'min_length').max(500, 'max_length'),
    captvalue: z.string().min(1, 'min_length')
});
const ContactUs = () => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues,
        mode: 'all',
        resolver: zodResolver(schema)
    });
    const captchaRef = useRef({ refresh: () => {} });
    const onSubmit = async (values: z.infer<typeof schema>) => {
        try {
            await contactApi.sendContact(values);
            reset();
            captchaRef.current.refresh?.();
            toast.success(<FormattedMessage id="contact_success" />);
        } catch (error) {
            toast.error(<FormattedMessage id="contact_failed" />);
        }
    };
    return (
        <>
            <section id="contact" style={{ padding: '0', margin: '0' }}>
                <Stack
                    sx={{
                        background: 'linear-gradient(180deg, #E6F7EE 90%, #E6F7EE 100%)',
                        flexDirection: {
                            sm: 'row'
                        }
                    }}
                    borderRadius={5}
                    pb="30px"
                    alignItems="left"
                >
                    <Container>
                        <Grid mt="80px">
                            <Box display="flex" flexWrap="wrap" gap="50px">
                                <Grid spacing={5} container item xs={12} sm={12} md={12}>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Box flex="1" minWidth="300px" bgcolor="transparent" gap={'40px'}>
                                            <Typography
                                                fontWeight="600"
                                                fontFamily="Montserrat"
                                                color="#414042"
                                                sx={{
                                                    fontSize: {
                                                        xs: '32px',
                                                        sm: '32px',
                                                        lg: '32px'
                                                    },
                                                    width: {
                                                        xs: '100%',
                                                        sm: '100%',
                                                        lg: '100%'
                                                    },
                                                    lineHeight: '39.01px',
                                                    marginBottom: '10px'
                                                }}
                                            >
                                                <FormattedMessage id="contact_h1" />
                                            </Typography>
                                            <Typography
                                                fontFamily="Inter"
                                                fontWeight="400"
                                                color="#414042"
                                                width="100%"
                                                align="justify"
                                                sx={{
                                                    fontSize: {
                                                        xs: '18px',
                                                        sm: '18px',
                                                        lg: '18px'
                                                    }
                                                }}
                                            >
                                                <FormattedMessage id="contact_ct1" />
                                            </Typography>
                                            <Typography
                                                fontFamily="Inter"
                                                fontWeight="400"
                                                color="#414042"
                                                width="100%"
                                                align="justify"
                                                sx={{
                                                    fontSize: {
                                                        xs: '18px',
                                                        sm: '18px',
                                                        lg: '18px'
                                                    }
                                                }}
                                            >
                                                <FormattedMessage id="contact_ct2" />
                                            </Typography>
                                            <br />
                                            <Typography
                                                fontFamily="Montserrat"
                                                fontWeight="600"
                                                color="#414042"
                                                width="100%"
                                                align="justify"
                                                sx={{
                                                    fontSize: {
                                                        xs: '18px',
                                                        sm: '18px',
                                                        lg: '18px'
                                                    }
                                                }}
                                            >
                                                <FormattedMessage id="contact_h2" />
                                            </Typography>
                                            <br />
                                            <Box
                                                width="100%"
                                                sx={{
                                                    fontSize: {
                                                        xs: '16px',
                                                        sm: '16px',
                                                        lg: '18px'
                                                    },
                                                    width: {
                                                        lg: '100%',
                                                        sm: '100%'
                                                    },

                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: { xs: 3, sm: 4, md: 5 },
                                                    marginBottom: {
                                                        lg: '15px',
                                                        xs: '15px'
                                                    }
                                                }}
                                            >
                                                <img src={traXemAgri} alt="bg" width="53px" height="32px" style={{ marginTop: '5px' }} />
                                                <img src={traXemMarket} alt="bg" width="143px" height="32px" style={{ marginTop: '5px' }} />
                                                <img src={traXemSCM} alt="bg" width="92px" height="32px" style={{ marginTop: '5px' }} />
                                                <img src={smeAccel} alt="bg" width="97px" height="32px" style={{ marginTop: '5px' }} />
                                                <img src={emPL} alt="bg" width="84px" height="32px" style={{ marginTop: '5px' }} />
                                                <img src={emTeller} alt="bg" width="143px" height="32px" style={{ marginTop: '5px' }} />
                                                <img src={aceCRM} alt="bg" width="102px" height="32px" style={{ marginTop: '5px' }} />
                                                <img src={instanceView} alt="bg" width="96px" height="32px" style={{ marginTop: '5px' }} />
                                                <img src={eMedia} alt="bg" width="116px" height="32px" style={{ marginTop: '5px' }} />
                                            </Box>
                                            <br />

                                            <Typography
                                                fontFamily="Montserrat"
                                                fontWeight="500"
                                                color="#414042"
                                                width="100%"
                                                align="justify"
                                                sx={{
                                                    fontSize: {
                                                        xs: '16px',
                                                        sm: '16px',
                                                        lg: '18px'
                                                    }
                                                }}
                                            >
                                                <Typography
                                                    fontFamily="Inter"
                                                    fontWeight="700"
                                                    color="#414042"
                                                    width="100%"
                                                    textAlign="left"
                                                    sx={{
                                                        fontSize: {
                                                            xs: '20px',
                                                            sm: '20px',
                                                            lg: '20px'
                                                        },
                                                        marginBottom: '10px'
                                                    }}
                                                >
                                                    <FormattedMessage id="contact_company" />
                                                </Typography>

                                                <Box sx={{ display: 'flex', marginBottom: '5px' }}>
                                                    <Typography
                                                        fontWeight="500"
                                                        fontSize="14px"
                                                        lineHeight="24px"
                                                        fontFamily="inter"
                                                        sx={{
                                                            textAlign: 'left',
                                                            width: {
                                                                xs: '30%',
                                                                lg: '25%'
                                                            }
                                                        }}
                                                    >
                                                        <FormattedMessage id="contact_mst" />
                                                    </Typography>
                                                    <Typography fontWeight="400" fontSize="14px" lineHeight="24px" fontFamily="inter">
                                                        <FormattedMessage id="contact_mst2" />
                                                    </Typography>
                                                </Box>

                                                <Box sx={{ display: 'flex', marginBottom: '5px' }}>
                                                    <Typography
                                                        fontWeight="500"
                                                        fontSize="14px"
                                                        lineHeight="24px"
                                                        fontFamily="inter"
                                                        sx={{
                                                            textAlign: 'left',
                                                            width: {
                                                                xs: '30%',
                                                                lg: '25%'
                                                            }
                                                        }}
                                                    >
                                                        <FormattedMessage id="contact_address" />
                                                    </Typography>
                                                    <Typography
                                                        fontWeight="400"
                                                        fontSize="14px"
                                                        lineHeight="24px"
                                                        flex="1"
                                                        fontFamily="inter"
                                                    >
                                                        <FormattedMessage id="contact_address2" />
                                                    </Typography>
                                                </Box>

                                                <Box sx={{ display: 'flex', marginBottom: '5px' }}>
                                                    <Typography
                                                        fontWeight="500"
                                                        fontSize="14px"
                                                        lineHeight="24px"
                                                        fontFamily="inter"
                                                        sx={{
                                                            textAlign: 'left',
                                                            width: {
                                                                xs: '30%',
                                                                lg: '25%'
                                                            }
                                                        }}
                                                    >
                                                        <FormattedMessage id="contact_phone" />
                                                    </Typography>
                                                    <Typography
                                                        fontWeight="400"
                                                        fontSize="14px"
                                                        lineHeight="24px"
                                                        flex="1"
                                                        fontFamily="inter"
                                                    >
                                                        <FormattedMessage id="contact_phone2" />
                                                    </Typography>
                                                </Box>

                                                <Box sx={{ display: 'flex', marginBottom: '5px' }}>
                                                    <Typography
                                                        fontWeight="500"
                                                        fontSize="14px"
                                                        lineHeight="24px"
                                                        fontFamily="inter"
                                                        sx={{
                                                            textAlign: 'left',
                                                            width: {
                                                                xs: '30%',
                                                                lg: '25%'
                                                            }
                                                        }}
                                                    >
                                                        <FormattedMessage id="contact_email" />
                                                    </Typography>
                                                    <Typography
                                                        fontWeight="400"
                                                        fontSize="14px"
                                                        lineHeight="24px"
                                                        flex="1"
                                                        fontFamily="inter"
                                                    >
                                                        <FormattedMessage id="contact_email2" />
                                                    </Typography>
                                                </Box>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Grid
                                            style={{
                                                backgroundColor: 'white',
                                                paddingLeft: '40px',
                                                paddingRight: '40px',
                                                paddingTop: '10px',
                                                paddingBottom: '40px',
                                                borderRadius: '20px',
                                                boxShadow: '2px 2px 2px 2px #AAA'
                                            }}
                                        >
                                            <form style={{ width: '100%', marginTop: '30px' }} onSubmit={handleSubmit(onSubmit)}>
                                                <span style={{ fontFamily: 'inter', fontWeight: '600', fontSize: '16px', color: 'black' }}>
                                                    <FormattedMessage id="lb_fullname" />
                                                </span>
                                                <Controller
                                                    name="name"
                                                    control={control}
                                                    render={({ field: { onChange, value } }) => (
                                                        <TextField
                                                            variant="outlined"
                                                            sx={{ 'form .MuiInputBase-input': { background: '#fffff !important' } }}
                                                            label={<FormattedMessage id="lb_fullname" />}
                                                            value={value}
                                                            onChange={onChange}
                                                            fullWidth
                                                            margin="normal"
                                                            error={!!errors.name?.message}
                                                        />
                                                    )}
                                                />
                                                <Grid
                                                    container
                                                    direction="row"
                                                    spacing={2}
                                                    sx={{
                                                        marginTop: {
                                                            xs: '5px',
                                                            sm: '5px',
                                                            lm: '10px'
                                                        }
                                                    }}
                                                >
                                                    <Grid item xs={12} sm={6}>
                                                        <span
                                                            style={{
                                                                fontFamily: 'inter',
                                                                fontWeight: '600',
                                                                fontSize: '16px',
                                                                color: 'black'
                                                            }}
                                                        >
                                                            <FormattedMessage id="lb_phone" />
                                                        </span>
                                                        <Controller
                                                            name="phoneNum"
                                                            control={control}
                                                            render={({ field: { onChange, value } }) => (
                                                                <TextField
                                                                    variant="outlined"
                                                                    sx={{ 'form .MuiInputBase-input': { background: '#fffff' } }}
                                                                    label={<FormattedMessage id="lb_phone" />}
                                                                    value={value}
                                                                    onChange={onChange}
                                                                    fullWidth
                                                                    margin="normal"
                                                                    error={!!errors.phoneNum?.message}
                                                                />
                                                            )}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <span
                                                            style={{
                                                                fontFamily: 'inter',
                                                                fontWeight: '600',
                                                                fontSize: '16px',
                                                                color: 'black'
                                                            }}
                                                        >
                                                            <FormattedMessage id="lb_email" />
                                                        </span>
                                                        <Controller
                                                            name="email"
                                                            control={control}
                                                            render={({ field: { onChange, value } }) => (
                                                                <TextField
                                                                    variant="outlined"
                                                                    sx={{ 'form .MuiInputBase-input': { background: '#fffff' } }}
                                                                    label={<FormattedMessage id="lb_email" />}
                                                                    value={value}
                                                                    onChange={onChange}
                                                                    fullWidth
                                                                    margin="normal"
                                                                    error={!!errors.email?.message}
                                                                />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12} sm={12} style={{ marginTop: '20px' }}>
                                                    <span
                                                        style={{ fontFamily: 'inter', fontWeight: '600', fontSize: '16px', color: 'black' }}
                                                    >
                                                        <FormattedMessage id="messenger" />
                                                    </span>
                                                    <Controller
                                                        name="message"
                                                        control={control}
                                                        render={({ field: { onChange, value } }) => (
                                                            <TextField
                                                                type="textarea"
                                                                multiline
                                                                rows={4}
                                                                label={<FormattedMessage id="lb_messenger" />}
                                                                value={value}
                                                                onChange={onChange}
                                                                fullWidth
                                                                margin="normal"
                                                                error={!!errors.message?.message}
                                                            />
                                                        )}
                                                    />
                                                </Grid>
                                                <Grid container direction="row" justifyContent="space-between">
                                                    <Grid item xs={12} sm={12}>
                                                        <Controller
                                                            name="captvalue"
                                                            control={control}
                                                            render={({ field: { onChange, value } }) => (
                                                                <Stack mt={2} mb={1} direction="row" gap={1} alignItems="center">
                                                                    <Captcha ref={captchaRef} />

                                                                    <TextField
                                                                        label={<FormattedMessage id="lb_captcha" />}
                                                                        value={value}
                                                                        onChange={onChange}
                                                                        sx={{ width: '100%' }}
                                                                        error={!!errors.captvalue?.message}
                                                                    />
                                                                </Stack>
                                                            )}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={12}>
                                                        <Button
                                                            type="submit"
                                                            sx={{
                                                                width: {
                                                                    xs: '100%'
                                                                },
                                                                color: 'white',
                                                                backgroundColor: '#00A64F',
                                                                ':hover': { color: 'white', background: '#00A64F' },
                                                                textTransform: 'none'
                                                            }}
                                                            disabled={isSubmitting}
                                                        >
                                                            <Typography sx={{ fontSize: '15px', fontFamily: 'inter' }}>
                                                                <FormattedMessage id="contact_btn" />
                                                            </Typography>
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        </Grid>
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
export default ContactUs;
