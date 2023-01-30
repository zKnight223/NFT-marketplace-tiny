import { useStyles } from "./styles";
import { Box, Grid } from "@mui/material";
import imgCube from "assets/image/home/img-cube.png";
import imgGlossy from "assets/image/home/img-glossy.png";
import imgVector from "assets/image/home/img-vector.png";
import Text from "./Text";

export default function Choose() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Text className="title">Why Choose DEEPNFT?</Text>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box className="item">
            <Box component="img" alt="Choose" src={imgCube} />
            <Text className="subtitle">Mi proin sed libero enim sed </Text>
            <Text className="content">
              Ultrices tincidunt arcu non sodales neque sodales ut. Sed vulputate odio ut enim.
            </Text>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className="item">
            <Box component="img" alt="Choose" src={imgGlossy} />
            <Text className="subtitle">Aliquet eget sit amet tellus </Text>
            <Text className="content">
              Ac felis donec et odio pellentesque. Massa eget egestas purus viverra accumsan in nisl nisi.
            </Text>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className="item">
            <Box component="img" alt="Choose" src={imgVector} />
            <Text className="subtitle">Tortor at auctor urna nunc</Text>
            <Text className="content">
              Id volutpat lacus laoreet non curabitur gravida. Risus nec feugiat in fermentum.
            </Text>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
