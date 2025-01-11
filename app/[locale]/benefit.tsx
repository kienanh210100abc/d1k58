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
        backgroundColor: "#00A64F",
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
                marginBottom={{
                  xs:"50px",
                  sm:"none"
                }}
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "16px",
                    lg: "18px",
                  },
                }}
              >
                <Box display="flex" alignItems="flex-start">
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
              padding: {
                xs:"30px",
                sm:"none"
              },
              width: {
                lg: "611px",
                sm: "611px",
                xs: "350px",
              },
              height: {
                lg: "405px",
                xs: "400px",
              },
            }}
          >
            <iframe
              width="560"
              height="315"
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
                {t("benefit.title2")}
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
                  <Box>
                    <Typography fontWeight="400" fontSize="16px">
                      {t("benefit.text3")}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <br />

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
                xs: "400px",
              },
            }}
          >
            <iframe
              width="560"
              height="315"
              src={t("benefit.video2")}
              title="YouTube video player"
              style={{
                borderRadius: "30px",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>
        </Grid> 
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
                 fontSize:"32px"
                }}
              >
                {t("benefit.title3")}
                <br/>
                {t("benefit.title4")}
              </Typography>
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
                // xs: "432px",
              },
            }}
          >
            <iframe
              width="560"
              height="315"
              src={t("benefit.video3")}
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
