import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          DIY-Blog
        </Typography>
        <Typography color={medium}>FAV SPOT</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/exp.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <Typography color={medium} m="0.5rem 0">
        DIY-Blog is your go-to source for clear and concise details about various lab experiments. Get step-by-step instructions, safety tips, and materials lists for a wide range of experiments in different fields. Explore, learn, and experiment with confidence!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
