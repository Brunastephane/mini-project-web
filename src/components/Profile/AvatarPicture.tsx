import { Avatar } from "@mui/material";
import React from "react";

const AvatarPicture = (imgAddress: any) => {
  return <Avatar src={imgAddress} sx={{ width: "250px", height: "250px" }} />;
};

export default AvatarPicture;
