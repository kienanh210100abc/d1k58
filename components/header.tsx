'use client';

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  AppBar as MuiAppBar,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import menuTXL from "../assets/MenuTXL.svg";
import { Logo } from "./icons";
// elevation scroll
interface ElevationScrollProps {
  children: ReactElement;
  window?: Window | Node;
}

function ElevationScroll({ children, window }: ElevationScrollProps) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window!,
  });
  const darkBorder =
    theme.palette.mode === 'dark'
      ? theme.palette.dark.dark
      : theme.palette.grey[200];

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
    style: {
      backgroundColor: theme.palette.background.default,
      borderBottom: trigger ? 'none' : '1px solid',
      borderColor: trigger ? '' : darkBorder,
      color: theme.palette.text.dark,
    },
  });
}

const Language = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChangeLanguage = () => {
    const language = currentLocale === 'vi' ? 'en' : 'vi';
    router.push(
      currentPathname.startsWith(`/${currentLocale}`) || currentPathname === '/'
        ? '/' + language + currentPathname.replace(`/${currentLocale}`, '')
        : currentPathname.replace(`/${currentLocale}`, `/${language}`)
    );
  };
  return (
    <Button
      sx={{
        background: 'white',
        marginRight: '10px',
        color: '#00A64F',
        padding: '0px 14px',
        borderRadius: '10px',
        border: '1px solid #00A64F',
        height: '35px',
        display: 'inline-flex',
        '@media (max-width: 442px)': {
          display: 'none',
        },
      }}
      onClick={handleChangeLanguage}
    >
      {currentLocale === 'vi' ? 'Vi' : 'En'} <KeyboardArrowDownIcon />
    </Button>
  );
};

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //
export const Header = ({ ...others }) => {
  const [drawerToggle, setDrawerToggle] = React.useState<boolean>(false);
  const [isActive, setIsActive] = useState(0);
  /** Method called on multiple components with different event types */
  const drawerToggler = (open: boolean) => (event: any) => {
    if (
      event.type! === 'keydown' &&
      (event.key! === 'Tab' || event.key! === 'Shift')
    ) {
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
      const topOffset = section.offsetTop - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };
  const { t } = useTranslation();
  const nav = [
    { id: 'summaryIntro', name: t('menu.introduction'), key: 0 },
    { id: 'benefit', name: t('menu.benefit'), key: 1 },
    { id: 'feature', name: t('menu.feature'), key: 2 },
    { id: 'procedure', name: t('menu.procedure'), key: 3 },
    { id: 'price', name: t('menu.priceList'), key: 4 },
    { id: 'contact', name: t('menu.contact'), key: 5 },
  ];

  return (
    <ElevationScroll {...others}>
      <MuiAppBar sx={{ width: '100%' }}>
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            mx="15px"
          >
            <Typography
              sx={{
                display: {
                  xs: 'none',
                  sm: 'block',
                },
              }}
            >
              <Logo />
            </Typography>
            <Typography
              sx={{
                display: {
                  xs: 'block',
                  sm: 'none',
                  // padding: "10px 0",
                },
              }}
            >
              <Logo />
            </Typography>
            <Stack
              direction="row"
              sx={{
                display: { xs: 'none', lg: 'block' },
                '@media (min-width: 1303px)': { display: 'block' },
                '@media (max-width: 1303px)': { display: 'none' },
              }}
              spacing={2}
            >
              {nav.map((item, index) => (
                <Button
                  key={item.key}
                  color="inherit"
                  onClick={() => handleScrollToSection(item.id, item.key)}
                >
                  <Typography
                    fontWeight={500}
                    sx={{
                      color: index === isActive ? '#00A64F' : 'none',
                      textTransform: 'none',
                      fontSize: '18px',
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
                '@media (min-width: 1303px)': { display: 'block' },
                '@media (max-width: 1303px)': { display: 'none' },
              }}
            >
              <Button
                onClick={() =>
                  window.open(
                    `${process.env.NEXT_PUBLIC_ROUTER}/register`,
                    '_blank'
                  )
                }
                sx={{
                  borderRadius: '10px',
                  padding: '5px 15px',
                  background: 'white',
                  color: '#00A64F',
                  border: '1px solid #00A64F',
                  textTransform: 'none',
                }}
              >
                {t('menu.register')}
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    `${process.env.NEXT_PUBLIC_ROUTER}/login`,
                    '_blank'
                  )
                }
                sx={{
                  borderRadius: '10px',
                  color: 'white',
                  padding: '5px 14px',
                  background: '#00A64F',
                  marginLeft: '10px',
                  ':hover': { background: '#00A64F', color: 'white' },
                  textTransform: 'none',
                }}
              >
                {t('menu.login')}
              </Button>
            </Stack>
          </Stack>
          <Language />

          <Box
            sx={{
              display: {
                xs: 'block',
                lg: 'none',
              },
              '@media (max-width: 1303px)': {
                display: 'block',
              },
              '@media (min-width: 1303px)': {
                display: 'none',
              },
            }}
          >
            <IconButton
              color="inherit"
              onClick={drawerToggler(true)}
              size="large"
            >
              {/* <MenuIcon /> */}
              <img src={menuTXL.src} alt="menuTXL" />
            </IconButton>
            <Drawer
              anchor="top"
              open={drawerToggle}
              onClose={drawerToggler(false)}
            >
              {drawerToggle && (
                <Box
                  sx={{ width: 'auto' }}
                  role="presentation"
                  onClick={drawerToggler(false)}
                  onKeyDown={drawerToggler(false)}
                >
                  <List>
                    <Link
                      style={{ textDecoration: 'none' }}
                      onClick={() => handleScrollToSection('summaryIntro')}
                      target="_blank"
                    >
                      <ListItemButton component="a">
                        <ListItemText primary={t('menu.introduction')} />
                      </ListItemButton>
                    </Link>
                    <Link
                      style={{ textDecoration: 'none' }}
                      onClick={() => handleScrollToSection('benefit')}
                      target="_blank"
                    >
                      <ListItemButton component="a">
                        <ListItemText primary={t('menu.benefit')} />
                      </ListItemButton>
                    </Link>
                    <Link
                      style={{ textDecoration: 'none' }}
                      onClick={() => handleScrollToSection('feature')}
                      target="_blank"
                    >
                      <ListItemButton component="a">
                        <ListItemText primary={t('menu.feature')} />
                      </ListItemButton>
                    </Link>
                    <Link
                      style={{ textDecoration: 'none' }}
                      onClick={() => handleScrollToSection('procedure')}
                      target="_blank"
                    >
                      <ListItemButton component="a">
                        <ListItemText primary={t('menu.procedure')} />
                      </ListItemButton>
                    </Link>
                    <Link
                      style={{ textDecoration: 'none' }}
                      onClick={() => handleScrollToSection('price')}
                      target="_blank"
                    >
                      <ListItemButton component="a">
                        <ListItemText primary={t('menu.priceList')} />
                      </ListItemButton>
                    </Link>

                    <Link
                      style={{ textDecoration: 'none' }}
                      onClick={() => handleScrollToSection('contact')}
                      target="_blank"
                    >
                      <ListItemButton component="a">
                        <ListItemText primary={t('menu.contact')} />
                      </ListItemButton>
                    </Link>
                    <Link
                      style={{ textDecoration: 'none' }}
                      onClick={() =>
                        window.open(
                          `${process.env.NEXT_PUBLIC_ROUTER}/login`,
                          '_blank'
                        )
                      }
                      target="_blank"
                    >
                      <ListItemButton component="a">
                        <ListItemText primary={t('menu.login')} />
                      </ListItemButton>
                    </Link>
                    <Link
                      style={{ textDecoration: 'none' }}
                      onClick={() =>
                        window.open(
                          `${process.env.NEXT_PUBLIC_ROUTER}/register`,
                          '_blank'
                        )
                      }
                      target="_blank"
                    >
                      <ListItemButton component="a">
                        <ListItemText primary={t('menu.register')} />
                      </ListItemButton>
                    </Link>
                  </List>
                </Box>
              )}
            </Drawer>
          </Box>
        </Toolbar>
      </MuiAppBar>
    </ElevationScroll>
  );
};
