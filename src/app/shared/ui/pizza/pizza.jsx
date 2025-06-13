"use clint";

import React from "react";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";

const Pizza = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "40px",
        justifyContent: "space-between",
        overflowX: {
          xs: "scroll",
          lg: "hidden",
        },
      }}
    >
      {data.map((e) => {
        return (
          <Box
            key={e.id}
            sx={{
              position: "relative",
              width: {
                xs: "auto",
                lg: "20%",
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
              padding: "150px 30px 30px 30px",
              backgroundColor: "#210A01",
              borderRadius: "30px",
              textAlign: "center",
              marginTop: "90px",
            }}
          >
            <Image
              src={e.image}
              alt={e.name}
              width={259}
              height={257}
              style={{
                position: "absolute",
                top: "-120px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: 500,
                color: "#FFF",
              }}
              variant="h3"
            >
              {e.name}
            </Typography>
            <Typography
              sx={{ textAlign: "start", fontSize: "14px", color: "#A3A3A3" }}
              variant="subtitle1"
            >
              Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "space-between",
                  lg: "space-evenly",
                },
                width: "100%",
              }}
            >
              <Box
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBlock: "14px",
                  paddingInline: "14px",
                  border: "2px solid #A3A3A3",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                }}
              >
                <Typography
                  sx={{ fontSize: "14px", color: "#A3A3A3" }}
                  variant="subtitle1"
                >
                  22
                </Typography>
              </Box>
              <Box
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBlock: "14px",
                  paddingInline: "14px",
                  background: "linear-gradient(90deg, #FFA228, #FF6432)",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                }}
              >
                <Typography
                  sx={{ fontSize: "14px", color: "#FFF" }}
                  variant="subtitle1"
                >
                  28
                </Typography>
              </Box>
              <Box
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBlock: "14px",
                  paddingInline: "14px",
                  border: "2px solid #A3A3A3",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                }}
              >
                <Typography
                  sx={{ fontSize: "14px", color: "#A3A3A3" }}
                  variant="subtitle1"
                >
                  33
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                padding: "2px",
                marginBlock: "10px",
                borderRadius: "999px",
                background: "linear-gradient(90deg, #FFA228, #FF6432)",
                display: "inline-block",
              }}
            >
              <Button
                sx={{
                  width: "194px",
                  borderRadius: "1000px",
                  background: "#210A01",
                  color: "#FFA228",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "16px",
                  paddingInline: 3,
                  paddingBlock: 1,
                  minWidth: "auto",
                }}
              >
                + Ingredients
              </Button>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", color: "#FFF", gap: "2px" }}>
                <Typography
                  sx={{ fontWeight: 600, fontSize: "25px" }}
                  variant="subtitle1"
                >
                  {e.price}
                </Typography>
                <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
                  $
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Box
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBlock: "9px",
                    paddingInline: "9px",
                    border: "2px solid #A3A3A3",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "14px", color: "#A3A3A3" }}
                    variant="subtitle1"
                  >
                    <Box
                      sx={{
                        width: "8px",
                        height: "2px",
                        backgroundColor: "#A3A3A3",
                        borderRadius: "1px",
                      }}
                    />
                  </Typography>
                </Box>
                <Typography
                  sx={{ fontSize: "30px", color: "#A3A3A3" }}
                  variant="subtitle1"
                >
                  1
                </Typography>
                <Box
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBlock: "9px",
                    paddingInline: "9px",
                    background: "linear-gradient(90deg, #FFA228, #FF6432)",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "20px", fontWeight: 500, color: "#FFF" }}
                    variant="subtitle1"
                  >
                    +
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Button
              sx={{
                width: "194px",
                height: "45px",
                background: "linear-gradient(90deg, #FFA228, #FF6432)",
                borderRadius: "700px",
                fontSize: "18px",
                textTransform: "none",
                color: "#FFF",
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              Order Now
            </Button>
          </Box>
        );
      })}
    </Box>
  );
};

export default Pizza;
