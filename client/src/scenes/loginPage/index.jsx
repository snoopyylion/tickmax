import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)"); // Media query for screen size

  return (
    <Box display="flex" minHeight="100vh" flexDirection={isNonMobileScreens ? "row" : "column"}>
      {/* Left Section: Logo */}
      {isNonMobileScreens && (
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor={theme.palette.background.alt}
          p="2rem"
        >
          <Typography fontWeight="bold" fontSize="48px" color="primary">
            TickMax
          </Typography>
        </Box>
      )}
      
      {/* Right Section: Form */}
      <Box
        flex={isNonMobileScreens ? "1" : "none"}
        width={isNonMobileScreens ? "50%" : "100%"}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={isNonMobileScreens ? "4rem" : "2rem"}
        backgroundColor={theme.palette.background.default}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem", textAlign: "center" }}>
          Welcome to TickMax, the Social Media for Ticket and Event Updates!
        </Typography>
        <Box
          width="100%"
          maxWidth="400px"
          p="2rem"
          borderRadius="1.5rem"
          backgroundColor={theme.palette.background.alt}
        >
          <Form />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
