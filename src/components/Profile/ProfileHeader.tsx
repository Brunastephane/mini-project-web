import { Chip, Typography } from "@mui/material";
import React from "react";

const ProfileHeader = (props: any) => {
  const { name, role, skills } = props;
  return (
    <>
      <Typography variant="h3">{name}</Typography>
      <Typography variant="h5" sx={{ mb: "15px" }}>
        {role}
      </Typography>
      {skills.map((skill: string) => (
        <Chip label={skill} sx={{ mr: "4px", mt: "5px" }} />
      ))}
    </>
  );
};

export default ProfileHeader;
