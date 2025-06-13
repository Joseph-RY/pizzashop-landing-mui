"use client";

import { Box, Typography } from "@mui/material";
import React from "react";

const MenuBanner = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/popular-banner.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: {
          xs: "none",
          lg: "cover",
        },
        borderRadius: "35px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingY: "115px",
        marginY: "100px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontSize: {
            xs: "32px",
            lg: "44px",
          },
          fontWeight: 500,
          color: "#FFF",
        }}
      >
        MOST POPULAR PIZZA
      </Typography>
    </Box>
  );
};

export default MenuBanner;
