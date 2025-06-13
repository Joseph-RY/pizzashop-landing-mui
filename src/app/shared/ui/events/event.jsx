import { Grid, Box, Typography, Button } from "@mui/material";

export function Events() {
  return (
    <Box
      sx={{
        paddingInline: {
          xs: "10px",
          md: "3%",
        },
        paddingBlock: "100px",
        background: "linear-gradient(90deg, #1c0c00, #2b1102)",
        overflowX: {
          xs: "auto",
          md: "visible",
        },
        width: "100%",
      }}
    >
      <Box
        sx={{
          textAlign: "end",
          marginBlock: "40px",
          display: {
            xs: "block",
            md: "none",
          },
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 800, color: "#fff" }}>
          Events
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "#A3A3A3", fontSize: "24px" }}
        >
          There are regular events in our pizzeria that will allow you to eat
          delicious food for a lower price!
        </Typography>
      </Box>
      <Box
        sx={{
          minWidth: {
            xs: "768px",
            md: "100%",
          },
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          <Grid item>
            <Box
              sx={{
                width: "100%",
                borderRadius: "50px",
                height: "260px",
                backgroundImage: 'url("/popular-banner.png")',
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: "end",
                flexDirection: "column",
                gap: "48px",
                padding: "24px",
                color: "#FFF",
              }}
            >
              <Typography sx={{ fontSize: "30px", fontWeight: 500 }}>
                HOW WE <br /> COOKING
              </Typography>
              <Button
                sx={{
                  width: "205px",
                  height: "40px",
                  background: "linear-gradient(90deg, #FFA228, #FF6432)",
                  borderRadius: "700px",
                  color: "#FFF",
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              >
                More
              </Button>
            </Box>
          </Grid>

          <Grid item>
            <Box
              sx={{
                width: "100%",
                borderRadius: "50px",
                height: "260px",
                backgroundImage: 'url("/event-blog.png")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "end",
                flexDirection: "column",
                gap: "48px",
                padding: "24px",
                color: "#FFF",
              }}
            >
              <Typography sx={{ fontSize: "30px", fontWeight: 500 }}>
                OUR BLOG
              </Typography>
              <Button
                sx={{
                  width: "205px",
                  height: "40px",
                  background: "linear-gradient(90deg, #FFA228, #FF6432)",
                  borderRadius: "700px",
                  color: "#FFF",
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              >
                More
              </Button>
            </Box>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
            item
          >
            <Box
              sx={{
                textAlign: "end",
              }}
            >
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{ fontWeight: 800, color: "#fff" }}
                >
                  Events
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#A3A3A3", fontSize: "24px" }}
                >
                  There are regular events in our pizzeria that will <br />{" "}
                  allow you to eat delicious food for a lower price!
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item sx={{ gridRowStart: 2, gridColumn: "span 2 / span 2" }}>
            <Box
              sx={{
                width: "100%",
                borderRadius: "50px",
                height: "260px",
                backgroundImage: 'url("/event-two-pizza.png")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "end",
                flexDirection: "column",
                gap: "48px",
                padding: "24px",
                color: "#FFF",
                fontSize: "30px",
              }}
            >
              <Typography sx={{ fontSize: "30px", fontWeight: 500 }}>
                TWO PIZZA <br /> FOR 1 PRICE
              </Typography>
              <Button
                sx={{
                  width: "205px",
                  height: "40px",
                  background: "linear-gradient(90deg, #FFA228, #FF6432)",
                  borderRadius: "700px",
                  color: "#FFF",
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              >
                More
              </Button>
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              gridColumn: "span 2 / span 2",
              gridRowStart: 2,
            }}
          >
            <Box
              sx={{
                width: "100%",
                borderRadius: "50px",
                height: "260px",
                backgroundImage: 'url("/event-kitchen.png")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "end",
                flexDirection: "column",
                gap: "48px",
                padding: "24px",
                color: "#FFF",
                fontSize: "30px",
              }}
            >
              <Typography sx={{ fontSize: "30px", fontWeight: 500 }}>
                KITCHEN <br /> TOUR
              </Typography>
              <Button
                sx={{
                  width: "205px",
                  height: "40px",
                  background: "linear-gradient(90deg, #FFA228, #FF6432)",
                  borderRadius: "700px",
                  color: "#FFF",
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              >
                More
              </Button>
            </Box>
          </Grid>

          <Grid item sx={{ gridRowStart: 3 }}>
            <Box
              sx={{
                width: "100%",
                borderRadius: "50px",
                height: "260px",
                backgroundImage: 'url("/event-three-pizza.png")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "end",
                flexDirection: "column",
                gap: "48px",
                padding: "24px",
                color: "#FFF",
                fontSize: "30px",
              }}
            >
              <Typography sx={{ fontSize: "30px", fontWeight: 500 }}>
                FREE COFFEE <br /> FOR 3 PIZZA
              </Typography>
              <Button
                sx={{
                  width: "205px",
                  height: "40px",
                  background: "linear-gradient(90deg, #FFA228, #FF6432)",
                  borderRadius: "700px",
                  color: "#FFF",
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              >
                More
              </Button>
            </Box>
          </Grid>

          <Grid item sx={{ gridRowStart: 3 }}>
            <Box
              sx={{
                width: "100%",
                borderRadius: "50px",
                height: "260px",
                backgroundImage: 'url("/event-instagram.png")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "end",
                flexDirection: "column",
                gap: "48px",
                padding: "24px",
                color: "#FFF",
                fontSize: "30px",
              }}
            >
              <Typography sx={{ fontSize: "30px", fontWeight: 500 }}>
                OUR <br /> INSTAGRAM
              </Typography>
              <Button
                sx={{
                  width: "205px",
                  height: "40px",
                  background: "linear-gradient(90deg, #FFA228, #FF6432)",
                  borderRadius: "700px",
                  color: "#FFF",
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              >
                More
              </Button>
            </Box>
          </Grid>

          <Grid item sx={{ gridRowStart: 3 }}>
            <Box
              sx={{
                width: "100%",
                borderRadius: "50px",
                height: "260px",
                backgroundImage: 'url("/event-how-cooking.png")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "end",
                flexDirection: "column",
                gap: "48px",
                padding: "24px",
                color: "#FFF",
                fontSize: "30px",
              }}
            >
              <Typography sx={{ fontSize: "30px", fontWeight: 500 }}>
                WHERE ARE <br /> YOU CHOOSE US?
              </Typography>
              <Button
                sx={{
                  width: "205px",
                  height: "40px",
                  background: "linear-gradient(90deg, #FFA228, #FF6432)",
                  borderRadius: "700px",
                  color: "#FFF",
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              >
                More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
