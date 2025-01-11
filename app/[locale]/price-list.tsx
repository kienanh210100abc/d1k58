// "use client";

// import { Button, Container, Grid, Typography } from "@mui/material";
// import iconPrice from "@/assets/IconPrice.svg";
// import { useTranslation } from "react-i18next";
// import { Box } from "@mui/system";

// const typographyStyle = {
//   fontWeight: "500",
//   color: "black",
//   width: "100%",
//   px: "10%",
//   border: "0.2px solid #f1f1f1",
//   borderRadius: "10px",
//   padding: "16px",
//   transition: "background-color 0.3s ease, color 0.3s ease",

//   fontSize: {
//     xs: "16px",
//     sm: "16px",
//     lg: "18px",
//   },
// };
// const typographyStyle2 = {
//   padding: "16px",
//   backgroundColor: "#00A64F",
//   color: "white",
//   "& img": {
//     filter: "brightness(0) invert(1)",
//   },
//   "& *": {
//     color: "white",
//   },
//   fontSize: {
//     xs: "16px",
//     sm: "16px",
//     lg: "18px",
//   },
// };

// export const PriceList = () => {
//   const { t } = useTranslation();

//   const handleScrollToSection = (sectionId: string, key?: number) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       const topOffset = section.offsetTop - 110;
//       window.scrollTo({ top: topOffset, behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <section id="price">
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
//               {t("price.price_h1")}
//             </h1>
//             <br />
//             <Box
//               sx={{
//                 overflowX: "auto",
//                 display: "flex",
//                 flexWrap: "nowrap",
//                 "&::-webkit-scrollbar": {
//                   height: "6px",
//                 },
//               }}
//             >
//               <Grid
//                 container
//                 spacing={2}
//                 sx={{
//                   flexWrap: "nowrap",
//                   "& > .MuiGrid-item": {
//                     flexShrink: 0,
//                     // width: { xs: "85%", sm: "45%", md: "25%" },
//                     // maxWidth: { xs: "85%", sm: "45%", md: "25%" },
//                     "@media (max-width: 1004px)": {
//                       flexBasis: "45vh", // Chiếm toàn bộ chiều rộng
//                       maxWidth: "45vh",
//                     },
//                     // "@media (max-width: 421px)": {
//                     //   flexBasis: "60%",
//                     //   maxWidth: "60%",
//                     // },
//                   },
//                 }}
//               >
//                 <Grid item xs={12} sm={12} md={3}>
//                   <Box
//                     fontWeight="500"
//                     color="black"
//                     width="10%"
//                     px="10%"
//                     style={{
//                       border: "1px solid #C3C3C3",
//                       borderRadius: "30px",
//                     }}
//                     sx={typographyStyle}
//                   >
//                     <Box
//                       display="flex"
//                       justifyContent="center"
//                       alignItems="center"
//                     >
//                       <img
//                         src={iconPrice.src}
//                         alt="bg"
//                         width="80px"
//                         height="80px"
//                         style={{ marginRight: "8px", marginTop: "4px" }}
//                       />
//                     </Box>
//                     <br />
//                     <Box>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="32px"
//                         textAlign="center"
//                         color="#00A64F"
//                       >
//                         {t("price.25")}
//                       </Typography>
//                       <Typography
//                         fontWeight="500"
//                         fontSize="18px"
//                         lineHeight="29.26px"
//                         textAlign="center"
//                       >
//                         {t("price.c_starter")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.time")}{" "}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.1m")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.time2")}{" "}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.30d")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.sumScan")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.ulm")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.sumQR")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.500QR")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.buy")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.50d")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.storage")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.2gb")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.buy2")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                         // height={'43px'}
//                       >
//                         {t("price.price_b1")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.max_user")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.10")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.sale")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                         height={"43px"}
//                       >
//                         {t("price.bonus1")}
//                       </Typography>
//                       <br />
//                       <Box display="flex" justifyContent="center" mt={2}>
//                         <Button
//                           onClick={() =>
//                             window.open(
//                               `${process.env.NEXT_PUBLIC_ROUTER}/register?package=package_id_4&trialMode=trialMode`,
//                               "_blank"
//                             )
//                           }
//                           sx={{
//                             borderRadius: "10px",
//                             height: "52px",
//                             color: "black",
//                             padding: "5px 14px",
//                             width: "100%",
//                             marginLeft: "10px",
//                             ":hover": { background: "#00A64F", color: "white" },

