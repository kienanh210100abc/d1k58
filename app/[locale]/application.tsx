"use client";
import environment from "@/assets/environment.svg";
import history from "@/assets/history.svg";
import infor from "@/assets/infor.svg";
import organic from "@/assets/organic.svg";
import product from "@/assets/product.svg";
import tourist from "@/assets/tourist.svg";
import { Container, Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useTranslation } from "react-i18next";

export const Application = () => {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="application"
        style={{
          background: "linear-gradient(180deg, #E6F7EE 90%, #E6F7EE 100%)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          padding: "50px, 60px, 50px, 60px",
          gap: "60px",
          marginTop: "80px",
        }}
      >
        <Stack>
          <Container>
            <Grid>
              <h1
                style={{
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: "32px",
                  color: "#414042",
                  lineHeight: "normal",
                }}
              >
                {t("application.application")}{" "}
              </h1>

              <br />

              <Box display="flex" flexWrap="wrap" gap="50px">
                <Grid spacing={5} container item xs={12} sm={12} md={12}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={organic.src}
                        alt="bg"
                        style={{
                          width: "100%",
                          height: "auto",
                          marginBottom: "10px",
                          borderRadius: "20px",
                        }}
                      />
                      <Box
                        mt={2}
                        sx={{
                          fontSize: {
                            lg: "24px",
                          },
                        }}
                      >
                        <p
                          style={{
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "24px",
                            textAlign: "justify",
                            color: "#414142",
                          }}
                        >
                          {t("application.organic")}
                        </p>
                      </Box>
                      <Box
                        mt={2}
                        sx={{
                          fontSize: {
                            lg: "16px",
                          },
                        }}
                      >
                        <p
                          style={{
                            fontWeight: "500",

                            lineHeight: "19.5px",
                            textAlign: "justify",
                            color: "#414042",
                          }}
                        >
                          {t("application.organic-ct")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={product.src}
                        alt="bg"
                        style={{
                          width: "100%",
                          height: "auto",
                          marginBottom: "10px",
                          borderRadius: "20px",
                        }}
                      />
                      <Box
                        mt={2}
                        sx={{
                          fontSize: {
                            lg: "24px",
                          },
                        }}
                      >
                        <p
                          style={{
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "24px",
                            textAlign: "justify",
                            color: "#414142",
                          }}
                        >
                          {t("application.consumer-product")}
                        </p>
                      </Box>
                      <Box
                        mt={2}
                        sx={{
                          fontSize: {
                            lg: "16px",
                          },
                        }}
                      >
                        <p
                          style={{
                            fontWeight: "500",

                            lineHeight: "19.5px",
                            textAlign: "justify",
                            color: "#414042",
                          }}
                        >
                          {t("application.consumer-product-ct")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={history.src}
                        alt="bg"
                        style={{
                          width: "100%",
                          height: "auto",
                          marginBottom: "10px",
                          borderRadius: "20px",
                        }}
                      />
                      <Box
                        mt={2}
                        sx={{
                          fontSize: {
                            lg: "24px",
                          },
                        }}
                      >
                        <p
                          style={{
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "24px",
                            textAlign: "justify",
                            color: "#414142",
                          }}
                        >
                          {t("application.history")}
                        </p>
                      </Box>
                      <Box
                        mt={2}
                        sx={{
                          fontSize: {
                            lg: "16px",
                          },
                        }}
                      >
                        <p
                          style={{
                            fontWeight: "500",

                            lineHeight: "19.5px",
                            textAlign: "justify",
                            color: "#414042",
                          }}
                        >
                          {t("application.history-ct")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={tourist.src}
                        alt="bg"
                        style={{
                          width: "100%",
                          height: "auto",
                          marginBottom: "10px",
                          borderRadius: "20px",
                        }}
                      />
                      <Box
                        mt={2}
                        sx={{
                          fontSize: {
                            lg: "24px",
                          },
                        }}
                      >
                        <p
                          style={{
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "29.26px",
                            textAlign: "justify",
                            color: "#414142",
                            height: "58px",
                          }}
                        >
                          {t("application.tourist")}
                        </p>
                      </Box>
                      <Box
                        mt={2}
                        sx={{
                          fontSize: {
                            lg: "16px",
                          },
                        }}
                      >
                        <p
                          style={{
                            fontWeight: "500",

                            lineHeight: "19.5px",
                            textAlign: "justify",
                            color: "#414042",
                          }}
                        >
                          {t("application.tourist-ct")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={environment.src}
                        alt="bg"
                        style={{
                          width: "100%",
                          height: "auto",
                          marginBottom: "10px",
                          borderRadius: "20px",
                        }}
                      />
                      <Box
                        mt={2}
                        sx={{
                          fontSize: {
                            lg: "24px",
                          },
                        }}
                      >
                        <p
                          style={{
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "29.26px",
                            color: "#414142",
                            height: "58px",
                          }}
                        >
                          {t("application.environment")}
                        </p>
                      </Box>
                      <Box
                        mt={2}
                        sx={{
                          fontSize: {
                            lg: "16px",
                          },
                        }}
                      >
                        <p
                          style={{
                            fontWeight: "500",

                            lineHeight: "19.5px",
                            textAlign: "justify",
                            color: "#414042",
                          }}
                        >
                          {t("application.environment-ct")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={infor.src}
                        alt="bg"
                        style={{
                          width: "100%",
                          height: "auto",
                          marginBottom: "10px",
                          borderRadius: "20px",
                        }}
                      />
                      <Box
                        mt={2}
                        sx={{
                          fontSize: {
                            lg: "24px",
                          },
                        }}
                      >
                        <p
                          style={{
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "24px",
                            textAlign: "justify",
                            color: "#414142",
                            height: "58px",
                          }}
                        >
                          {t("application.infor-safe")}
                        </p>
                      </Box>
                      <Box
                        mt={2}
                        sx={{
                          fontSize: {
                            lg: "16px",
                          },
                        }}
                      >
                        <p
                          style={{
                            fontWeight: "500",
                            lineHeight: "19.5px",
                            textAlign: "justify",
                            color: "#414042",
                          }}
                        >
                          {t("application.infor-safe-ct")}
                        </p>
                      </Box>
                    </Box>
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
