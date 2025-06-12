"use client";

import React, { useState } from "react";
import { Box, Button, Drawer, List, ListItem } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#1E0C00",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "3%",
        fontSize: "17px",
        fontWeight: "medium",
      }}
    >
      <Image src="/logo.png" alt="Logo" width={162} height={37} />
      <List
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          gap: 10,
          color: "#A3A3A3",
        }}
        component="ul"
      >
        <ListItem
          sx={{
            background: "linear-gradient(90deg, #FFA228, #FF6432)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          <Link href="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="/">Menu</Link>
        </ListItem>
        <ListItem>
          <Link href="/">Events</Link>
        </ListItem>
        <ListItem>
          <Link href="/">About</Link>
        </ListItem>
      </List>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: {
            xs: 1,
            md: "26px",
          },
        }}
      >
        <Button
          sx={{
            width: "163px",
            background: "linear-gradient(90deg, #FFA228, #FF6432)",
            borderRadius: "700px",
            color: "#FFF",
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          Log in
        </Button>
        <Box>
          <LocalMallOutlinedIcon
            sx={{
              fontSize: "43px",
              color: "#FFF",
              background: "linear-gradient(90deg, #FFA228, #FF6432)",
              padding: "8px",
              borderRadius: "50%",
            }}
          />
        </Box>
        <Button
          onClick={toggleDrawer(true)}
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon sx={{ fontSize: 50, color: "#FF6432" }} />
        </Button>

        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <List sx={{ width: 250 }}>
            <ListItem
              sx={{
                background: "linear-gradient(90deg, #FFA228, #FF6432)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              <Link href="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link href="/">Menu</Link>
            </ListItem>
            <ListItem>
              <Link href="/">Events</Link>
            </ListItem>
            <ListItem>
              <Link href="/">About</Link>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
