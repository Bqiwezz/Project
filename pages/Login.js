import React from "react";
import styled from "styled-components";
import Background from "@/pages/Background";
import { Stack } from "@mui/system";
import Formlogin from "../pages/form_login";
import Box from "@mui/material/Box";



const Test = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #00afcc;
  overflow: hidden;
  display: flex;
`

const Login = () => {
  return (
    <div>
      <Test>
        <Stack>
            <Box>
          <Background />
          </Box>
          <Box >
            <Formlogin />
          </Box>
        </Stack>
      </Test>
    </div>
  );
};

export default Login;
