import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { dFlex } from "../Theme/CommonStyles";
import { Typography } from "@mui/material";
import RedeemIcon from "@mui/icons-material/Redeem";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
export const Navbar = () => {
  const navigate = useNavigate(AuthContext);
  let{isAuth} = useContext(AuthContext);
  const handleHome = ()=>{
    navigate("/");
  }
  const handleNav = (dt)=>{
    if(dt=="log"){
      navigate("/login");
    }else{
      navigate("/cart");
    }
  }
  return (
    <Box sx={{position:"fixed",top:"0",width:"100%",zIndex:"1300"}}>
      <Container maxWidth="xl" sx={{ ...dFlex }}>
        {/*-----------------------------------Left box------------------ */}
        <Box
          maxWidth="550px"
          sx={{ ...dFlex, pt: "20px" }}
        >
          <MenuIcon />
          <ImageList>
            <ImageListItem
              
              sx={{ pl: "55px",maxWidth:"500px",cursor:"pointer" }}
            >
              <img
                src={`https://logodownload.org/wp-content/uploads/2014/05/zara-logo-1.png`}
                alt={`logo`}
                loading="lazy"
                onClick={handleHome}
              />
            </ImageListItem>
          </ImageList>
          {/* <img src="https://logodownload.org/wp-content/uploads/2014/05/zara-logo-1.png" alt="zara logo" sx={{width:"100px",heigth:"40px"}}/> */}
        </Box>
        {/*----------------------------------------------Right box------------------------------------- */}
        <Box 
          maxWidth="550px"
          sx={{...dFlex,
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
             <Typography sx={{fontSize:"13px",color:"black",cursor:"pointer"}} onClick={()=>handleNav("log")}>{isAuth?"LOG OUT":"LOG IN"}</Typography>
            </Box>
            <Box sx={{width:"60px"}}>
            <Typography sx={{fontSize:"13px",color:"black"}}>HELP</Typography>
            </Box>
            <Box sx={{width:"60px",cursor:"pointer"}}>
            <Typography>
               <RedeemIcon  onClick={()=>handleNav("cart")}/>
            </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
