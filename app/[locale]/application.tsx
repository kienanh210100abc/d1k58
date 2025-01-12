/* eslint-disable @next/next/no-img-element */
"use client";
import { Container, Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useTranslation } from "react-i18next";
import haanh from "@/assets/haanh.svg";
import anhvau from "@/assets/anhvau.svg";
import minhanh from "@/assets/minhanh.svg";
import vananh from "@/assets/vananh.svg";
import baobet from "@/assets/baobet.svg";
import congbe from "@/assets/congbe.svg";
import ducphe from "@/assets/ducphe.svg";
import phanduong from "@/assets/phanduong.svg";
import phamduong from "@/assets/phamduong.svg";
import fun from "@/assets/fun.svg";
import duccop from "@/assets/duccop.svg";
import dongha from "@/assets/dongha.svg";
import nganha from "@/assets/nganha.svg";
import hangcookie from "@/assets/hangcookie.svg";
import kienanh from "@/assets/kienanh.svg";
import juha from "@/assets/juha.svg";
import kb from "@/assets/kb.svg";
import le from "@/assets/le.svg";
import luonglon from "@/assets/luonglon.svg";
import luongman from "@/assets/luongman.svg";
import linhbim from "@/assets/linhbim.svg";
import hailinh from "@/assets/hailinh.svg";
import linhvit from "@/assets/linhvit.svg";
import hbn from "@/assets/hbn.svg";
import cbn from "@/assets/chungoc.svg";
import nhung from "@/assets/nhung.svg";
import phuonglon from "@/assets/phuonglon.svg";
import phuongdolce from "@/assets/phuongdolce.svg";
import thaokhai from "@/assets/thaokhai.svg";
import thaorua from "@/assets/thaorua.svg";
import trinh from "@/assets/trinh.svg";
import van from "@/assets/van.svg";
import viet from "@/assets/viet.svg";
import vu from "@/assets/vu.svg";

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
                {t("application.application")}
              </h1>

              <br />

              <Box display="flex" flexWrap="wrap" gap="50px">
                <Grid spacing={5} container item xs={12} sm={12} md={12}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={haanh.src}
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
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={vananh.src}
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
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={minhanh.src}
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
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={anhvau.src}
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
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={baobet.src}
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
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={congbe.src}
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
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={phanduong.src}
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
                          {t("application.phanduong")}
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
                          {t("application.phanduong2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={phamduong.src}
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
                          {t("application.phamduong")}
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
                          {t("application.phamduong2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={fun.src}
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
                          {t("application.fun")}
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
                          {t("application.fun2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={ducphe.src}
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
                          {t("application.ducphe")}
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
                          {t("application.ducphe2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={duccop.src}
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
                          {t("application.duccop")}
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
                          {t("application.duccop2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={dongha.src}
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
                          {t("application.dongha")}
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
                          {t("application.dongha2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={nganha.src}
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
                          {t("application.nganha")}
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
                          {t("application.nganha2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={juha.src}
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
                          {t("application.juha")}
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
                          {t("application.juha2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={hangcookie.src}
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
                          {t("application.hangcookie")}
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
                          {t("application.hangcookie2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={kienanh.src}
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
                          {t("application.ka")}
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
                          {t("application.ka2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={kb.src}
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
                          {t("application.kb")}
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
                          {t("application.kb2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={le.src}
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
                          {t("application.le")}
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
                          {t("application.le2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={linhvit.src}
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
                          {t("application.linhvit")}
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
                          {t("application.linhvit2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={linhbim.src}
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
                          {t("application.linhbim")}
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
                          {t("application.linhbim2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={hailinh.src}
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
                          {t("application.hailinh")}
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
                          {t("application.hailinh2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={luongman.src}
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
                          {t("application.luongman")}
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
                          {t("application.luongman2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={luonglon.src}
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
                          {t("application.luonglon")}
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
                          {t("application.luonglon2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={hbn.src}
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
                          {t("application.hbn")}
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
                          {t("application.hbn2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>{" "}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={cbn.src}
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
                          {t("application.cbn")}
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
                          {t("application.cbn2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>{" "}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={nhung.src}
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
                            lineHeight: "25px",
                            textAlign: "justify",
                            color: "#414142",
                            height: "58px",
                          }}
                        >
                          {t("application.nhung")}
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
                          {t("application.nhung2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>{" "}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={phuonglon.src}
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
                          {t("application.phuonglon")}
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
                          {t("application.phuonglon2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>{" "}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={phuongdolce.src}
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
                          {t("application.dolce")}
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
                          {t("application.dolce2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>{" "}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={thaokhai.src}
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
                          {t("application.thaokhai")}
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
                          {t("application.thaokhai2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>{" "}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={thaorua.src}
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
                          {t("application.thaorua")}
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
                          {t("application.thaorua2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>{" "}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={trinh.src}
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
                          {t("application.trinh")}
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
                          {t("application.trinh2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>{" "}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={van.src}
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
                          {t("application.van")}
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
                          {t("application.van2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={viet.src}
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
                          {t("application.viet")}
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
                          {t("application.viet2")}
                        </p>
                      </Box>
                    </Box>
                  </Grid> <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    sx={{
                      "@media (max-width: 995px)": {
                        flexBasis: "100%",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    <Box flex="1" minWidth="300px" bgcolor="transparent">
                      <img
                        src={vu.src}
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
                          {t("application.vu")}
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
                          {t("application.vu2")}
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
