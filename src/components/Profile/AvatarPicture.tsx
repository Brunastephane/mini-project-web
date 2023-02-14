import { Avatar } from "@mui/material";
import React from "react";

const AvatarPicture = (props: any) => {
  const {imgAddress} = props;
  return <Avatar src={imgAddress} sx={{ width: "250px", height: "250px" }} />;
};

export default AvatarPicture;
