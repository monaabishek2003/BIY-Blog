import { Box, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExpWidget from "scenes/widgets/ExpWidget"

const ExpPage = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const user = useSelector((state) => state.user);

  const getPost = async () => {
    const response = await fetch(
      `http://localhost:3001/posts/${postId}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setPost(data);
  }
  useEffect(() => { getPost();}, []);
  // console.log(postId);

  return (
    <Box>
      <Navbar />
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
        
          {/* <ExpWidget userId={_id} /> */}
          { post && <ExpWidget
            key={post._id}
            postId={post._id}
            userId={post.userId}
            expName={post.expName}
            description={post.description}
            precautions={post.precautions}
            difficulty={post.difficulty}
            subject={post.subject}
            materials_list={post.materials_list}
            picturePath={post.picturePath}
            claps={post.claps}
            views={post.views}
            instructions={post.instructions}
          />}
        </Box>
    </Box>
  );
};

export default ExpPage;
