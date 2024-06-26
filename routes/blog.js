const express = require('express');
const router = express.Router();

//Import Controller
const {dummylink, likePost, unlikePost} = require('../controllers/LikeController');
const {createComment} = require("../controllers/CommentController");
const { createPost, getAllPosts } = require('../controllers/PostController');


//Mapping Create
router.get("/dummyroute", dummylink);
router.post("/comments/create", createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike", unlikePost);
module.exports = router;