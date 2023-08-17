import express from "express";
import { 
    getFeedPosts, 
    getUserPosts, 
    getPost, 
    clapPost,
    viewPost,
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", getFeedPosts);
router.get("/:postId",getPost);
router.get("/:userId/posts", verifyToken, getUserPosts);


/* UPDATE */
router.put("/:postId/clap", clapPost);
router.put("/:postId/view", viewPost);

export default router;
