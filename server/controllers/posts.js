import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { userId, 
            expName,
            description,
            difficulty, 
            subject, 
            picturePath, 
            materials_list,
            precautions, 
            instructions,
          } = req.body;
    const newPost = new Post({
            userId, 
            expName,
            description,
            difficulty, 
            subject, 
            picturePath, 
            materials_list : JSON.parse(materials_list), 
            precautions,
            instructions : JSON.parse(instructions),
    });
    console.log(req.body);
    await newPost.save();

    const post = await Post.find({ userId });
    res.status(201).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    // console.log("you called me");
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};



export const getPost = async (req,res) => {
  try{
    console.log("you called me");
    const { postId } = req.params;
    const post =  await Post.findOne({ _id: postId });
    res.status(200).json(post);
  }catch(err){
    console.log(err.message);
    res.status(404).json({ message: err.message });
  }
}

/* UPDATE */
export const clapPost = async (req, res) => {
  try {
    const { postId } = req.params;
    
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $inc: { claps: 1 } }, // Increment claps by 1
      { new: true } // Return the updated document
    );
    
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const viewPost = async (req, res) => {
  try {
    const { postId } = req.params;
    
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $inc: { views: 1 } }, // Increment claps by 1
      { new: true } // Return the updated document
    );
    
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
