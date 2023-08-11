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
                xs: "30px",
                sm: "35px",
                md: "40px",
                lg: "45px",
                xl: "48px",
              },
              fontWeight: "medium",
            }}
          >
            El{" "}
            <Typography
              component="span"
              variant="inherit"
              color={"#7624FF"}
              fontSize={"64px"}
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
          width={"65%"}
          mb={10}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "30px",
                sm: "35px",
                md: "40px",
                lg: "45px",
                xl: "48px",
              },
              fontWeight: "medium",
            }}
          >
            DE LOS{" "}
            <Typography
              component="span"
              variant="inherit"
              color={"#7624FF"}
              fontSize={"100px"}
              sx={{ fontWeight: "medium" }}
            >
              GRANDES PATRIMONIOS
            </Typography>
          </Typography>
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDirection={{ xs: "column-reverse", sm: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ xs: 5, sm: 5, md: 30 }}
      >
        <Box
          component={"img"}
          src="/images/personaje.png"
          width={"639px"}
          height={"782px"}
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={{ xs: 5, sm: 5, md: 2 }}
          sx={{
            width: "700px",
            height: "560px",
            justifyContent: "center",
            alignItems: "left",
            bgcolor: "",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
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
            mt={4}
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