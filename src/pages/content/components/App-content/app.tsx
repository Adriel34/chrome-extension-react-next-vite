import { Grid, Typography, Box } from "@mui/material";
import logo from "@assets/img/logo.svg";
import { useEffect } from "react";
import { Container } from "./app.style";

export default function App() {
  useEffect(() => {
    console.log("content loaded");
  }, []);

  return (
    <Container>
   
      <Grid item m={7}>
        <Typography variant="h5" color="white" textAlign='center'>
          CONTENT
        </Typography>
        <Box />
        <Typography variant="h5" color="white">
          Boilerplate Next + Vite
        </Typography>
      </Grid>

      <Box />
      <Grid item m={1}>
        <Typography variant="subtitle1" color="white">
          Boilerplate Next + Vite using Material Ui and Emotion
        </Typography>
      </Grid>
   
    </Container>
  );
}
