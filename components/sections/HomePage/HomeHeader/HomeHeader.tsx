import { Box, Button, Typography } from "@mui/material";
import React from "react";

export const HomeHeader = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          component={"img"}
          src="/images/fitalLogo.png"
          width={"165px"}
          height={"42px"}
          sx={{ mt: 5, ml: 10 }}
        />
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ mt: 8, gap: { xl: 6, lg: 4, md: 4 } }}
      >
        <Box
          bgcolor={""}
          maxWidth={"40%"}
          sx={{ display: "flex", flexDirection: "column", ml: 8 }}
        >
          <Typography
            sx={{
              color: "#7624FF",
              fontSize: "72px",
              fontWeight: "400",
              lineHeight: "80px",
            }}
          >
            LA TRASENDENCIA, EL PODER DEL TESTAMENTO DIGITAL
          </Typography>
          <Typography sx={{ color: "#707070", fontSize: "25px", mt: 2 }}>
            Hacemos que tu patrimonio Llegue mas allá, protégelo por más
            generaciones
          </Typography>
          <Typography sx={{ color: "#000000", fontSize: "48px", mt: 2 }}>
            ¡No te quedes atrás, CREA TU IMPERIO ! 100% en línea
          </Typography>
          <Box display={"flex"} justifyContent={"left"} mt={4}>
            <Button
              sx={{ bgcolor: "#7600FF", color: "white", p: 4, borderRadius: 2 }}
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
              borderRadius: 2,
              boxShadow: "0px 2px 4px #0000000F",
              width: "400px",
              height: "695px",
              mr: 8,
            }}
          >
            <Typography>Crear cuenta</Typography>
            <Box display={"flex"} justifyContent={"left"} mt={4}>
              <Button
                sx={{
                  bgcolor: "#7600FF",
                  color: "white",
                  p: 4,
                  borderRadius: 2,
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
