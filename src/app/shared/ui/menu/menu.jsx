import { Box, Typography } from "@mui/material";
import React from "react";
import MenuButtons from "../menu-buttons/menu-buttons";
import Pizza from "../pizza/pizza";

export const Menu = () => {
  return (
    <Box sx={{ paddingInline: "5%", background: "linear-gradient(90deg, #1c0c00, #2b1102)" }}>
      <Typography sx={{ textAlign: "center", fontWeight: "800", color: "#FFF" }} variant="h2">
        Menu
      </Typography>
      <MenuButtons />
      <Pizza />
    </Box>
  );
};
