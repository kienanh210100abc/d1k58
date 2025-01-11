/* eslint-disable @next/next/no-img-element */
"use client";

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
// import { Logo } from "./icons";
import LogoD1 from "@/assets/LogoD1.svg";

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
    theme.palette.mode === "dark"
      ? theme.palette.dark.dark
      : theme.palette.grey[200];

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
    style: {
      backgroundColor: theme.palette.background.default,
      borderBottom: trigger ? "none" : "1px solid",
      borderColor: trigger ? "" : darkBorder,
      color: theme.palette.text.dark,
    },
  });
}

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //
export const Header = ({ ...others }) => {
  const [drawerToggle, setDrawerToggle] = React.useState<boolean>(false);
  const [isActive, setIsActive] = useState(0);
  /** Method called on multiple components with different event types */
  const drawerToggler = (open: boolean) => (event: any) => {
    if (
      event.type! === "keydown" &&
      (event.key! === "Tab" || event.key! === "Shift")
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
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };
  const { t } = useTranslation();
  const nav = [
    { id: "summaryIntro", name: t("menu.introduction"), key: 0 },
    { id: "benefit", name: t("menu.benefit"), key: 1 },
  ];

  return (
    <ElevationScroll {...others}>
      <MuiAppBar sx={{ width: "100%" }}>
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            mx="15px"
       >
            <img src={LogoD1.src} alt="bg" width="250px" height="50px"   />
            
            <Stack
              direction="row"
              sx={{
                display: { xs: "none", lg: "block" },
                "@media (min-width: 520px)": { display: "block" },
                "@media (max-width: 520px)": { display: "none" },
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
                      color: index === isActive ? "#00A64F" : "none",
                      textTransform: "none",
                      fontSize: "18px",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Button>
              ))}
            </Stack>
            <Stack></Stack>
          </Stack>

          <Box
            sx={{
              display: {
                xs: "block",
                lg: "none",
              },
              "@media (max-width: 520px)": {
                display: "block",
              },
              "@media (min-width: 520px)": {
                display: "none",
              },
            }}
          >
            <IconButton
              color="inherit"
              onClick={drawerToggler(true)}
              size="large"
            >
              <img
                src={menuTXL.src}
                alt="bg"
                width="30px"
                height="30px"
                style={{ marginRight: "8px", marginTop: "4px" }}
              />
            </IconButton>
            <Drawer
              anchor="top"
              open={drawerToggle}
              onClose={drawerToggler(false)}
            >
              {drawerToggle && (
                <Box
                  sx={{ width: "auto" }}
                  role="presentation"
                  onClick={drawerToggler(false)}
                  onKeyDown={drawerToggler(false)}
                >
                  <List>
                    <Link
                      style={{ textDecoration: "none" }}
                      onClick={() => handleScrollToSection("summaryIntro")}
                      target="_blank"
                    >
                      <ListItemButton component="a">
                        <ListItemText primary={t("menu.introduction")} />
                      </ListItemButton>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      onClick={() => handleScrollToSection("benefit")}
                      target="_blank"
                    >
                      <ListItemButton component="a">
                        <ListItemText primary={t("menu.benefit")} />
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
