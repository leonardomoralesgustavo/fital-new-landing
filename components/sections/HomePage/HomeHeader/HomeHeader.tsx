import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

export const HomeHeader = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          component={"img"}
          src="/images/fitalLogo.png"
          width={"210px"}
          height={"58px"}
          sx={{ mt: 8, ml: 15 }}
        />
      </Box>
      <Box
        display={"flex"}
        alignItems={"end"}
        px={2}
        justifyContent={"space-between"}
        sx={{ mt: -3, gap: { xl: 6, lg: 4, md: 4 } }}
      >
        <Box
          bgcolor={""}
          maxWidth={"40%"}
          sx={{ display: "flex", flexDirection: "column", ml: 11 }}
        >
          <Typography
            sx={{
              color: "#7624FF",
              fontSize: "60px",
              fontWeight: "400",
              lineHeight: "75px",
            }}
          >
            LA TRASENDENCIA, EL PODER DEL TESTAMENTO DIGITAL
          </Typography>
          <Typography
            sx={{ color: "#707070", fontSize: "24px", mt: 5, maxWidth: "70%" }}
          >
            Hacemos que tu patrimonio llegue más allá, protégelo por más
            generaciones
          </Typography>
          <Typography sx={{ color: "#000000", fontSize: "36px", mt: 5 }}>
            ¡No te quedes atrás, CREA TU IMPERIO ! 100% en línea
          </Typography>
          <Box display={"flex"} justifyContent={"left"} mt={4}>
            <Button
              sx={{
                bgcolor: "#7600FF",
                color: "white",
                py: 4,
                px: 4,
                borderRadius: 2,
                fontSize: "28px",
              }}
            >
              Agendar asesoria gratuita
            </Button>
          </Box>
        </Box>
        {/* <Box component={"img"} src="/images/Zai.png" bgcolor={"blue"}/> */}
        <Box sx={{ display: "flex" }}>
          <Box
            display={"flex"}
            flexDirection="column"
            justifyContent="center"
            alignItems={"center"}
            sx={{
              bgcolor: "#EBE8EF",
              borderRadius: 5,
              boxShadow: "0px 2px 4px #0000000F",
              // width: "400px",
              px: 8,
              py: 3,
              height: "695px",
              mr: 2,
            }}
          >
            <Typography>Crear cuenta</Typography>
            <Box
              component={"form"}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <label className="">Nombre</label>

              <label className="text-aggentia-blue">Correo</label>

              <label className="text-aggentia-blue">Teléfono</label>
            </Box>
            <Box display={"flex"} justifyContent={"left"} mt={4}>
              <Button
                sx={{
                  bgcolor: "#7600FF",
                  color: "white",
                  py: 4,
                  px: 3,
                  borderRadius: 2,
                  fontSize: "28px",
                }}
              >
                Agendar asesoria gratuita
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
