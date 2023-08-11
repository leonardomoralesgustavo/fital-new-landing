import { Box, Button } from "@mui/material";
import React from "react";

export const HomeIconButton = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"right"}
      alignItems={"center"}
      //   position={"fixed"}
      // textAlign={"center"}
      mb={10}
    >
      <Box
        component={"img"}
        src="/icons/whatsapp.png"
        sx={{
          position: "fixed",
          right: 0,
          bottom: { xs: 0, sm: 60, md: 80 },
          width: { xs: "70px", sm: "90px", md: "110px" },
        }}
      />
      <Button
        sx={{
          position: "fixed",
          right: 0,
          bottom: 4,
          bgcolor: "#7600FF",
          color: "white",
          py: { xs: 2, sm: 2, md: 2 },
          px: { xs: 2, sm: 2, md: 2 },
          borderRadius: 8,
          fontSize: { xs: "15px", md: "20px", lg: "25px", xl: "28px" },
          display: { xs: "none", sm: "block" }, // Disappear on xs screen size
        }}
      >
        Agendar asesoria gratuita
      </Button>
    </Box>
  );
};
