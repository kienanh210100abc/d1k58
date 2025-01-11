"use client";

import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Box,
  Container,
  Grid
} from "@mui/material";
import { Stack } from "@mui/system";
import { useTranslation } from "react-i18next";
import { z } from "zod";

const defaultValues = {
  name: "",
  phoneNum: "",
  email: "",
  message: "",
  captvalue: "",
};
const schema = z.object({
  name: z.string().min(4, "min_length").max(100, "max_length"),
  phoneNum: z.string().regex(/(84|0)(3|5|7|8|9)+([0-9]{8})\b/, "phone"),
  email: z.string().email(),
  message: z.string().min(5, "min_length").max(500, "max_length"),
  captvalue: z.string().min(1, "min_length"),
});

export const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <section id="contact" style={{ padding: "0", margin: "0" }}>
        <Stack
          sx={{
            background: "linear-gradient(180deg, #E6F7EE 90%, #E6F7EE 100%)",
           
          }}
          borderRadius={5}
          pb="30px"
          alignItems="left"
        >
          <Container>
            <Grid mt="30px">
              <Box
                display="flex"
                flexWrap="wrap"
                gap="50px"
                sx={{
                  flexDirection: {
                    xs: "column-reverse",
                    md: "row",
                  },
                }}
              >
                <Grid
                  container
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  
                >
                    <Box
                      flex="1"
                      bgcolor="transparent"
                    >
                      <Box
                        fontWeight="600"
                        color="#414042"
                        sx={{
                          fontSize: "30px",
                          width: {
                            xs: "100%",
                            sm: "100%",
                            lg: "100%",
                          },
                          lineHeight: "39.01px",
                          marginBottom: "10px",
                        }}
                      >
                        {t("contact.contact_h1")}
                        <br/>
                        {t("contact.contact_h2")}
                        <br/>
                        {t("contact.contact_h3")}
                        <FontAwesomeIcon icon={faHeart} />

                        
                      </Box>
                      

                     
                    </Box>
                 
                </Grid>
              </Box>
            </Grid>
          </Container>
        </Stack>
      </section>
    </>
  );
};
