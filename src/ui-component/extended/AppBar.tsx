import React, { ReactElement, useEffect, useState } from 'react';

import { useTheme } from '@mui/material/styles';
import {
    AppBar as MuiAppBar,
    Box,
    Drawer,
    IconButton,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Toolbar,
    Typography,
    useScrollTrigger,
    Button,
    Menu,
    MenuItem
} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FormattedMessage } from 'react-intl';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import Logo from 'ui-component/Logo';

import { IconBook, IconCreditCard, IconDashboard, IconHome2 } from '@tabler/icons';
import menuTXL from 'assets/images/landing/Home/MenuTXL.svg';
import { useDispatch } from 'react-redux';
import { setLanguage } from 'redux/slice/app.slice';
import useConfig from 'hooks/useConfig';
import { useLocation, useNavigate } from 'react-router-dom';

interface ElevationScrollProps {
    children: ReactElement;
    window?: Window | Node;
}

function ElevationScroll({ children, window }: ElevationScrollProps) {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window!
    });
    const darkBorder = theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.grey[200];

    return React.cloneElement(children, {
        elevation: trigger ? 2 : 0,
        style: {
            backgroundColor: theme.palette.background.default,
            borderBottom: trigger ? 'none' : '1px solid',
            borderColor: trigger ? '' : darkBorder,
            color: theme.palette.text.dark
        }
    });
}

const nav = [
    { id: 'summaryIntro', name: <FormattedMessage id="hd_intro" />, key: 0 },
    { id: 'benefit', name: <FormattedMessage id="hd_benefit" />, key: 1 },
    { id: 'feature', name: <FormattedMessage id="hd_feature" />, key: 2 },
    { id: 'procedure', name: <FormattedMessage id="hd_procedure" />, key: 3 },
    { id: 'price', name: <FormattedMessage id="hd_price" />, key: 4 },
    { id: 'contact', name: <FormattedMessage id="hd_contact" />, key: 5 }
];

