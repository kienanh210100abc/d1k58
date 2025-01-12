/* eslint-disable @next/next/no-img-element */
"use client";

import introIMG from "@/assets/introIMG.svg";
import image2 from "@/assets/image2.svg";
import image3 from "@/assets/image3.svg";
import image4 from "@/assets/image4.svg";
import image5 from "@/assets/image5.svg";
import imageIntro2 from "@/assets/ImageIntro2.svg";

import { Container, Grid, Typography, Button, Box } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useTranslation } from "react-i18next";
import MoonLoader from "react-spinners/MoonLoader";

export const SummaryIntro = () => {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);  
  const images = [introIMG.src, imageIntro2.src, image2.src, image3.src,image4.src,image5.src];  

  useEffect(() => {
    const loadImage = (src:any) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    Promise.all(images.map(loadImage))
      .then(() => {
        setLoaded(true);
      })
      .catch((error) => {
        console.error('Failed to load images', error);
      });
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length); // Thay đổi ảnh theo vòng lặp
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length); // Thay đổi ảnh theo vòng lặp
  };

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
  {!loaded ? (
    <Typography
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "50px",
        fontWeight: "600",
        height: "100%",
      }}
    >
      <MoonLoader style={{ color: "#393939", marginBottom:"100px", marginTop:"50px"}} />
    </Typography>
  ) : (
    <>
      <img
        src={images[currentImage]}
        alt="intro image"
        width="100%"
        style={{ display: "block" }}
      />
      <Grid style={{display:"flex", justifyContent:"flex-end"}}>
        <Button onClick={prevImage}>Trước</Button>
        <Button onClick={nextImage}>Sau</Button>
      </Grid>
      <Box display="flex" justifyContent="center" mt={2}>
        {images.map((_, index) => (
          <Box
            key={index}
            width={8}
            height={8}
            bgcolor={currentImage === index ? "#00A64F" : "#bbb"}
            borderRadius="50%"
            mx={0.5}
            component="span"
          />
        ))}
      </Box>
    </>
  )}
</Grid>

          </Grid>
        </Container>
      </Stack>
    </>
  );
};
