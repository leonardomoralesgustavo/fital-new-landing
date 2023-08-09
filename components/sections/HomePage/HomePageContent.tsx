import { Box } from "@mui/material";
import React from "react";
import { HomeHeader } from "./HomeHeader";
import { MainDivider } from "@/components/UI/dividers";

export const HomePageContent = () => {
  return (
    <Box>
      <HomeHeader />
      <MainDivider />
    </Box>
  );
};
