import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "scenes/navbar";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import UserWidget from "scenes/widgets/UserWidget";

const ProfilePage = () => {
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
          {user && <UserWidget userId={user._id} />}
          <Box m="2rem 0" />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "70%":  undefined}
          mt={isNonMobileScreens ? undefined : "0rem"}
        >
          <MyPostWidget picturePath={user.picturePath}/>
          <PostsWidget isProfile = {true} />
        </Box>
       
      </Box>
    </Box>
  );
};

export default ProfilePage;

