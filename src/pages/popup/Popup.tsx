import { Box, Grid, Typography } from "@mui/material";
import logo from "@assets/img/logo.svg";

export default function Popup(): JSX.Element {
  return (
    <Grid container>
      <img src={logo} />
      <Grid item m={3}>
        <Typography variant="h5" color="white">
          POPUP CONTENT
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
    </Grid>
  );
}
