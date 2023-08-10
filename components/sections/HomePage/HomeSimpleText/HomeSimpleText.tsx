import { Box, Typography } from "@mui/material";
import React from "react";

export const HomeSimpleText = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography sx={{ fontSize: "48px" }}>
        Visualiza un legado protegido y floreciente
      </Typography>

      <Typography sx={{ fontSize: "48px", fontWeight: "500" }}>
        RAPIDO, LEGAL Y DIGITAL CON FITAL
      </Typography>
    </Box>
  );
};
