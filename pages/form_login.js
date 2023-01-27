import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Stack, Input } from "@mui/system";
import localFont from "@next/font/local";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Image from "next/image";


const myFont = localFont({ src: "../public/fonts/Gamer.ttf" });

const theme = createTheme({
    palette: {
      primary: {
        main: "#ffff",
      },
      secondary: {
        main: "#ffca28",
      },
      three: {
        // Purple and green play nicely together.
        main: "#0968FF",
      },
      four: {
        // This is green.A700 as hex.
        main: "#0288d1",
      },
    },
  });

const form_login = () => {
    return <div>
        <div position="fixed">
        <Stack justifyContent="center" alignItems="center" sx={{ mt: 4 ,zIndex:'9999' }}>
          <ThemeProvider theme={theme}>
            <Box sx={{ height: 4 }}>
              <Typography color={"primary"} sx={{ fontSize: 11 }}>
                E-mail
              </Typography>
            </Box>
            <Box sx={{ height: 60 }}>
              <TextField
                sx={{ input: { color: "white" } }}
                id="standard-basic"
                label=" "
                variant="standard"
                
              />
            </Box>
            <Box sx={{ height: 2 }}>
              <Typography color={"primary"} sx={{ fontSize: 11 }}>
                Password
              </Typography>
            </Box>
            <Box marginBottom={2}>
              <TextField
                id="standard-password-input"
                label=" "
                type="password"
                autoComplete="current-password"
                variant="standard"
                sx={{ input: { color: "white" } }}
              />
            </Box>
            <Box>
              <Typography sx={{ fontSize: 11 }} color={"primary"}>
                Forgot Password
              </Typography>
            </Box>

            <Box  sx={{position: "fixed",mt:43}}>
              <Stack justifyContent="center" alignItems="center">
                <Button
                  color="three"
                  variant="contained"
                  sx={{ width: 180, height: 45, zIndex: "tooltip" }}
                >
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    spacing={0}
                    sx={{ m: 0 }}
                  >
                    <Typography
                      color="primary"
                      className={myFont.className}
                      sx={{ fontSize: "30px" }}
                    >
                      Start
                    </Typography>
                  </Stack>
                </Button>

                <Box
                  className={myFont.className}
                  sx={{
                    mt: 2,
                    borderRadius: "3px",
                    width: 180,
                    height: 45,
                    backgroundColor: "#0C4BAF",
                    position: "fixed",
                    zIndex: "modal",
                  }}
                ></Box>
              </Stack>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                marginTop={4}
              >
                <Box>
                  <Typography color={"primary"} sx={{ fontSize: "10px" }}>Powered by</Typography>
                </Box>
                <Box marginTop={0.4}>
                <img src="/icon/Login/Jenosize_logo.svg" alt="" />
                </Box>
              </Stack>
            </Box>
          </ThemeProvider>
        </Stack>
      </div>



    </div>;
}



export default form_login;