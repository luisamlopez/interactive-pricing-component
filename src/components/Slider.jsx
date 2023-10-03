import { Slider, SliderThumb, styled } from "@mui/material";
import sliderIcon from "../assets/icon-slider.svg";

const Pricing = styled(Slider)(({ theme }) => ({
  color: "var( --soft-cyan)",
  height: 5,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 30,
    width: 30,
    backgroundColor: " var( --strong-cyan)",
    padding: "5px",
    border: "1px solid currentColor",
    boxShadow: "0px 12px 30px 16px rgba(165,243,235,1)",
    "&:hover": {
      boxShadow: "0px 12px 30px 16px rgba(165,243,235,1)",
      backgroundColor: " hsl(174, 77%, 55%)",
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: "#bfbfbf",
    opacity: 0.3,
    height: 6,
  },
}));

function PricingThumb(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <img src={sliderIcon} alt="slider icon" height={12} />
    </SliderThumb>
  );
}

export default function SpecialSlider({ onChange }) {
  return (
    <Pricing
      slots={{ thumb: PricingThumb }}
      //   getAriaLabel={(index) =>
      //     index === 0 ? "Minimum price" : "Maximum price"
      //   }
      //   defaultValue={[20, 40]}
      max={200}
      onChange={onChange}
    />
  );
}
