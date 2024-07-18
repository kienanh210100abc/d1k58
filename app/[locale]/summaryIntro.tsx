"use client";

import { useTranslation } from "react-i18next";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import introIMG from "@/assets/introIMG.svg";
export const SummaryIntro = () => {
  const { t } = useTranslation();

  return (
    <>
      <Stack component="section" id="summaryIntro" sx={{ mt: "90px" }}>
        <Container>
          <Grid
            // mt="80px"
            container
            sx={{
              flexDirection: {
                xs: "column-reverse",
                md: "row",
              },
            }}
          >
            <Grid item xs={12} sm={12} md={6}>
              <Stack
                alignItems="start"
                height="100%"
                width="100%"
                justifyContent="center"
                pt="10%"
              >
                <Typography
                  fontWeight="600"
                  color="#00A64F"
                  width="100%"
                  px="6vh"
                  sx={{
                    fontSize: {
                      xs: "32px",
                      sm: "35px",
                      lg: "44px",
                    },
                  }}
                >
                  {t("summaryIntro.title")}
                </Typography>
                <br />
                <Typography
                  fontWeight="500"
                  color="#393939"
                  width="100%"
                  px="6vh"
                  align="justify"
                  sx={{
                    fontSize: {
                      xs: "16px",
                      sm: "18px",
                      lg: "18px",
                    },
                    alignItems: "Justified",
                  }}
                >
                  {t("summaryIntro.text1")}
                  <span style={{ color: "#00A64F" }}>
                    {t("summaryIntro.text2")}
                  </span>
                  .{t("summaryIntro.text3")}
                </Typography>
                <br />
                <Typography
                  fontWeight="500"
                  color="#393939"
                  width="100%"
                  px="6vh"
                  align="justify"
                  sx={{
                    fontSize: {
                      xs: "16px",
                      sm: "18px",
                      lg: "18px",
                    },
                  }}
                >
                  {t("summaryIntro.text4")}
                  <span style={{ color: "#00A64F" }}>
                    {t("summaryIntro.text5")}
                  </span>
                  {t("summaryIntro.text6")}
                </Typography>
                <br />
                <Typography
                  fontWeight="500"
                  color="#393939"
                  width="100%"
                  px="6vh"
                  align="justify"
                >
                  <Button
                    onClick={() =>
                      window.open(
                        `${process.env.NEXT_PUBLIC_ROUTER}/register`,
                        "_blank"
                      )
                    }
                    sx={{
                      borderRadius: "41px",
                      fontSize: {
                        sx: "16px",
                        sm: "16px",
                        lg: "18px",
                      },
                      color: "white",
                      padding: "10px 15px",
                      background: "#00A64F",
                      fontWeight: "700",
                      ":hover": { background: "#00A64F", color: "white" },
                      textTransform: "none",
                    }}
                  >
                    {t("summaryIntro.btn")}
                  </Button>
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <img src={introIMG.src} alt="bg" width="100%" />
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
};
