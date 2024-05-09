
const Post = require('../model/PostModel');
const Like = require('../model/LikeModel');

exports.likePost = async (req,res) => {
    try{
        const {post,user} = req.body;
        const like = new Like({
            post,user
        });
        const savedLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id}}, {new:true})
        .populate('likes').exec();
         
        res.json({
            post:updatedPost
        });
    }
    catch(e){
        return res.status(400).json({
            error: "Error while fetching post"
        });
    };
};

exports.unlikePost = async (req,res) => {
    try{
        const {post,like} = req.body;
        const deleteLike = await Like.findOneAndDelete({post:post,_id:like});
        
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deleteLike._id}},{new:true});

        res.json({
            post:updatedPost
        });
    }
    catch(e){
        
    }
}

exports.dummylink = (req,res) => {
    res.send("<h1>This is your Dummy page</h1>");
}