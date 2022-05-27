import React from "react";
import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import bckImage from "../../assets/bimage.png";
import feature from "../../assets/heroimage.png";
import prof from "../../assets/prof.png";

const HeroPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.heroContainer}>
      <Box>
        <img src={feature} alt="heroiamge" />
      </Box>
      <Box>
        <Box className={classes.heroRightbtn}>
          <img src={prof} alt="smallprof" />
          <Typography variant="h5">@ain.ethrm</Typography>
        </Box>
        <Box>
          <Typography variant="h3">Blob extrude with lines</Typography>
        </Box>
        <Box className={classes.herotimer}>
          <Box>
            <Typography variant="body1">Current Bid</Typography>
            <Typography variant="h5"> 1.18ETH</Typography>
          </Box>
          <Box className={classes.line}></Box>
          <Box>
            <Typography variant="body1"> Auction ending in</Typography>
            <Box className={classes.heroCountdwn}>
              <Box>
                <Typography variant="h5">11</Typography>
                <Typography variant="body1">Hours</Typography>
              </Box>
              <Box>
                <Typography variant="h5"> 40</Typography>
                <Typography variant="body1">minutes</Typography>
              </Box>
              <Box>
                <Typography variant="h5"> 30</Typography>
                <Typography variant="body1">seconds</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.LoginSection}>
          <Button className={classes.btnGold}>Place a bid</Button>
          <Button className={classes.btnblue}>View artwork </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroPage;

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    padding: " 110px",
    backgroundImage: `url(${bckImage})`,
    backgroundRepeat: "repeat",
    backgroungSize: "auto",

    // backgroungSize: "auto 100%",
    display: "flex",
    gap: "80px",
  },
  heroRightbtn: {
    display: "flex",
    gap: "10px",
    border: "1px solid black",
    borderRadius: "50px",
    padding: "7px",
    background: "#FFFFFF",
    maxWidth: "200px",
  },
  herotimer: {
    display: "flex",
    justifyContent: "space-around",
  },
  heroCountdwn: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
  },
  LoginSection: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
  },
  btnblue: {
    backgroundColor: "#0A1A72",
    color: "white",
    height: "52.6px",
    width: "174px",

    "&:hover": {
      backgroundColor: "#0A1A72",
    },
  },
  btnGold: {
    backgroundColor: "#B3A16C",
    color: "white",
    height: "52.6px",
    width: "131px",

    "&:hover": {
      backgroundColor: "#B3A16C",
    },
  },
}));
