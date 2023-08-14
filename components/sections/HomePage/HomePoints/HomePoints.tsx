import { Box, Typography } from "@mui/material";
import React from "react";

export const HomePoints = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column", sm: "column", md: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
      gap={{ xs: 5, sm: 5, md: 0 }}
    >
      <Box
        component={"img"}
        src="/images/GIF-LANDING.gif"
        width={{ xs: "90%", sm: "400px", md: "500px", lg: "750px" }}
        height={{ xs: "auto", sm: "auto" }}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={{ xs: 5, sm: 5, md: 2 }}
        sx={{
          width: { xs: "90%", sm: "400px", md: "700px" },
          height: { xs: "auto", sm: "auto", md: "560px" },
          justifyContent: "center",
        }}
      >
        <Box display={"flex"} flexDirection={"row"}>
          <Box sx={{ mt: { xs: 0, sm: 0, md: 1.5 }, mr: 1.5 }}>
            <Box component={"img"} src="/icons/icon-check.png" />
          </Box>
          <Typography sx={{ fontSize: "36px" }}>
            Deseos más allá de tu existencia
          </Typography>
        </Box>

        <Box display={"flex"} flexDirection={"row"}>
          <Box sx={{ mt: { xs: 0, sm: 0, md: 1.5 }, mr: 1.5 }}>
            <Box component={"img"} src="/icons/icon-check.png" />
          </Box>
          <Typography sx={{ fontSize: "36px" }}>
            Navidades sin tíos peleando por los terrenos del abuelo
          </Typography>
        </Box>

        <Box display={"flex"} flexDirection={"row"}>
          <Box sx={{ mt: { xs: 0, sm: 0, md: 1.5 }, mr: 1.5 }}>
            <Box component={"img"} src="/icons/icon-check.png" />
          </Box>
          <Typography sx={{ fontSize: "36px" }}>
            Patrimonio para tus hijos y nietos
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"row"}>
          <Box sx={{ mt: { xs: 0, sm: 0, md: 1.5 }, mr: 1.5 }}>
            <Box component={"img"} src="/icons/icon-check.png" />
          </Box>
          <Typography sx={{ fontSize: "36px" }}>
            Tus deseos, tus órdenes
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"row"}>
          <Box sx={{ mt: { xs: 0, sm: 0, md: 1.5 }, mr: 1.5 }}>
            <Box component={"img"} src="/icons/icon-check.png" />
          </Box>
          <Typography sx={{ fontSize: "36px" }}>
            Sin trámites engorrosos
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
