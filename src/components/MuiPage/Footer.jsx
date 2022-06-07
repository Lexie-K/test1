import React from "react";
import { AppBar, Toolbar } from "@mui/material";

// TODO найти замену AppBar без position: fixed
const Footer = () => (
  <AppBar sx={{ bgcolor: "purple", color: "black" }}>
    <Toolbar>Footer</Toolbar>
  </AppBar>
);

export default Footer;
