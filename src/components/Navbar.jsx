import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { dFlex } from "../Theme/CommonStyles";
import { Typography } from "@mui/material";
import RedeemIcon from "@mui/icons-material/Redeem";
export const Navbar = () => {
  return (
    <Box sx={{ border: "1px solid red",position:"fixed",top:"0",width:"100%",zIndex:"1300"}}>
      <Container maxWidth="xl" sx={{ ...dFlex }}>
        {/*-----------------------------------Left box------------------ */}
        <Box
          maxWidth="550px"
          sx={{ ...dFlex, border: "1px solid blue", pt: "20px" }}
        >
          <MenuIcon />
          <ImageList>
            <ImageListItem
              
              sx={{ pl: "55px", border: "1px solid red",maxWidth:"500px" }}
            >
              <img
                src={`https://logodownload.org/wp-content/uploads/2014/05/zara-logo-1.png`}
                alt={`logo`}
                loading="lazy"
              />
            </ImageListItem>
          </ImageList>
          {/* <img src="https://logodownload.org/wp-content/uploads/2014/05/zara-logo-1.png" alt="zara logo" sx={{width:"100px",heigth:"40px"}}/> */}
        </Box>
        {/*----------------------------------------------Right box------------------------------------- */}
        <Box 
          maxWidth="550px"
          sx={{...dFlex,
            border: "1px solid red",
            pt: "20px",
           width:"550px"
          }}
          >
          {/* search div */}
          <Box sx={{borderBottom:"3px solid black",width:"100px"}}>
            <Typography sx={{fontWeight: 'bold',fontSize:"13px"}}>SEARCH</Typography>
          </Box>
          {/* LOGIN HELP CART  DIV*/}
          <Box sx={{...dFlex,alignItems:"center"}}>
            <Box sx={{width:"60px"}}>
             <Typography sx={{fontSize:"13px",color:"black"}}>LOG IN</Typography>
            </Box>
            <Box sx={{width:"60px"}}>
            <Typography sx={{fontSize:"13px",color:"black"}}>HELP</Typography>
            </Box>
            <Box sx={{width:"60px"}}>
            <Typography>
               <RedeemIcon/>
            </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
