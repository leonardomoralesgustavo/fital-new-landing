import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

export const HomeHeader = () => {
  return (
    <>
      <Box
        justifyContent={{ xs: "center", sm: "center", md: "unset" }}
        sx={{ display: "flex" }}
      >
        <Box
          component={"img"}
          src="/images/fitalLogo.png"
          width={{ xs: "150px", md: "180px", lg: "200px", xl: "210px" }}
          height={{ xs: "40px", md: "45px", lg: "50px", xl: "58px" }}
          sx={{ mt: 8, ml: { xs: 0, sm: 4, md: 10, lg: 14, xl: 15 } }}
          justifyContent={"center"}
        />
      </Box>
      <Box
        display={"flex"}
        // bgcolor={"blue"}
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
        alignItems={{ xs: "center", sm: "center", md: "end" }}
        px={{ xs: 0, md: 1, lg: 2, xl: 2 }}
        justifyContent={"space-between"}
        textAlign={{ xs: "center", sm: "center", md: "unset" }}
        sx={{
          mt: { xs: 4, md: 4, lg: 0, xl: 0 },
          gap: { xl: 0, lg: 4, md: 4, sm: 3, xs: 1 },
        }}
      >
        <Box
          bgcolor={""}
          maxWidth={{ xs: "none", sm: "none", md: "40%" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            ml: { xs: 0, sm: 3, md: 8, lg: 10, xl: 11 },
          }}
        >
          <Typography
            sx={{
              color: "#7624FF",
              fontSize: {
                xs: "30px",
                sm: "25px",
                md: "30px",
                lg: "45px",
                xl: "60px",
              },
              fontWeight: "400",
              lineHeight: { xs: "35px", md: "40px", lg: "60px", xl: "75px" },
            }}
          >
            LA TRASENDENCIA, EL PODER DEL TESTAMENTO DIGITAL
          </Typography>
          <Typography
            sx={{
              color: "#707070",
              fontSize: { xs: "18px", sm: "24px" },
              mt: 5,
              maxWidth: { xs: "100%", sm: "100%", md: "70%" },
              textAlign: { xs: "center", sm: "center", md: "unset" },
            }}
          >
            Hacemos que tu patrimonio llegue más allá, protégelo por más
            generaciones
          </Typography>
          <Typography
            sx={{
              color: "#000000",
              fontSize: {
                xs: "20px",
                sm: "25px",
                md: "30px",
                lg: "30px",
                xl: "36px",
              },
              mt: 5,
            }}
          >
            ¡No te quedes atrás, CREA TU IMPERIO ! 100% en línea
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
                fontSize: { xs: "15px", md: "20px", lg: "25px", xl: "28px" },
              }}
            >
              Agendar asesoria gratuita
            </Button>
          </Box>
        </Box>
        {/* <Box component={"img"} src="/images/Zai.png"/> */}
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
              mt: { xs: 4, sm: "none" },
              px: { xs: 5, sm: 20, md: 8 },
              py: { xs: -4, sm: 5, md: 2, lg: 3, xl: 3 },
              height: { xs: "500px", md: "600px", lg: "650px", xl: "695px" },
              mr: { xs: 0, sm: 0, md: 2 },
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
                  py: { xs: 2, md: 2, lg: 3, xl: 4 },
                  px: { xs: 2, md: 2, lg: 3, xl: 3 },
                  borderRadius: 2,
                  fontSize: { xs: "15px", md: "20px", lg: "25px", xl: "28px" },
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
