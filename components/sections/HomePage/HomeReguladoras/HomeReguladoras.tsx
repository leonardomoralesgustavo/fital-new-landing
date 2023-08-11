import React from "react";
import { Box, Typography } from "@mui/material";

export const HomeReguladoras = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
      gap={{ xs: 5, sm: 5, md: 10 }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          height={{ xs: "100px", sm: "150px", md: "200px" }}
          width={{ xs: "100px", sm: "150px", md: "200px" }}
          component={"img"}
          src="/images/CONDUSEF.png"
          onClick={() =>
            window.open(
              "https://eduweb.condusef.gob.mx/reune/consulta.aspx?69",
              "_blank"
            )
          }
        />
        <Box
          height={{ xs: "100px", sm: "150px", md: "200px" }}
          width={{ xs: "100px", sm: "150px", md: "200px" }}
          component={"img"}
          src="/images/CNBV.png"
          onClick={() =>
            window.open(
              "https://www.gob.mx/cms/uploads/attachment/file/710084/TABLERO-DE-CONTROL-SOFOMES-ENR_16032022.pdf",
              "_blank"
            )
          }
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: { xs: "center", sm: "center", md: "unset" },
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: { xs: "18px", sm: "25px", md: "36px" } }}>
          Razón social
        </Typography>
        <Typography sx={{ fontSize: { xs: "18px", sm: "25px", md: "36px" } }}>
          Finganas, S.A.P.I. de C.V., SOFOM, E.N.R.
        </Typography>
      </Box>
    </Box>
  );
};
