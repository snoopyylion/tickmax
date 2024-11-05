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
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/post3.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Purchase Tickets</Typography>
        <Typography color={medium}>tickmax.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Discover the Best Entertainment, All in One Place Whether you’re a music
        lover, theater enthusiast, sports fan, or looking for an exciting family
        event, our platform brings you closer to the action. From popular
        concerts and theater shows to thrilling sporting events, find tickets to
        the most exciting experiences near you.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
