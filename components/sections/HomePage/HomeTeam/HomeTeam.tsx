import { Box, Button, Typography } from "@mui/material";
import React from "react";

export const HomeTeam = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      position={"relative"}
      // justifyContent={"center"}
      // alignItems={"center"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        mb={10}
      >
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "30px", md: "48px" },
            fontWeight: "medium",
          }}
        >
          SOMOS UN EQUIPO QUE HACE POSIBLE TU IMPERIO.
        </Typography>
      </Box>
      {/* <Box
        display={"flex"}
        justifyContent={"right"}
        alignItems={"center"}
        // textAlign={"center"}
        mb={10}
      >
        <Box component={"img"} src="/icons/whatsapp.png" sx={{position:"absolute", right: 0, top:0}}/>
        <Button
          sx={{
            bgcolor: "#7600FF",
            color: "white",
            py: { xs: 2, sm: 2, md: 2 },
            px: { xs: 2, sm: 2, md: 2 },
            borderRadius: 8,
            fontSize: { xs: "15px", md: "20px", lg: "25px", xl: "28px" },
          }}
        >
          Agendar asesoria gratuita
        </Button>
      </Box> */}
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"flex-start"}
        mb={10}
        gap={{ xs: 5, sm: 5, md: 10 }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          // bgcolor={"gray"}
          maxWidth={{ xs: "100%", sm: "100%", md: "50%" }}
        >
          <Box component={"img"} src="/images/zai-circle.png" sx={{ mb: 8, width: {xs: "200px", sm: "300px"}}} />
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "25px", md: "30px" },
              fontWeight: "medium",
              mb: 4,
            }}
          >
            Hola soy Zaira Mora
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "18px", md: "21px" },
              maxWidth: "50%",
              textAlign: "center",
            }}
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
          maxWidth={{ xs: "100%", sm: "100%", md: "50%" }}
        >
          <Box
            component={"img"}
            src="/images/jorge-circle.png"
            sx={{ mb: 8, width: {xs: "200px", sm: "300px"} }}
          />
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "25px", md: "30px" },
              fontWeight: "medium",
              mb: 4,
            }}
          >
            Hola soy Jorge Puflea
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "18px", md: "21px" },
              maxWidth: "50%",
              textAlign: "center",
            }}
          >
            Actualmente empresario en el sector Fintech, responsable de
            conseguir inversionistas para PyME’S. Trayectoria amplia en el
            sector financiera, fiscal y empresarial. Trayectoria amplia en el
            sector financiera, fiscal y empresarial.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
