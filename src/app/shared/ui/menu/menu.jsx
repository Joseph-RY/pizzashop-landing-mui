"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import MenuButtons from "../menu-buttons/menu-buttons";
import Pizza from "../pizza/pizza";
import MenuBanner from "../menu-banner/menu-banner";

const pizzaOne = [
  {
    id: 1,
    image: "/italian-pizza.png",
    name: "Italian",
    price: 8.35,
  },
  {
    id: 2,
    image: "/venecia-pizza.png",
    name: "Venecia",
    price: 7.35,
  },
  {
    id: 3,
    image: "/meat-pizza.png",
    name: "Meat",
    price: 9.35,
  },
  {
    id: 4,
    image: "/cheese-pizza.png",
    name: "Cheese",
    price: 8.35,
  },
];

const pizzaTwo = [
  {
    id: 1,
    image: "/argentina-pizza.png",
    name: "Argentina",
    price: 7.35,
  },
  {
    id: 2,
    image: "/gribnaya-pizza.png",
    name: "Gribnaya",
    price: 6.35,
  },
  {
    id: 3,
    image: "/tomato-pizza.png",
    name: "Tomato",
    price: 7.35,
  },
  {
    id: 4,
    image: "/italian-pizza.png",
    name: "Italian x2",
    price: 8.35,
  },
];

export const Menu = () => {
  return (
    <Box
      sx={{
        paddingInline: "5%",
        background: "linear-gradient(90deg, #1c0c00, #2b1102)",
      }}
    >
      <Typography
        sx={{ textAlign: "center", fontWeight: "800", color: "#FFF" }}
        variant="h2"
      >
        Menu
      </Typography>
      <MenuButtons />
      <Pizza data={pizzaOne} />
      <MenuBanner />
      <Pizza data={pizzaTwo} />
    </Box>
  );
};
