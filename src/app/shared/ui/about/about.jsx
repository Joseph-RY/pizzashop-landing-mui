import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
        justifyContent: "space-between",
        paddingInline: {
          xs: "10px",
          lg: "3%",
        },
        paddingBlock: {
          xs: "40px",
          md: "100px",
        },
        gap: {
          xs: "32px",
          md: 0,
        },
        background: "linear-gradient(90deg, #1c0c00, #2b1102)",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "45%",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "40px",
              md: "70px",
            },
            color: "#FFF",
            fontWeight: 800,
            mb: "16px",
          }}
          variant="h2"
        >
          About us
        </Typography>

        <Typography sx={{ color: "#A3A3A3", mb: "16px" }} variant="subtitle1">
          In just a couple of years, we have opened 6 outlets in different
          cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future we
          plan to develop the network in other major cities of Russia.
        </Typography>

        <Box sx={{ mb: "16px" }}>
          <Image
            src="/about-us-group.png"
            alt="about-group"
            width={490}
            height={190}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        <Typography sx={{ color: "#A3A3A3" }}>
          The kitchen of each point is at least: 400-500 sq. m. meters, hundreds
          of employees, smoothly performing work in order to receive / prepare /
          form / deliver customer orders on time.
        </Typography>
      </Box>
      <Image src="/about-arrow.png" alt="about-arrow" width={120} height={55} />
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "50%",
          },
        }}
      >
        <Image
          src="/about-us-aside.png"
          alt="about-aside"
          width={550}
          height={540}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};
