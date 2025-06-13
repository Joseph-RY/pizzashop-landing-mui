import React from "react";
import { Box } from "@mui/material";
import { Hero } from "./shared/ui/hero/hero";
import { Menu } from "./shared/ui/menu/menu";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Menu />
    </Box>
  );
};

export default Home;
