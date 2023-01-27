import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/system";
import localFont from "@next/font/local";
import { colors, Typography } from "@mui/material";
import Image from "next/image";



const Background = () => {
  return (<div>
    


      <Stack
        direction="columns"
        justifyContent="center"
        alignItems="center"
        marginTop={9}
        
      >
        <Box sx={{ mb:22,mr:1 ,backgroundColor:"blue",position: "absolute", zIndex: "tooltip"  }}>
            <img src="../Login/Could1.svg" />
        </Box>
        <Box clssname= "happy" sx={{ position: "relative", zIndex: "modal"  ,mt:4, ml:7 }}>
              <img
                  src="../Login/font_happywork.svg"
                  sx={{
                    
                  }}/>
              </Box>
        <Box sx={{mt:4,ml:46,position: "absolute", zIndex: "tooltip"  }}>
          <img src="../Login/Could2.svg" />

        </Box>
        <Box sx={{position: "absolute", zIndex: "tooltip",mt:28,mr:60  }}>
          <img src="../Login/Could3.svg"/>


        </Box>
        <Box sx={{position: "absolute", zIndex: "tooltip",mt:70,ml:40  }}>
        <img src="../Login/Could4.svg"/>


        </Box>
        <Box sx={{position: "absolute", zIndex: "tooltip",mt:140,ml:0}}>
        <img src="../Login/bottom.svg"/>

        </Box>


      </Stack>


    </div>
  );
};

// #endregion

export default Background;
