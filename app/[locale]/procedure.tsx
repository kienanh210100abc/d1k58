"use client";

import { Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import create from "@/assets/CreateProduct.svg";
import enterInfor from "@/assets/EnterInformation.svg";
import scanQR from "@/assets/ScanQR.svg";
import viewQR from "@/assets/ViewInforQR.svg";
import img from "@/assets/ImgProcedure.svg";
import { Box, Stack } from "@mui/system";

export const Procedure = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="procedure">
        <Container>
          <Grid mt="80px">
            <h1
              style={{
                lineHeight: "30px",
                textAlign: "center",
                fontWeight: "600",
                fontSize: "32px",
                color: "black",
              }}
            >
              {t("procedure.title")}
            </h1>
            <Grid container item xs={12} sm={12} md={12}>
              <Grid item xs={12} sm={12} md={6}>
                <Stack
                  alignItems="start"
                  height="100%"
                  width="100%"
                  justifyContent="center"
                  pt="5%"
                >
                  <img src={img.src} alt="bg" height="100%" width="100%" />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Stack
                  alignItems="start"
                  height="100%"
                  width="100%"
                  justifyContent="center"
                  pt="5%"
                >
                  <Box
                    fontWeight="500"
                    color="black"
                    width="100%"
                    sx={{
                      paddingLeft: { xs: "none", md: "30px", lg: "30px" },
                      fontSize: {
                        xs: "16px",
                        sm: "16px",
                        lg: "18px",
                      },
                    }}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      marginBottom={"10px"}
                    >
                      <img
                        src={create.src}
                        alt="bg"
                        width="32px"
                        height="32px"
                        style={{ marginRight: "8px" }}
                      />
                      <Box sx={{ display: "flex" }}>
                        <Typography
                          fontWeight="600"
                          lineHeight="29.26px"
                          sx={{
                            fontSize: {
                              xs: "20px",
                              lg: "24px",
                            },
                          }}
                        >
                          {t("procedure.title1")}{" "}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      fontWeight="400"
                      fontSize="16px"
                      style={{ textAlign: "justify" }}
                    >
                      {t("procedure.content1")}{" "}
                    </Typography>
                  </Box>
                  <br />
                  <Box
                    fontWeight="500"
                    color="black"
                    width="100%"
                    sx={{
                      paddingLeft: { xs: "none", md: "30px", lg: "30px" },
                      fontSize: {
                        xs: "16px",
                        sm: "16px",
                        lg: "18px",
                      },
                    }}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      marginBottom={"10px"}
                    >
                      <img
                        src={enterInfor.src}
                        alt="bg"
                        width="32px"
                        height="32px"
                        style={{ marginRight: "8px" }}
                      />
                      <Box>
                        <Typography
                          fontWeight="600"
                          sx={{
                            fontSize: {
                              xs: "20px",
                              lg: "24px",
                            },
                          }}
                          lineHeight="29.26px"
                        >
                          {t("procedure.title2")}{" "}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      fontWeight="400"
                      fontSize="16px"
                      style={{ textAlign: "justify" }}
                    >
                      {t("procedure.content2")}{" "}
                    </Typography>
                  </Box>
                  <br />
                  <Box
                    fontWeight="500"
                    color="black"
                    width="100%"
                    sx={{
                      paddingLeft: { xs: "none", md: "30px", lg: "30px" },
                      fontSize: {
                        xs: "16px",
                        sm: "16px",
                        lg: "18px",
                      },
                    }}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      marginBottom={"10px"}
                    >
                      <img
                        src={scanQR.src}
                        alt="bg"
                        width="32px"
                        height="32px"
                        style={{ marginRight: "8px" }}
                      />
                      <Box>
                        <Typography
                          fontWeight="600"
                          sx={{
                            fontSize: {
                              xs: "20px",
                              lg: "24px",
                            },
                          }}
                          lineHeight="29.26px"
                        >
                          {t("procedure.title3")}{" "}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      fontWeight="400"
                      fontSize="16px"
                      style={{ textAlign: "justify" }}
                    >
                      {t("procedure.content3")}{" "}
                    </Typography>
                  </Box>
                  <br />
                  <Box
                    fontWeight="500"
                    color="black"
                    width="100%"
                    sx={{
                      paddingLeft: { xs: "none", md: "30px", lg: "30px" },
                      fontSize: {
                        xs: "16px",
                        sm: "16px",
                        lg: "18px",
                      },
                    }}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      marginBottom={"10px"}
                    >
                      <img
                        src={viewQR.src}
                        alt="bg"
                        width="32px"
                        height="32px"
                        style={{ marginRight: "8px" }}
                      />
                      <Box>
                        <Typography
                          fontWeight="600"
                          sx={{
                            fontSize: {
                              xs: "20px",
                              lg: "24px",
                            },
                          }}
                          lineHeight="29.26px"
                        >
                          {t("procedure.title4")}{" "}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      fontWeight="400"
                      fontSize="16px"
                      style={{ textAlign: "justify" }}
                    >
                      {t("procedure.content4")}{" "}
                    </Typography>
                  </Box>
                  <br />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};
