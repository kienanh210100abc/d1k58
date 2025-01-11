/* eslint-disable @next/next/no-img-element */
"use client";

import introIMG from "@/assets/introIMG.svg";
import { Container, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { useTranslation } from "react-i18next";

export const SummaryIntro = () => {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const img = new Image(); // Tạo một đối tượng Image mới
    img.src = introIMG.src; // Đặt src cho ảnh
    img.onload = () => setLoaded(true); // Cập nhật trạng thái loaded khi ảnh tải xong
  }, []);
  return (
    <>
      <Stack component="section" id="summaryIntro" sx={{ mt: "90px" }}>
        <Container>
          <Grid
            container
            sx={{
              flexDirection: {
                xs: "column-reverse",
                md: "row",
              },
              justifyContent: "space-between",
            }}
          >
            <Grid item xs={12} sm={12} md={5}>
              <Stack
                alignItems="start"
                height="100%"
                width="100%"
                justifyContent="center"
              >
                <Typography
                  fontWeight="600"
                  color="#00A64F"
                  width="100%"
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
                  align="justify"
                  sx={{
                    fontSize: "17px",
                    alignItems: "Justified",
                  }}
                >
                  {t("summaryIntro.text1")}
                  <span style={{ color: "#00A64F" }}>
                    {t("summaryIntro.text2")} 
                  </span>
                </Typography>
                <Spinner animation="border" variant="success" />

                <br />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
      {!loaded && (
        <Typography sx={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          fontSize:"50px",
          fontWeight:"600",
          height:"100%"
}}>
          Đợi tí cho ảnh load =))
        </Typography>
)}
      <img
        src={introIMG.src}
        alt="bg"
        width="100%"
        style={{ display: loaded ? 'block' : 'none' }} // Ẩn ảnh khi chưa tải xong
      />
    </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
};
