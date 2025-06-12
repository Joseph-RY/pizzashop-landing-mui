"use client";

import { Box, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1E0C00",
        padding: {
          xs: "5%",
          md: "3%",
        },
        display: "flex",
        flexDirection: "column",
        gap: {
          xs: "50px",
          md: "110px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContents: "space-between",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: {
            xs: "58px",
            md: "84px",
            xl: "154px",
            lg: "254px",
          },
        }}
      >
        <Image src="/logo.png" alt="Logo" width={162} height={37} />
        <Box
          sx={{
            display: "flex",
            flexWrap: {
              xs: "wrap",
              md: "nowrap",
            },
            gap: {
              xs: "34px",
              md: "100px",
            },
          }}
        >
          <Box>
            <Typography sx={{ color: "#A3A3A3" }} variant="h6">
              Home
            </Typography>
            <List
              sx={{
                color: "#515151",
                fontSize: {
                  xs: "14px",
                  md: "18px",
                },
                fontWeight: "medium",
                margin: "0px",
                padding: "0px",
              }}
              component="ul"
            >
              <ListItem sx={{ padding: "10px 0" }}>
                <Link href="/">To Order</Link>
              </ListItem>
              <ListItem sx={{ padding: "10px 0" }}>
                <Link href="/">About us</Link>
              </ListItem>
              <ListItem sx={{ padding: "10px 0" }}>
                <Link href="/">Events</Link>
              </ListItem>
              <ListItem sx={{ padding: "10px 0" }}>
                <Link href="/">Menu</Link>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Box>
              <Typography sx={{ color: "#A3A3A3" }} variant="h6">
                Events
              </Typography>
              <List
                sx={{
                  color: "#515151",
                  fontSize: {
                    xs: "14px",
                    md: "18px",
                  },
                  fontWeight: "medium",
                  margin: "0px",
                  padding: "0px",
                }}
                component="ul"
              >
                <ListItem sx={{ padding: "10px 0" }}>
                  <Link href="/">3 Pizza 1 Free Coffee</Link>
                </ListItem>
                <ListItem sx={{ padding: "10px 0" }}>
                  <Link href="/">2 Pizza for 1 Price</Link>
                </ListItem>
                <ListItem sx={{ padding: "10px 0" }}>
                  <Link href="/">Kitchen Tour</Link>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ color: "#A3A3A3" }} variant="h6">
              Menu
            </Typography>
            <List
              sx={{
                color: "#515151",
                fontSize: {
                  xs: "14px",
                  md: "18px",
                },
                fontWeight: "medium",
                margin: "0px",
                padding: "0px",
              }}
              component="ul"
            >
              <ListItem sx={{ padding: "10px 0" }}>
                <Link href="/">Show All</Link>
              </ListItem>
              <ListItem sx={{ padding: "10px 0" }}>
                <Link href="/">Seaproducts</Link>
              </ListItem>
              <ListItem sx={{ padding: "10px 0" }}>
                <Link href="/">Vegan</Link>
              </ListItem>
              <ListItem sx={{ padding: "10px 0" }}>
                <Link href="/">Meat</Link>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography sx={{ color: "#A3A3A3" }} variant="h6">
              About Us
            </Typography>
            <List
              sx={{
                color: "#515151",
                fontSize: {
                  xs: "14px",
                  md: "18px",
                },
                fontWeight: "medium",
                margin: "0px",
                padding: "0px",
              }}
              component="ul"
            >
              <ListItem sx={{ padding: "10px 0" }}>
                <Link href="/">Our History</Link>
              </ListItem>
              <ListItem sx={{ padding: "10px 0" }}>
                <Link href="/">Why We?</Link>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(90deg, #FFA228, #FF6432)",
            backgroundClip: "text",
            color: "transparent",
            fontSize: {
              xs: "14px",
              md: "20px",
            },
          }}
        >
          <p>+7 (937) 333-55-33</p>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "12px",
            color: "#FF6432",
          }}
        >
          <InstagramIcon fontSize="large" />
          <TwitterIcon fontSize="large" />
          <FacebookOutlinedIcon fontSize="large" />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
