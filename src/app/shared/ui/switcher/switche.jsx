import React, { useState } from "react";
import Box from "@mui/material/Box";

export default function SlidingToggle() {
  const [selected, setSelected] = useState("pizzaMenu");

  return (
    <Box
      sx={{
        marginTop: "55px",
        position: "relative",
        width: "100%",
        maxWidth: 388,
        height: 62,
        borderRadius: 31,
        userSelect: "none",
        cursor: "pointer",
        display: "flex",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 31,
          padding: "3px",
          background: "linear-gradient(90deg, #FFA228, #FF6432)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "relative",
          flex: 1,
          height: "100%",
          borderRadius: 31,
          backgroundColor: "transparent",
          boxShadow: "inset 0 0 8px rgba(0,0,0,0.15)",
          display: "flex",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 3,
            left: selected === "pizzaMenu" ? "3px" : "calc(50% + 3px)",
            width: "calc(50% - 6px)",
            height: 58,
            background: "linear-gradient(90deg, #FFA228, #FF6432)",
            borderRadius: 31,
            boxShadow: "0 0 6px rgba(255, 100, 50, 0.7)",
            transition: "left 0.3s ease",
            willChange: "left",
            zIndex: 2,
          }}
        />

        <Box
          onClick={() => setSelected("pizzaMenu")}
          sx={{
            flex: 1,
            zIndex: 3,
            textAlign: "center",
            lineHeight: "62px",
            fontWeight: 600,
            fontSize: 22,
            color: selected === "pizzaMenu" ? "#fff" : "transparent",
            background:
              selected !== "pizzaMenu"
                ? "linear-gradient(90deg, #FFA228, #FF6432)"
                : "none",
            WebkitBackgroundClip: selected !== "pizzaMenu" ? "text" : "unset",
            WebkitTextFillColor:
              selected !== "pizzaMenu" ? "transparent" : "unset",
            userSelect: "none",
            transition: "color 0.3s ease, background 0.3s ease",
          }}
        >
          To order
        </Box>
        <Box
          onClick={() => setSelected("toOrder")}
          sx={{
            flex: 1,
            zIndex: 3,
            textAlign: "center",
            lineHeight: "62px",
            fontWeight: 600,
            fontSize: 22,
            color: selected === "toOrder" ? "#fff" : "transparent",
            background:
              selected !== "toOrder"
                ? "linear-gradient(90deg, #FFA228, #FF6432)"
                : "none",
            WebkitBackgroundClip: selected !== "toOrder" ? "text" : "unset",
            WebkitTextFillColor:
              selected !== "toOrder" ? "transparent" : "unset",
            userSelect: "none",
            transition: "color 0.3s ease, background 0.3s ease",
          }}
        >
          Pizza-Menu
        </Box>
      </Box>
    </Box>
  );
}
