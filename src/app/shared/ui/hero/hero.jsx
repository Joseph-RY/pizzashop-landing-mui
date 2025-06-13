"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import { Box, Typography } from "@mui/material";
import CustomTextSwitch from "../switcher/switche";

export const Hero = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #1c0c00, #2b1102)",
        paddingInline: "5%",
        paddingBlock: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: {
          xs: "column-reverse",
          lg: "row",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "48px",
              lg: "69px",
            },
            fontWeight: "800",
            color: "#FFF",
          }}
          variant="h1"
        >
          The Fastest{" "}
          <Box
            sx={{
              display: {
                xs: "none",
                lg: "inline",
              },
              position: "relative",
              top: "25px",
              left: "15px",
            }}
          >
            <Image src="/arrow-way.png" alt="arrow-way" width={188} height={55} />
          </Box>{" "}
          <br /> Pizza{" "}
          <Box
            sx={{
              display: "inline-block",
              width: "100%",
              maxWidth: 48,
              height: "auto",
            }}
          >
            <Image src="/lightning.png" alt="Lightning" width={48} height={84} style={{ width: "100%", height: "auto" }} />
          </Box>
          Delivery
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "14px",
              lg: "20px",
            },
            color: "#A3A3A3",
          }}
          variant="subtitle1"
        >
          We will deliver juicy pizza for your family in 30 minutes, <br /> if thecourier is late - {""}
          <Link sx={{ color: "#FFF" }} href="/">
            pizza is free!
          </Link>
        </Typography>
        <Box>
          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                lg: "20px",
              },
              color: "#A3A3A3",
              marginBottom: "25px",
            }}
          >
            Cooking progress:
          </Typography>

          <Box
            sx={{
              width: { xs: "100%", sm: "360px" },
              height: { xs: "200px", sm: "240px" },
              borderRadius: "20px",
              overflow: "hidden",
              backgroundImage: 'url("/hero-group.png")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                border: "4px solid inear-gradient(90deg, #FFA228, #FF6432)",
                borderRadius: "50%",
                width: "91px",
                height: "91px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(90deg, #FFA228, #FF6432)",
              }}
            >
              <PlayCircleFilledOutlinedIcon sx={{ fontSize: "100px", cursor: "pointer", color: "#1E0C00" }} />
            </Box>
          </Box>
          <CustomTextSwitch />
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 556,
          height: "auto",
          aspectRatio: "656 / 883",
        }}
      >
        <Image src="/hero-aside.png" alt="Hero-aside" layout="fill" objectFit="contain" priority />
      </Box>
    </Box>
  );
};
