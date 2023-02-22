import { Avatar, Container } from "@mui/material";
import React from "react";

const AvatarPicture = (props: any) => {
  const { imgAddress } = props;
  return (
    <Container>
      <Avatar src={imgAddress} sx={{ width: "300px", height: "300px" }} />
    </Container>
  );
};

export default AvatarPicture;
