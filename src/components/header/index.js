import React from "react";
import { Box, makeStyles, InputBase, Button } from "@material-ui/core";
import logo from "../../assets/boaxlogo.png";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.headerContainer}>
      <Box className={classes.logoboax}>
        <img src={logo} alt="logo" />
        <Box className={classes.searchContainer}>
          <InputBase placeholder="search" />
          <SearchIcon />
        </Box>
      </Box>
      <Box>
        <Link to="/" className={classes.navlinks}>
          MARKET
        </Link>
        <Link to="/" className={classes.navlinks}>
          ARTIST
        </Link>
        <Link to="/" className={classes.navlinks}>
          ABOUT US
        </Link>
        <Link to="/" className={classes.navlinks}>
          BLOG
        </Link>
        <Link to="/" className={classes.navlinks}>
          FAQ
        </Link>
      </Box>
      <Box className={classes.LoginSection}>
        <Link to="/" className={classes.reisistrlink}>
          Register/login
        </Link>
        <Button className={classes.btnGold}>Create</Button>
        <Button className={classes.btnblue}>Connect Wallet</Button>
      </Box>
    </Box>
  );
};

export default Header;

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    height: "80.84px",
    alignItems: "center",
    padding: "0 40px",
  },
  logoboax: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #959595",
    borderRadius: "10px",
    paddingLeft: "10px",
  },
  navlinks: {
    color: "#333333",
    fontWeight: "600",
    fontSize: "18px",
    marginRight: "18px",
    textDecoration: "none",
  },
  LoginSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  reisistrlink: {
    color: "#333333",
    marginRight: "18px",
    textDecoration: "none",
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
