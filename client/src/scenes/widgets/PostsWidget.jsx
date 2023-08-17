import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";

const     PostsWidget = ({ isProfile = false }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getFeedPosts = async () => {
    const response = await fetch("http://localhost:3001/posts/", {
      method: "GET",
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  const getUserPosts = async () => {
    const response = await fetch(
      `http://localhost:3001/posts/${user._id}/posts`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };



  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getFeedPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      {posts?.map(
        ({
          _id, 
          userId,
          expName,
          description,
          difficulty,
          subject,
          picturePath,
          claps,
          views,
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            userId={userId}
            expName={expName}
            description={description}
            difficulty={difficulty}
            subject={subject}
            picturePath={picturePath}
            claps={claps}
            views={views}
          />
        )
      )}
    </>
  );
};

export default PostsWidget;
