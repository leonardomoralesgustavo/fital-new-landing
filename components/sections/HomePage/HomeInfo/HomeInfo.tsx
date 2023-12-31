import { Box, Typography } from "@mui/material";
import React from "react";

export const HomeInfo = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        sx={{
          opacity: 0.8,
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(245, 161, 252, 0.8) 100%) 0% 0% no-repeat padding-box",
          p: 9,
        }}
      >
        <Typography
          sx={{ fontSize: "24px", maxWidth: "90%", textAlign: "center" }}
        >
          Con el Testamento Digital, tienes el poder de asegurar el bienestar de
          tus seres queridos y la multiplicación de tus bienes. Con FITAL ahora
          es posible.{" "}
          <Typography
            component={"span"}
            sx={{
              fontSize: "24px",
              maxWidth: "100%",
              textAlign: "center",
              mt: 2,
            }}
          >
            Somos una financiera apoyada por tecnología creada para proteger tu
            patrimonio, además de ser la mejor opción con una propuesta rápida y
            confiable para administrar y multiplicar tus bienes, automatizamos
            el proceso tradicional y lo transformamos al entorno digital para
            hacer más fácil su uso y beneficio a un precio equiparable al
            servicio que te brindamos.
          </Typography>
        </Typography>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "25px", md: "48px" },
            fontWeight: "medium",
            textAlign: "center",
          }}
        >
          ¡Actúa ahora y asegura tu legado para siempre!
        </Typography>
      </Box>
    </Box>
  );
};