//                             border: " 1px solid #00A64F",
//                           }}
//                         >
//                           <Typography sx={{ fontSize: "16px" }}>
//                             {t("price.btnTry")}
//                           </Typography>
//                         </Button>
//                       </Box>
//                       <Box display="flex" justifyContent="center" mt={2}>
//                         <Button
//                           onClick={() => handleScrollToSection("contact")}
//                           sx={{
//                             borderRadius: "10px",
//                             height: "52px",
//                             color: "white",
//                             padding: "5px 14px",
//                             width: "100%",
//                             background: "#00A64F",
//                             marginLeft: "10px",
//                             ":hover": { background: "#00A64F", color: "white" },
//                           }}
//                         >
//                           <Typography sx={{ fontSize: "16px" }}>
//                             {t("price.btnBuy")}
//                           </Typography>
//                         </Button>
//                       </Box>
//                     </Box>
//                   </Box>
//                 </Grid>
//                 <Grid item xs={12} sm={12} md={3}>
//                   <Box
//                     fontWeight="500"
//                     color="black"
//                     width="100%"
//                     px="10%"
//                     style={{
//                       border: "1px solid #C3C3C3",
//                       borderRadius: "30px",
//                     }}
//                     sx={typographyStyle}
//                   >
//                     <Box
//                       display="flex"
//                       justifyContent="center"
//                       alignItems="center"
//                     >
//                       <img
//                         src={iconPrice.src}
//                         alt="bg"
//                         width="80px"
//                         height="80px"
//                         style={{ marginRight: "8px", marginTop: "4px" }}
//                       />
//                     </Box>
//                     <br />
//                     <Box>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="32px"
//                         textAlign="center"
//                         color="#00A64F"
//                       >
//                         {t("price.300")}
//                       </Typography>
//                       <Typography
//                         fontWeight="500"
//                         fontSize="18px"
//                         lineHeight="29.26px"
//                         textAlign="center"
//                       >
//                         {t("price.c_basic")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.time")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.1y")}{" "}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.time2")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.30d")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.sumScan")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.ulm")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.sumQR")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.6000QR")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.buy")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.50d")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.storage")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.5gb")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.buy2")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                         // height={'43px'}
//                       >
//                         {t("price.price_b1")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.max_user")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.100")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.sale")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                         height={"43px"}
//                       >
//                         {t("price.bonus2")}
//                       </Typography>
//                       <br />
//                       <Box display="flex" justifyContent="center" mt={2}>
//                         <Button
//                           onClick={() =>
//                             window.open(
//                               `${process.env.NEXT_PUBLIC_ROUTER}/register?package=package_id_1&trialMode=trialMode`,
//                               "_blank"
//                             )
//                           }
//                           sx={{
//                             borderRadius: "10px",
//                             height: "52px",
//                             color: "black",
//                             padding: "5px 14px",
//                             width: "100%",
//                             marginLeft: "10px",
//                             ":hover": { background: "#00A64F", color: "white" },

//                             border: " 1px solid #00A64F",
//                           }}
//                         >
//                           <Typography sx={{ fontSize: "16px" }}>
//                             {t("price.btnTry")}
//                           </Typography>
//                         </Button>
//                       </Box>
//                       <Box display="flex" justifyContent="center" mt={2}>
//                         <Button
//                           onClick={() => handleScrollToSection("contact")}
//                           sx={{
//                             borderRadius: "10px",
//                             color: "white",
//                             height: "52px",

//                             fontSize: "16px",
//                             padding: "5px 14px",
//                             width: "100%",
//                             background: "#00A64F",
//                             marginLeft: "10px",
//                             ":hover": { background: "#00A64F", color: "white" },
//                           }}
//                         >
//                           <Typography sx={{ fontSize: "16px" }}>
//                             {t("price.btnBuy")}
//                           </Typography>
//                         </Button>
//                       </Box>
//                     </Box>
//                   </Box>
//                 </Grid>
//                 <Grid item xs={12} sm={12} md={3}>
//                   <Box
//                     fontWeight="500"
//                     color="black"
//                     width="100%"
//                     px="10%"
//                     style={{
//                       border: "0.2px solid #f1f1f1",
//                       borderRadius: "30px ",
//                     }}
//                     sx={typographyStyle2}
//                   >
//                     <Box
//                       display="flex"
//                       justifyContent="center"
//                       alignItems="center"
//                     >
//                       <img
//                         src={iconPrice.src}
//                         alt="bg"
//                         width="80px"
//                         height="80px"
//                         style={{ marginRight: "8px", marginTop: "4px" }}
//                       />
//                     </Box>
//                     <br />
//                     <Box>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="32px"
//                         textAlign="center"
//                         color="#00A64F"
//                       >
//                         {t("price.900")}
//                       </Typography>
//                       <Typography
//                         fontWeight="500"
//                         fontSize="18px"
//                         lineHeight="29.26px"
//                         textAlign="center"
//                       >
//                         {t("price.c_advanced")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.time")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.1y")}{" "}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.time2")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.30d")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.sumScan")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.ulm")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.sumQR")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.20000QR")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.buy")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.50d")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.storage")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.20gb")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.buy2")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                         // height={'43px'}
//                       >
//                         {t("price.price_b1")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.max_user")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.500")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.sale")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                         height={"43px"}
//                       >
//                         {t("price.bonus3")}
//                       </Typography>
//                       <br />
//                       <Box display="flex" justifyContent="center" mt={2}>
//                         <Button
//                           onClick={() =>
//                             window.open(
//                               `${process.env.NEXT_PUBLIC_ROUTER}/register?package=package_id_2&trialMode=trialMode`,
//                               "_blank"
//                             )
//                           }
//                           sx={{
//                             borderRadius: "10px",
//                             fontSize: "16px",
//                             color: "white",
//                             padding: "5px 14px",
//                             height: "52px",