const AppBar = ({ ...others }) => {
    const { onChangeLocale } = useConfig();
    // const AppBar: React.FC<AppBarProps> = ({ currentLanguage, onChangeLanguage, ...others }) => {
    const [drawerToggle, setDrawerToggle] = React.useState<boolean>(false);
    const [isActive, setIsActive] = useState(0);
    const dispatch = useDispatch();
    const drawerToggler = (open: boolean) => (event: any) => {
        if (event.type! === 'keydown' && (event.key! === 'Tab' || event.key! === 'Shift')) {
            return;
        }
        setDrawerToggle(open);
    };

    const handleScrollToSection = (sectionId: string, key?: number) => {
        if (key || key === 0) {
            setIsActive(key);
        }
        const section = document.getElementById(sectionId);
        if (section) {
            const topOffset = section.offsetTop - 110;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        dispatch(setLanguage('EN'));

        setAnchorEl(event.currentTarget);
    };

    // const getMessages = (language: string) => {
    //     return language === 'VN' ? vietnameseMessages : englishMessages;
    // };
    const [currentLanguage, setCurrentLanguage] = useState('VN');
    // const [messages, setMessages] = useState(getMessages('VN'));
    const navigate = useNavigate();
    const location = useLocation();
    const handleClose = (language: 'VN' | 'EN') => {
        onChangeLocale(language);
        dispatch(setLanguage(language));
        setCurrentLanguage(language);

        // setMessages(getMessages(language));
        localStorage.setItem('selectedLanguage', language);
        setAnchorEl(null);
        if (language === 'EN') {
            // Chuyển sang tiếng Anh
            if (!location.pathname.startsWith('/en')) {
                navigate('/en' + location.pathname);
            }
        } else {
            // Chuyển sang tiếng Việt
            if (location.pathname.startsWith('/en')) {
                navigate(location.pathname.replace('/en', ''));
            }
        }
    };
    useEffect(() => {
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (savedLanguage) {
            setCurrentLanguage(savedLanguage);
        }
    }, []);

    return (
        <ElevationScroll {...others}>
            <MuiAppBar sx={{ width: '100%' }}>
                <Toolbar>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%" mx="15px">
                        <Typography
                            sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'block',
                                    padding: '10px 0'
                                }
                            }}
                        >
                            <Logo />
                        </Typography>
                        <Typography
                            sx={{
                                display: {
                                    xs: 'block',
                                    sm: 'none',
                                    padding: '10px 0'
                                }
                            }}
                        >
                            <Logo />
                        </Typography>
                        <Stack
                            direction="row"
                            sx={{
                                display: { xs: 'none', lg: 'block' },
                                '@media (min-width: 1279px)': { display: 'block' },
                                '@media (max-width: 1279px)': { display: 'none' }
                            }}
                            spacing={2}
                        >
                            {nav.map((item, index) => (
                                <Button key={item.key} color="inherit" onClick={() => handleScrollToSection(item.id, item.key)}>
                                    <Typography
                                        fontWeight={500}
                                        sx={{
                                            color: index === isActive ? '#00A64F' : 'none',
                                            textTransform: 'none',
                                            fontFamily: 'Montserrat',
                                            fontSize: '18px'
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                </Button>
                            ))}
                        </Stack>
                        <Stack
                            direction="row"
                            sx={{
                                display: { xs: 'block', lg: 'none' },
                                '@media (min-width: 1279px)': { display: 'block' },
                                '@media (max-width: 1279px)': { display: 'none' }
                            }}
                        >
                            <Button
                                sx={{
                                    marginRight: '10px',
                                    marginY: '22px',
                                    padding: '13px 24px',
                                    background: 'white',
                                    color: '#00A64F',
                                    borderRadius: '10px',
                                    border: '1px solid #00A64F',
                                    textTransform: 'none',
                                    fontFamily: 'Montserrat'
                                }}
                                onClick={handleClick}
                            >
                                {currentLanguage} <KeyboardArrowDownIcon />
                            </Button>
                            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                                <MenuItem onClick={() => handleClose('VN')}>
                                    <FormattedMessage id="dr_vi" />
                                </MenuItem>
                                <MenuItem onClick={() => handleClose('EN')}>
                                    <FormattedMessage id="dr_eng" />
                                </MenuItem>
                            </Menu>

                            <Button
                                onClick={() => window.open(`${process.env.REACT_APP_PUBLIC_ROUTER}/register`, '_blank')}
                                sx={{
                                    marginY: '22px',
                                    padding: '13px 24px',
                                    background: 'white',
                                    color: '#00A64F',
                                    borderRadius: '10px',
                                    border: '1px solid #00A64F',
                                    fontFamily: 'Montserrat',
                                    textTransform: 'none'
                                }}
                            >
                                <FormattedMessage id="btn_register" />
                            </Button>
                            <Button
                                onClick={() => window.open(`${process.env.REACT_APP_PUBLIC_ROUTER}/login`, '_blank')}
                                sx={{
                                    borderRadius: '10px',
                                    color: 'white',
                                    padding: '5px 14px',
                                    background: '#00A64F',
                                    marginLeft: '10px',
                                    fontFamily: 'Montserrat',

                                    ':hover': { background: '#00A64F', color: 'white' },
                                    textTransform: 'none'
                                }}
                            >
                                <FormattedMessage id="btn_login" />
                            </Button>
                        </Stack>
                        <Stack
                            sx={{
                                display: { xs: 'block', lg: 'none' },
                                '@media (max-width: 1280px)': { display: 'block' },
                                '@media (min-width: 1279px)': { display: 'none' },
                                padding: '20px'
                            }}
                            direction="row"
                        >
                            <IconButton color="inherit" onClick={drawerToggler(true)} size="small">
                                <img src={menuTXL} alt="menuTXL" />
                            </IconButton>
                            <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                                {drawerToggle && (
                                    <Box
                                        sx={{ width: 'auto' }}
                                        role="presentation"
                                        onClick={drawerToggler(false)}
                                        onKeyDown={drawerToggler(false)}
                                    >
                                        <List>
                                            <Link style={{ textDecoration: 'none' }} onClick={() => handleScrollToSection('summaryIntro')}>
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconHome2 />
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        <FormattedMessage id="hd_intro" />
                                                    </ListItemText>
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} onClick={() => handleScrollToSection('benefit')}>
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconDashboard />
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        <FormattedMessage id="hd_benefit" />
                                                    </ListItemText>
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} onClick={() => handleScrollToSection('feature')}>
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconBook />
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        <FormattedMessage id="hd_feature" />
                                                    </ListItemText>
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} onClick={() => handleScrollToSection('procedure')}>
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <IconCreditCard />
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        <FormattedMessage id="hd_procedure" />
                                                    </ListItemText>
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} onClick={() => handleScrollToSection('price')}>
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <AttachMoneyIcon />
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        <FormattedMessage id="hd_price" />
                                                    </ListItemText>
                                                </ListItemButton>
                                            </Link>
                                            <Link style={{ textDecoration: 'none' }} onClick={() => handleScrollToSection('contact')}>
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <CallIcon />
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        <FormattedMessage id="hd_contact" />
                                                    </ListItemText>
                                                </ListItemButton>
                                            </Link>
                                            <Link
                                                style={{ textDecoration: 'none' }}
                                                onClick={() => window.open(`${process.env.REACT_APP_PUBLIC_ROUTER}/login`, '_blank')}
                                            >
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <LoginIcon />
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        <FormattedMessage id="btn_login" />
                                                    </ListItemText>
                                                </ListItemButton>
                                            </Link>
                                            <Link
                                                style={{ textDecoration: 'none' }}
                                                onClick={() => window.open(`${process.env.REACT_APP_PUBLIC_ROUTER}/register`, '_blank')}
                                            >
                                                <ListItemButton component="a">
                                                    <ListItemIcon>
                                                        <AppRegistrationIcon />
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        <FormattedMessage id="btn_register" />
                                                    </ListItemText>
                                                </ListItemButton>
                                            </Link>
                                        </List>
                                    </Box>
                                )}
                            </Drawer>
                        </Stack>
                    </Stack>
                </Toolbar>
            </MuiAppBar>
        </ElevationScroll>
    );
};

export default AppBar;
