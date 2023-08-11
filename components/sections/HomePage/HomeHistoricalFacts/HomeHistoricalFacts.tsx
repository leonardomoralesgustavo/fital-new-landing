import { Box, Button, Typography } from "@mui/material";
import React from "react";

export const HomeHistoricalFacts = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} flexDirection={"column"}>
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"left"}
          alignItems={"left"}
          width={"65%"}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "11px",
                sm: "20px",
                md: "40px",
                lg: "45px",
                xl: "48px",
              },
              fontWeight: "medium",
              textAlign: { xs: "center", sm: "center", md: "left" },
            }}
          >
            El{" "}
            <Typography
              component="span"
              variant="inherit"
              color={"#7624FF"}
              fontSize={{ xs: "16px", sm: "20px", md: "40", lg: "64px" }}
              sx={{ fontWeight: "medium" }}
            >
              SECRETO{" "}
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"left"}
          alignItems={"left"}
          width={{ xs: "95%", sm: "90%", md: "65%" }}
          mb={10}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "11px",
                sm: "20px",
                md: "40px",
                lg: "45px",
                xl: "48px",
              },
              fontWeight: "medium",
              textAlign: { xs: "center", sm: "center", md: "left" },
            }}
          >
            DE LOS{" "}
            <Typography
              component="span"
              variant="inherit"
              color={"#7624FF"}
              fontSize={{ xs: "16px", sm: "20px", md: "40", lg: "64px" }}
              sx={{ fontWeight: "medium" }}
            >
              GRANDES PATRIMONIOS
            </Typography>
          </Typography>
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        px={{ xs: 2, sm: 2, md: "none" }}
        gap={{ xs: 5, sm: 5, md: 20 }}
      >
        <Box
          component={"img"}
          src="/images/personaje.png"
          width={{ xs: "270px", sm: "290px", md: "600px" }}
          height={{ xs: "334px", sm: "350px", md: "720px" }}
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={{ xs: 5, sm: 5, md: 2 }}
          sx={{
            width: { xs: "auto", sm: "290px", md: "700px" },
            height: { xs: "auto", sm: "290px", md: "560px" },
            justifyContent: "center",
            alignItems: "left",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "16px",
                sm: "20px",
                md: "30px",
                lg: "36px",
                xl: "36px",
              },
              fontWeight: "semibold",
            }}
          >
            ¿Sabías qué{" "}
            <Typography
              component="span"
              variant="inherit"
              sx={{ fontWeight: "medium" }}
            >
              Gerald Heineken
            </Typography>
            , protegió su legado por 3 generaciones gracias a esta estrategia
            patrimonial?
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "30px",
                lg: "36px",
                xl: "36px",
              },
            }}
          >
            ¿Te decimos cómo?
          </Typography>
          <Box
            display={"flex"}
            justifyContent={{ xs: "center", sm: "center", md: "left" }}
            mt={{ xs: 0, sm: 1, md: 4 }}
          >
            <Button
              sx={{
                bgcolor: "#7600FF",
                color: "white",
                py: { xs: 2, sm: 2, md: 4 },
                px: { xs: 2, sm: 2, md: 4 },
                borderRadius: 2,
                fontSize: { xs: "15px", md: "20px", lg: "24px", xl: "24px" },
              }}
            >
              Agendar asesoria gratuita
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
