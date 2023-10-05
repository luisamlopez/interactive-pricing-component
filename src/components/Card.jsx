import { useEffect, useState } from "react";
import SpecialSwitch from "./Switch";
import SpecialSlider from "./Slider";
import {
  Box,
  Button,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import checkIcon from "../assets/icon-check.svg";

const Card = () => {
  const [pageViews, setPageViews] = useState(10);
  const [price, setPrice] = useState(pageViews * 0.16);
  const [newPrice, setNewPrice] = useState(price);
  const [discount, setDiscount] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handlePageViews = (e) => {
    setPageViews(e.target.value);
    setPrice(e.target.value * 0.16);
    let oldPrice = price;
    if (!discount) {
      setNewPrice(oldPrice + price * 0.25);
    } else {
      setNewPrice(oldPrice - price * 0.25);
    }
  };

  const addDiscount = (e) => {
    setDiscount(e.target.checked);
    let oldPrice = price;
    if (!discount) {
      setNewPrice(oldPrice - price * 0.25);
    } else {
      setNewPrice(oldPrice + price * 0.25);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Card
      sx={{
        background: "var(--white)",
        borderRadius: " 10px",
        padding: "2rem",
        margin: "1rem",
        boxShadow: " 0px 10px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "normal",
        justifyContent: "center",
        width: {
          xs: "100%",
          sm: "500px",
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Box
            sx={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "var(--grayish-blue)",
              textTransform: "uppercase",
              placeSelf: "left",
              letterSpacing: "0.25rem",
            }}
          >
            <Typography>{pageViews}K Pageviews</Typography>
          </Box>
          <Box
            sx={{
              display: {
                xs: "block",
                sm: "none",
                width: "100%",
              },
            }}
          >
            <SpecialSlider onChange={handlePageViews} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 0,
              height: "fit-content",
            }}
          >
            <Typography
              sx={{
                fontSize: "3rem",
                fontWeight: 700,
                color: "var(--dark-desaturated-blue)",
                textTransform: "uppercase",
                placeSelf: "left",
                margin: 0,
                mr: "1rem",
              }}
            >
              ${!discount ? price.toFixed(2) : newPrice.toFixed(2)}
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--grayish-blue)",
                placeSelf: "left",
                marginBottom: "2rem",
              }}
            >
              / month
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: {
              xs: "none",
              sm: "block",
              width: "100%",
            },
          }}
        >
          <SpecialSlider onChange={handlePageViews} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            margin: "1rem",
            gap: "0.5rem",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "var(--grayish-blue)",
              fontSize: "12px",
              placeSelf: "center",
            }}
          >
            Monthly Billing
          </Typography>
          <SpecialSwitch onClick={addDiscount} />
          <Typography
            sx={{
              color: "var(--grayish-blue)",
              fontSize: "12px",
              placeSelf: "center",
            }}
          >
            Yearly Billing
          </Typography>
          <Box
            sx={{
              backgroundColor: "hsl(15, 100%, 95%)",
              borderRadius: "10px",
              fontWeight: 700,
              padding: "5px",
            }}
          >
            <Typography
              sx={{
                color: "var(--light-red)",
                margin: 0,
                fontSize: "10px",
              }}
            >
              {windowWidth > 375 ? "25% discount" : "-25%"}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            alignItems: {
              xs: "center",
              sm: "start",
            },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              fontSize: "12px",
              color: "var(--grayish-blue)",
              textAlign: {
                xs: "center",
                sm: "left",
              },
            }}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: {
                  xs: "center",
                  sm: "left",
                  md: "left",
                  lg: "left",
                },
                justifyContent: "space-between",
                padding: 0,
              }}
            >
              <li
                style={{
                  backgroundImage: `url(${checkIcon})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                  paddingLeft: "1rem",
                  listStyle: "none",
                  marginBottom: "1rem",
                }}
              >
                Unlimited websites
              </li>
              <li
                style={{
                  backgroundImage: `url(${checkIcon})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                  paddingLeft: "1rem",
                  listStyle: "none",
                  marginBottom: "1rem",
                }}
              >
                100% data ownership
              </li>
              <li
                style={{
                  backgroundImage: `url(${checkIcon})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                  paddingLeft: "1rem",
                  listStyle: "none",
                  marginBottom: "1rem",
                }}
              >
                Email reports
              </li>
            </ul>
          </Box>

          <Button
            sx={{
              backgroundColor: "var(--dark-desaturated-blue)",
              color: "var(--grayish-blue)",
              borderRadius: "25px",
              border: "none",
              padding: "1rem 3rem",
              cursor: "pointer",
              fontSize: "12px",
              textTransform: "none",
              height: "fit-content",
              placeSelf: "center",
              //on hover change font color to white
              "&:hover": {
                backgroundColor: "var(--dark-desaturated-blue)",
                color: "var(--white)",
              },
            }}
          >
            Start my trial
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
export default Card;
