// "use client";

// import { Container, Grid, Typography } from "@mui/material";
// import { useTranslation } from "react-i18next";

// import iconART from "@/assets/iconART.svg";
// import iconQR from "@/assets/iconQR.svg";
// import iconTemplate from "@/assets/iconTemplate.svg";

// import { Box } from "@mui/system";

// export const Feature = () => {
//   const { t } = useTranslation();
//   return (
//     <>
//       <section id="feature" className="home__features">
//         <Container>
//           <Grid mt="80px">
//             <h1
//               style={{
//                 textAlign: "center",
//                 fontWeight: "600",
//                 fontSize: "32px",
//                 color: "black",
//               }}
//             >
//               {t("feature.title")}
//             </h1>
//             <Grid container item xs={12} sm={12} md={12}>
//               <Grid item xs={12} sm={12} md={4}>
//                 <Box
//                   fontWeight="500"
//                   color="black"
//                   width="95%"
//                   sx={{
//                     fontSize: {
//                       xs: "16px",
//                       sm: "16px",
//                       lg: "16px",
//                     },
//                   }}
//                 >
//                   <Box display="flex" alignItems="flex-start">
//                     <img
//                       src={iconQR.src}
//                       alt="bg"
//                       width="80px"
//                       height="80px"
//                       style={{ marginRight: "8px", marginTop: "4px" }}
//                     />
//                   </Box>
//                   <br />
//                   <Box>
//                     <Typography
//                       fontWeight="600"
//                       lineHeight="29.26px"
//                       sx={{
//                         fontSize: {
//                           xs: "22px",
//                           lg: "24px",
//                         },
//                       }}
//                     >
//                       {t("feature.title1")}{" "}
//                     </Typography>
//                     <br />
//                     <Typography
//                       fontWeight="400"
//                       fontSize="16px"
//                       style={{ textAlign: "justify" }}
//                     >
//                       {t("feature.content1")}{" "}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Grid>
//               <Grid item xs={12} sm={12} md={4}>
//                 <Box
//                   fontWeight="500"
//                   color="black"
//                   width="95%"
//                   sx={{
//                     fontSize: {
//                       xs: "16px",
//                       sm: "16px",
//                       lg: "16px",
//                     },
//                   }}
//                 >
//                   <Box display="flex" alignItems="flex-start">
//                     <img
//                       src={iconTemplate.src}
//                       alt="bg"
//                       width="80px"
//                       height="80px"
//                       style={{ marginRight: "8px", marginTop: "4px" }}
//                     />
//                   </Box>
//                   <br />
//                   <Box>
//                     <Typography
//                       fontWeight="600"
//                       lineHeight="29.26px"
//                       sx={{
//                         fontSize: {
//                           xs: "22px",
//                           lg: "24px",
//                         },
//                       }}
//                     >
//                       {t("feature.title2")}{" "}
//                     </Typography>
//                     <br />
//                     <Typography
//                       fontWeight="400"
//                       fontSize="16px"
//                       style={{ textAlign: "justify" }}
//                     >
//                       {t("feature.content2")}{" "}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Grid>
//               <Grid item xs={12} sm={12} md={4}>
//                 <Box
//                   fontWeight="500"
//                   color="black"
//                   width="95%"
//                   sx={{
//                     fontSize: {
//                       xs: "16px",
//                       sm: "16px",
//                       lg: "16px",
//                     },
//                   }}
//                 >
//                   <Box display="flex" alignItems="flex-start">
//                     <img
//                       src={iconART.src}
//                       alt="bg"
//                       width="80px"
//                       height="80px"
//                       style={{ marginRight: "8px", marginTop: "4px" }}
//                     />
//                   </Box>
//                   <br />
//                   <Box>
//                     <Typography
//                       fontWeight="600"
//                       lineHeight="29.26px"
//                       sx={{
//                         fontSize: {
//                           xs: "22px",
//                           lg: "24px",
//                         },
//                       }}
//                     >
//                       {t("feature.title3")}
//                     </Typography>
//                     <br />
//                     <Typography
//                       fontWeight="400"
//                       fontSize="16px"
//                       style={{ textAlign: "justify" }}
//                     >
//                       {t("feature.content3")}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Container>
//       </section>
//     </>
//   );
// };
