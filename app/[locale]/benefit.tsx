"use client";

import backgroundBenefit from "@/assets/backgroundBenefit.svg";
import checkboxTXL from "@/assets/checkboxTXL.svg";
import { Grid, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { useTranslation } from "react-i18next";

export const Benefit = () => {
  const { t } = useTranslation();

  return (
    <section
      id="benefit"
      className="home__automation-integration"
      style={{
        backgroundImage: `url(${backgroundBenefit.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid mt="80px" container height={"100%"}>
          <Grid item xs={12} sm={12} md={6}>
            <Stack
              alignItems="start"
              height="100%"
              width="100%"
              justifyContent="center"
            >
              <Typography
                fontWeight="600"
                color="white"
                width="100%"
                sx={{
                  marginTop: {
                    xs: "50px",
                    md: "none",
                    lg: "none",
                  },
                  fontSize: {
                    xs: "32px",
                    sm: "32px",
                    lg: "32px",
                  },
                }}
              >
                {t("benefit.title")}
              </Typography>
              <br />
              <Box
                fontWeight="500"
                color="white"
                width="100%"
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "16px",
                    lg: "18px",
                  },
                }}
              >
                <Box display="flex" alignItems="flex-start">
                  <img
                    src={checkboxTXL.src}
                    alt="bg"
                    width="24px"
                    height="24px"
                    style={{ marginRight: "8px", marginTop: "4px" }}
                  />
                  <Box>
                    <Typography
                      fontWeight="600"
                      lineHeight="26.82px"
                      sx={{
                        fontSize: {
                          xs: "20px",
                          lg: "22px",
                        },
                      }}
                    >
                      {t("benefit.text1")}
                    </Typography>
                    <Typography fontWeight="400" fontSize="16px">
                      {t("benefit.text2")}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <br />

              <Box
                //
                fontWeight="500"
                color="white"
                width="100%"
                // align="justify"
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "16px",
                    lg: "18px",
                  },
                }}
              >
                <Box display="flex" alignItems="flex-start">
                  <img
                    src={checkboxTXL.src}
                    alt="bg"
                    width="24px"
                    height="24px"
                    style={{ marginRight: "8px", marginTop: "4px" }}
                  />
                  <Box>
                    <Typography
                      fontWeight="600"
                      lineHeight="26.82px"
                      sx={{
                        fontSize: {
                          xs: "20px",
                          lg: "22px",
                        },
                      }}
                    >
                      {t("benefit.text3")}
                    </Typography>
                    <Typography fontWeight="400" fontSize="16px">
                      {t("benefit.text4")}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <br />
              <Box
                //
                fontWeight="500"
                color="white"
                width="100%"
                // align="justify"
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "16px",
                    lg: "18px",
                  },
                }}
              >
                <Box display="flex" alignItems="flex-start">
                  <img
                    src={checkboxTXL.src}
                    alt="bg"
                    width="24px"
                    height="24px"
                    style={{ marginRight: "8px", marginTop: "4px" }}
                  />
                  <Box>
                    <Typography
                      fontWeight="600"
                      lineHeight="26.82px"
                      sx={{
                        fontSize: {
                          xs: "20px",
                          lg: "22px",
                        },
                      }}
                    >
                      {t("benefit.text5")}
                    </Typography>
                    <Typography fontWeight="400" fontSize="16px">
                      {t("benefit.text6")}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <br />
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px",
              width: {
                lg: "611px",
                sm: "611px",
                xs: "350px",
              },
              height: {
                lg: "405px",
                sm: "405px",
                xs: "232px",
              },
            }}
          >
            <iframe
              width="90%"
              height="100%"
              src={t("benefit.video")}
              title="YouTube video player"
              style={{
                borderRadius: "30px",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
