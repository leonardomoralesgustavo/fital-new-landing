import { Box } from "@mui/material";
import React from "react";
import { HomeHeader } from "./HomeHeader";
import { MainDivider } from "@/components/UI/dividers";
import { HomeReguladoras } from "./HomeReguladoras";
import { HomeSimpleText } from "./HomeSimpleText";
import { FeaturesSection } from "../CommonSections";
import { HomePoints } from "./HomePoints";
import { HomeHistoricalFacts } from "./HomeHistoricalFacts";
import { HomeTeam } from "./HomeTeam";
import { HomeInfo } from "./HomeInfo";
import { HomeIconButton } from "./HomeIconButton";

export const HomePageContent = () => {
  return (
    <Box>
      <HomeHeader />
      <MainDivider />
      <HomeReguladoras />
      <MainDivider />
      <HomePoints />
      <MainDivider />
      <HomeHistoricalFacts />
      <MainDivider />
      <HomeSimpleText />
      <MainDivider />
      <HomeInfo />
      <MainDivider />
      <FeaturesSection />
      <MainDivider />
      <HomeTeam />
      <HomeIconButton />
    </Box>
  );
};
