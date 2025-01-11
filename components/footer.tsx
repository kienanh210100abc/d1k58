"use client";
// import Facebook from "@/assets/Facebook.svg";
import Youtube from "@/assets/Youtube.svg";
import Facebook from "@/assets/Facebook.svg";
import VSII from "@/assets/VSII.svg";
import Linkedln from "@/assets/Linked.svg";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box
        sx={{
          marginTop: "30px",
          marginBottom: "30px",
          display: "flex",
         
            justifyContent:"center",
          alignItems: "center",
        }}
        px="30px"
        my="10px"
      >
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          {t("footer.footer")}
        </Typography>
 
      </Box>
    </>
  );
};
