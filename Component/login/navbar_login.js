import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/system";
import localFont from "@next/font/local";
import styles from "/public/Style/Navbar.module.css";
import { Typography } from "@mui/material";
import Image from "next/image";


const myFont = localFont({ src: "../public/fonts/Gamer.ttf" });

const navbar = () => {
  return (
    <>
      <div >
        <Stack overflow={"hidden"} justifyContent="center" alignItems="center" sx={{ pt: "20%" }}>

        <Box clssname= "colud3"sx={{ ml:35,position: "absolute", zIndex: "tooltip"  ,mt:22,mr:90 }}>
                <img
                  src="/icon/Login/could3.svg"
                  sx={{
                    
                  }}
                />
              </Box>
          <Box clssname= "colud1" sx={{ ml:35,position: "absolute", zIndex: "tooltip"  ,height:230,mr:44 }}>
                <img
                  src="/icon/Login/could1.svg"
                  sx={{
                    
                  }}
                />
              </Box>
              
          
              <Box clssname= "colud2" sx={{ ml:43,position: "absolute", zIndex: "tooltip"  ,height:50, }}>
                <img
                  src="/icon/Login/could2.svg"
                  sx={{
                    
                  }}
                />
              </Box>

              <Box clssname= "colud4" sx={{ ml:35,position: "absolute", zIndex: "tooltip"  ,mt:62,mr:1  }}>
                <img
                  src="/icon/Login/could4.svg"
                  sx={{
                    
                  }}
                />
              </Box>


          <Box sx={{ width: 235, height: 190 }}>
          
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              
            >
              
              <Box clssname= "happy" sx={{ position: "relative", zIndex: "modal"  ,mt:4, ml:1 }}>
              <img
                  src="/icon/Login/font_happywork.svg"
                  sx={{
                    
                  }}/>
              </Box>
            </Stack>
          </Box>
          
              

              

        </Stack>
        



      </div>
    </>
  );
};

// #endregion

export default navbar;
