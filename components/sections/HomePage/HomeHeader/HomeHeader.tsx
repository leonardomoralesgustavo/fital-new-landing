import { addContactService } from "@/interfaces";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

export const HomeHeader = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = await addContactService({
      name: event.target.name.value,
      last_name: event.target.lastName.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
    });
    console.log(data);
    if (!data.success) {
      // setMsg({ text: data.errors![0], type: "error" });
      console.log("Algo anda mal");
    } else {
      console.log("Enviado");
      // onClose();
      // window.open("https://fitalmx.com/thank_you", "_self");
    }
  };
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
        <Grid
          sx={{
            clipPath: "polygon(30% 0, 70% 0, 70% 100%, 30% 100%)",
            width: { xs: "85vw", md: "none" },
            height: { xs: 0, sm: 0, md: 0, lg: 0, xl: "73%" },
            position: "absolute",
            bottom: "14.5%",
            left: "16%",
            backgroundImage: "url('/images/zai-foto.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "50%",
            backgroundPosition: "center bottom",
            display: "block",
          }}
        />

        <Box
          bgcolor={""}
          maxWidth={{ xs: "none", sm: "none", md: "40%" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            ml: { xs: 0, sm: 0, md: 8, lg: 10, xl: 11 },
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
              fontWeight: "500",
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
                py: { xs: 2, sm: 2, md: 3 },
                px: { xs: 2, sm: 2, md: 2 },
                borderRadius: 2,
                fontSize: { xs: "15px", md: "20px", lg: "24px", xl: "24px" },
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
            // alignItems={"center"}
            sx={{
              bgcolor: "#EBE8EF",
              borderRadius: 5,
              boxShadow: "0px 2px 4px #0000000F",
              width: { xs: "90vw", sm: "95vw", md: "500px" },
              mt: { xs: 4, sm: "none" },
              // px: 2,
              // p: { xs: 6, sm: 20, md: 8 },
              py: { xs: 4, sm: 5, md: 2, lg: 3, xl: 3 },
              // height: { xs: "550px", md: "600px", lg: "650px", xl: "695px" },
              mr: { xs: 0, sm: 0, md: 2 },
              gap: { xs: 0, sm: 0, md: 4 },
            }}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <Typography
                sx={{
                  fontSize: { xs: "15px", md: "20px", lg: "24px", xl: "24px" },
                }}
              >
                Agendar asesoría gratuita
              </Typography>
            </Box>
            <Box
              onSubmit={handleSubmit}
              component="form"
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                width={{ xs: "90%", sm: "90%", md: "80%" }}
              >
                <Typography textAlign={"left"}>Nombre</Typography>
                <TextField
                  name="name"
                  type="text"
                  sx={{ mt: 1, backgroundColor: "white" }}
                />
                <Typography textAlign={"left"} sx={{ mb: 0, mt: 2 }}>
                  Apellido
                </Typography>
                <TextField
                  name="lastName"
                  type="text"
                  sx={{ mt: 1, backgroundColor: "white" }}
                />
                <Typography textAlign={"left"} sx={{ mb: 0, mt: 2 }}>
                  Correo
                </Typography>
                <TextField
                  name="email"
                  type="text"
                  sx={{ mt: 1, backgroundColor: "white" }}
                />
                <Typography textAlign={"left"} sx={{ mb: 0, mt: 2 }}>
                  Teléfono
                </Typography>
                <TextField
                  name="phone"
                  type="text"
                  sx={{ mt: 1, backgroundColor: "white" }}
                />
              </Box>
              <Box display={"flex"} justifyContent={"center"} mt={4}>
                <Button
                  type="submit"
                  sx={{
                    bgcolor: "#7600FF",
                    color: "white",
                    py: { xs: 2, sm: 2, md: 3 },
                    px: { xs: 2, sm: 2, md: 2 },
                    borderRadius: 2,
                    fontSize: {
                      xs: "15px",
                      md: "20px",
                      lg: "24px",
                      xl: "24px",
                    },
                  }}
                >
                  Agendar asesoria gratuita
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
