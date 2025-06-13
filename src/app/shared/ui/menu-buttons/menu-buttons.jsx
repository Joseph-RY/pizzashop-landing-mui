"use client";

import { useState } from "react";
import { Box, Button } from "@mui/material";

const butttons = ["Show All", "Meat", "Vegetarian", "Sea products", "Mushroom"];

export default function MenuButtons() {
  const [activeCategory, setActiveCategory] = useState("Show All");

  const getButtonStyles = (category) => ({
    width: {
      xs: "140px",
      md: "163px",
    },
    height: {
      xs: "38px",
      md: "58px",
    },
    fontSize: {
      xs: "12px",
      md: "16px",
    },
    fontWeight: 600,
    textTransform: "none",
    borderRadius: "700px",
    color: "#FFF",
    background:
      category === activeCategory
        ? "linear-gradient(90deg, #FFA228, #FF6432)"
        : "linear-gradient(90deg, #1c0c00, #2b1102)",
    boxShadow: category === activeCategory ? "none" : "0 0 6px #ff6432",
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: {
          xs: "start",
          md: "center",
        },
        flexWrap: {
          xs: "wrap",
          md: "nowrap",
        },
        gap: "24px",
        paddingnBlock: "40px",
        marginBlock: "40px",
        marginBottom: "55px",
      }}
    >
      {butttons.map((e) => (
        <Button
          key={e}
          onClick={() => setActiveCategory(e)}
          sx={getButtonStyles(e)}
        >
          {e}
        </Button>
      ))}
    </Box>
  );
}
