import { Box, IconButton, useTheme } from "@mui/material";
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import WidgetWrapper from "components/WidgetWrapper";
import { useDispatch } from "react-redux";
import { setPost } from "state";
import { useNavigate } from "react-router-dom";
import {AiFillHeart, AiFillEye} from 'react-icons/ai'
import {BsFillFileBarGraphFill} from 'react-icons/bs'

const PostWidget = ({
  postId,
  userId,
  expName,
  description,
  difficulty,
  subject,
  picturePath,
  claps,
  views,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { palette } = useTheme();

  const plusClap = async () => {
    const response = await fetch(`https://biy-blog.onrender.com/posts/${postId}/clap`, {
      method: "PUT",
    });
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  const plusView = async () => {
    const response = await fetch(`https://biy-blog.onrender.com/posts/${postId}/view`, {
      method: "PUT",
    });
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  return (
    <WidgetWrapper m="0 0 2rem 0">
            <Box sx={{display:'flex', gap:'3rem'}}>
            <Box sx={{flexBasis:'20%'}}>
                <img src={`https://biy-blog.onrender.com/assets/${picturePath}`} alt="Title Image" width={"100%"} height="auto" style={{borderRadius:'6px'}}/>
            </Box>
            <Box sx={{textAlign:'left', flexBasis:'70%'}}>
                <h1>{expName}</h1>
                <Box sx={{display:'flex', gap:'1rem', alignItems:'stretch', position:'relative'}}>
                    <Box sx={{background:"rgb(0 213 250)", borderRadius:'4px' , padding:'0.7rem' , width:'fit-content', height:'100%'}}>
                        {subject}
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', border:'2px solid rgb(0 213 250)', borderRadius:'4px' , padding:'0 0.7rem' , width:'fit-content'}}>
                        <AiFillHeart size={30} fill="rgb(0 213 250)"/> {claps}
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', border:'2px solid rgb(0 213 250)', borderRadius:'4px' , padding:'0 0.7rem' , width:'fit-content'}}>
                        <AiFillEye size={30} fill="rgb(0 213 250)"/> {views}
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', border:'2px solid rgb(0 213 250)', borderRadius:'4px' , padding:'0 0.7rem' , width:'fit-content'}}>
                        <BsFillFileBarGraphFill size={30} fill="rgb(0 213 250)" style={{margin:'0 0.5rem 0 0'}}/> Difficulty {difficulty}
                    </Box>
                </Box>
                <p>{description}</p>
            </Box>
            <Box
              onClick={() => {
              navigate(`/exp/${postId}`);
              navigate(0);
              }}
              >
              <IconButton>        
                <OpenInNewOutlinedIcon/>
              </IconButton>
            </Box>
        </Box>
    </WidgetWrapper>
  );
};

export default PostWidget;
