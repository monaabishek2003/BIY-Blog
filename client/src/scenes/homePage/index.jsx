import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const user = useSelector((state) => state.user);
  
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "28%" : undefined}>
          {user?<UserWidget userId={user._id} /> : <AdvertWidget/>}
          <Box m="2rem 0" />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "70%":  undefined}
          mt={isNonMobileScreens ? undefined : "0rem"}
        >
          <PostsWidget isProfile = {false} />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
