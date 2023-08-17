
  import { Box } from "@mui/material";
  import WidgetWrapper from "components/WidgetWrapper";
  import { useDispatch} from "react-redux";
  import { setPost } from "state";
  import {useMediaQuery} from "@mui/material";
import {AiFillHeart, AiFillEye} from 'react-icons/ai'
import {BsFillFileBarGraphFill} from 'react-icons/bs'

  const ExpWidget = ({
    postId,
    userId,
    expName,
    description,
    difficulty,
    subject,
    picturePath,
    materials_list,
    precautions,
    claps,
    views,
    instructions
  }) => {
    const dispatch = useDispatch();
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  
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
      <WidgetWrapper m="2rem auto" width={isNonMobileScreens ? "80%" : '100%'}>
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
        </Box>
        <Box>
            <h3 style={{display:'inline-block', marginBottom:'0', paddingRight:'1rem'}}>Precautions :</h3>
            <span>{precautions}</span>
        </Box>

        <Box>
            <h3 style={{display:'inline-block', marginBottom:'0.5rem', paddingRight:'1rem'}}>Materials Required :</h3>
            <Box sx={{display:"flex", gap:'1.2rem', margin:'0 2rem'}}>
                {materials_list.map(
                    (item,index) => (
                    <div key={index} style={{backgroundColor:"rgb(0 213 250)", padding:'0.5rem 1rem', margin:'0' , borderRadius:'6px'}}>
                        <p style={{margin:'0'}}>{item.name} - {item.quantity} Nos</p>
                    </div>
                    )
                )}
            </Box>
        </Box>

        <Box>
            <h3 style={{ marginBottom:'0.5rem'}}>Instructions : </h3>
            {instructions.map((item, index) => (
                <Box key={index} sx={{display:'flex', gap:'3rem',alignItems:'center', margin : '2rem'}}>
                    <Box style={{backgroundColor:"rgb(0 213 250 / 14%)", padding:'0.5rem 1rem', margin:'0' , borderRadius:'6px'}}sx={{textAlign:'left', flexBasis:'70%'}}>
                        <p><span>{index+1}.</span> {item.description}</p>
                    </Box>
                </Box>
            ))}
        </Box>
      </WidgetWrapper>
    );
  };
  
  export default ExpWidget;
  