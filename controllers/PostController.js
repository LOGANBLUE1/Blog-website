const Post = require('../model/PostModel');

exports.createPost = async(req,res) => {
    try{
        const {title,body} = req.body;
        console.log(title,body);
        const post = new Post({
            title,body
        });

        const savedPost = await post.save();

        res.json({
            post: savedPost
        });
    }
    catch(e){
        return res.status(500).json({
            error: "Error while creating post"
        });
    }
};

exports.getAllPosts = async (req,res) => {
    try{
        const posts = await Post.find().populate("comments").populate("likes").exec();
        res.json({
            posts,
        })
    }
    catch(e){
        return res.status(500).json({
            error: "Error while getting posts"
        });
    }
}