//                             width: "100%",
//                             background: "#00A64F",
//                             marginLeft: "10px",
//                             ":hover": { background: "#00A64F", color: "white" },
//                             border: " 1px solid white",
//                           }}
//                         >
//                           <Typography sx={{ fontSize: "16px" }}>
//                             {t("price.btnTry")}
//                           </Typography>
//                         </Button>
//                       </Box>
//                       <Box display="flex" justifyContent="center" mt={2}>
//                         <Button
//                           onClick={() => handleScrollToSection("contact")}
//                           sx={{
//                             borderRadius: "10px",
//                             fontSize: "16px",
//                             color: "white",
//                             padding: "5px 14px",
//                             height: "52px",

//                             width: "100%",
//                             background: "#00A64F",
//                             marginLeft: "10px",
//                             ":hover": { background: "#00A64F", color: "white" },
//                             border: " 1px solid white",
//                           }}
//                         >
//                           <Typography sx={{ fontSize: "16px" }}>
//                             {t("price.btnBuy")}
//                           </Typography>
//                         </Button>
//                       </Box>
//                     </Box>
//                   </Box>
//                 </Grid>
//                 <Grid item xs={12} sm={12} md={3}>
//                   <Box
//                     fontWeight="500"
//                     color="black"
//                     width="100%"
//                     px="10%"
//                     style={{
//                       border: "1px solid #C3C3C3",
//                       borderRadius: "30px",
//                     }}
//                     sx={typographyStyle}
//                   >
//                     <Box
//                       display="flex"
//                       justifyContent="center"
//                       alignItems="center"
//                     >
//                       <img
//                         src={iconPrice.src}
//                         alt="bg"
//                         width="80px"
//                         height="80px"
//                         style={{ marginRight: "8px", marginTop: "4px" }}
//                       />
//                     </Box>
//                     <br />
//                     <Box>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="32px"
//                         textAlign="center"
//                         color="#00A64F"
//                       >
//                         {t("menu.contact")}
//                       </Typography>
//                       <Typography
//                         fontWeight="500"
//                         fontSize="18px"
//                         lineHeight="29.26px"
//                         textAlign="center"
//                       >
//                         {t("price.c_pro")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.time")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.ulm")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.time2")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.30d")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.sumScan")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.ulm")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.sumQR")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.ulm")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.buy")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("menu.contact")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.storage")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.ulm")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.buy2")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("menu.contact")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.max_user")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                       >
//                         {t("price.ulm")}
//                       </Typography>
//                       <br />
//                       <Typography
//                         fontWeight="500"
//                         fontSize="12px"
//                         color="#8F8F8F"
//                         textAlign="center"
//                       >
//                         {t("price.sale")}
//                       </Typography>
//                       <Typography
//                         fontWeight="600"
//                         fontSize="16px"
//                         textAlign="center"
//                         height={"43px"}
//                       >
//                         {t("price.bonus3")}
//                       </Typography>
//                       <br />
//                       <Box display="flex" justifyContent="center" mt={2}>
//                         <Button
//                           onClick={() => handleScrollToSection("contact")}
//                           sx={{
//                             borderRadius: "10px",
//                             height: "52px",
//                             color: "black",
//                             padding: "5px 14px",
//                             width: "100%",
//                             marginLeft: "10px",
//                             ":hover": { background: "#00A64F", color: "white" },
//                             border: " 1px solid #00A64F",
//                           }}
//                         >
//                           <Typography sx={{ fontSize: "16px" }}>
//                             {t("menu.contact")}
//                           </Typography>
//                         </Button>
//                       </Box>
//                       <Box display="flex" justifyContent="center" mt={2}>
//                         <Button
//                           onClick={() => handleScrollToSection("contact")}
//                           sx={{
//                             borderRadius: "10px",
//                             height: "52px",

//                             color: "white",
//                             padding: "5px 14px",
//                             fontSize: "16px",
//                             width: "100%",
//                             background: "#00A64F",
//                             marginLeft: "10px",
//                             ":hover": { background: "#00A64F", color: "white" },
//                           }}
//                         >
//                           <Typography sx={{ fontSize: "16px" }}>
//                             {t("price.btnBuy")}
//                           </Typography>
//                         </Button>
//                       </Box>
//                     </Box>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Grid>
//         </Container>
//       </section>
//     </>
//   );
// };
