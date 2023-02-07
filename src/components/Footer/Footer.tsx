import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";

function Footer() {
  return (
    <Container
      sx={{ justifyContent: "center", alignItems: "bottom", display: "flex" }}
    >
      <Typography sx={{ position: "absolute", bottom: "10px" }}>
        ©Copyright Bookology - All rights reserved.
      </Typography>
    </Container>
  );
}

export default Footer;
