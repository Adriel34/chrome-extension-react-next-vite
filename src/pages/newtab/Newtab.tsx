import { Grid, Typography, Box } from "@mui/material";
import { Container } from "./newtab.style";

export default function Newtab(): JSX.Element {
  console.log("new");
  return (
    <Container>
      <Grid item m={7}>
        <Typography variant="h5" color="white" textAlign="center">
          NEW PAGE
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
