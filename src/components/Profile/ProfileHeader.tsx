import { Chip, Typography } from "@mui/material";
import React from "react";

const ProfileHeader = (name: string, role: string, skills: string[]) => {
  return (
    <>
      <Typography variant="h3">{name}</Typography>
      <Typography variant="h5" sx={{ mb: "15px" }}>
        {role}
      </Typography>
      {skills.map((skill) => (
        <Chip label={skill} sx={{ mr: "4px", mt: "5px" }} />
      ))}
    </>
  );
};

export default ProfileHeader;
