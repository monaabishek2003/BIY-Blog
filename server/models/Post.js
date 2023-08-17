import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    expName: {
      type: String,
      required: true,
    },
    description: { 
      type: String, 
      required: true 
    },
    difficulty: { 
      type: Number, 
      min: 1, 
      max: 5, 
      required: true 
    },
    subject: {
      type:String,
      required: true,
    },
    picturePath: {
      type:String,
      default : "",
    },
    materials_list: {
    type:[{ name: String, quantity: String }],
    default : [],
    },
    precautions: { 
      type: String ,
      default: "",
    },
    instructions:{
      type: [{ description: String } ],
      default: [],
    },
    views: { 
      type: Number, 
      default: 0 
    }, 
    claps: { 
      type: Number, 
      default: 0 
    } 
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
