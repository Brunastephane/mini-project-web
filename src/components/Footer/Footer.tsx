import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="Footer">
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="#">
          Bookology
        </Link>{" "}
        {new Date().getFullYear()}.
      </Typography>
    </div>
  );
}
