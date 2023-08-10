import { Box } from "@mui/material";
import React from "react";
import { HomeHeader } from "./HomeHeader";
import { MainDivider } from "@/components/UI/dividers";
import { HomeReguladoras } from "./HomeReguladoras";
import { HomeSimpleText } from "./HomeSimpleText";
import { FeaturesSection } from "../CommonSections";

export const HomePageContent = () => {
  return (
    <Box>
      <HomeHeader />
      <MainDivider />
      <HomeReguladoras />
      <MainDivider />
      <HomeSimpleText />
      <MainDivider />
      <FeaturesSection />
    </Box>
  );
};
