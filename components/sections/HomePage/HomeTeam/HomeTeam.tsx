import { Box, Typography } from "@mui/material";
import React from "react";

export const HomeTeam = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column-reverse", sm: "column", md: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
      mb={10}
      gap={{ xs: 5, sm: 5, md: 10 }}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        // bgcolor={"gray"}
      >
        <Box component={"img"} src="/images/zai-circle.png" sx={{mb: 8}} />
        <Typography sx={{ fontSize: "30px", fontWeight: "medium", mb: 4 }}>
          Hola soy Zaira Mora
        </Typography>
        <Typography
          sx={{ fontSize: "24px", maxWidth: "50%", textAlign: "center" }}
        >
          Actualmente Directora en Fital, CEO de Aggentia. Empresaria con
          trayectoria amplia en el sector comercial, financiero y empresarial.
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        // bgcolor={"gray"}
      >
        <Box component={"img"} src="/images/jorge-circle.png" sx={{mb: 8}}/>
        <Typography sx={{ fontSize: "30px", fontWeight: "medium", mb: 4 }}>
          Hola soy Jorge Puflea
        </Typography>
        <Typography
          sx={{ fontSize: "24px", maxWidth: "50%", textAlign: "center" }}
        >
          Actualmente empresario en el sector Fintech, responsable de conseguir
          inversionistas para PyME’S. Trayectoria amplia en el sector
          financiera, fiscal y empresarial.
        </Typography>
      </Box>
    </Box>
  );
};
