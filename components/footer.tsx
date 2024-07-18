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
          flexDirection: {
            lg: "row",
            xs: "column",
          },
          justifyContent: {
            lg: "space-between",
          },
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

        <Stack direction="row">
          <Button
            onClick={() =>
              window.open("https://insight.vsi-international.com/", "_blank")
            }
          >
            <img src={VSII.src} alt="logo" />
          </Button>
          <Button
            onClick={() =>
              window.open(
                "https://www.youtube.com/channel/UCbzgyuU8XqBu2g-Y0TvPiag",
                "_blank"
              )
            }
          >
            <img src={Youtube.src} alt="logo" />
          </Button>

          <Button
            onClick={() =>
              window.open("https://www.facebook.com/VSII.Fanpage", "_blank")
            }
          >
            <img src={Facebook.src} alt="logo" />
          </Button>
          <Button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/vietsoftware-international",
                "_blank"
              )
            }
          >
            <img src={Linkedln.src} alt="logo" />
          </Button>
        </Stack>
      </Box>
    </>
  );
};
