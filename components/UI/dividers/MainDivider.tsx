import { Divider, SxProps, Theme } from "@mui/material";
import React from "react";

export const MainDivider = () => {
  return <Divider sx={styles} />;
};

const styles: SxProps<Theme> = (theme) => ({
  borderWidth: "1px",
  // borderColor: theme.palette.primary.main,
  width: "85%",
  mx: "auto",
  my: { md: 10, sm: 8, xs: 5 },
});
