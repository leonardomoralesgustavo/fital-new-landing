import React from "react";
import { Box, Typography } from "@mui/material";

export const HomeReguladoras = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={10}
    >
      <Box
        height={"auto"}
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
        component={"img"}
        src="/images/CNBV.png"
        onClick={() =>
          window.open(
            "https://www.gob.mx/cms/uploads/attachment/file/710084/TABLERO-DE-CONTROL-SOFOMES-ENR_16032022.pdf",
            "_blank"
          )
        }
      />
      <Box>
        <Typography sx={{ fontSize: "36px" }}>Razón social</Typography>
        <Typography sx={{ fontSize: "36px" }}>
          Finganas, S.A.P.I. de C.V., SOFOM, E.N.R.
        </Typography>
      </Box>
    </Box>
  );
};
