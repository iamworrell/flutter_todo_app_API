const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GET BACK ALL THE POSTS
router.get('/', async (req, res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});

//SUBMITS A POST
router.post('/', async (req, res) => {
    const post = new Post({
        task: req.body.task
    }
    );
    try {
    const savedPost = await post.save()
    res.json(savedPost);
    }catch(err){
        res.json({message: err})
    }
    
    /*try {
        const response =     await post.save();
        console.log(response)
        //mongoose.connection.close()
    } catch(e) {
        console.log(e)
        res.json({message: e})
    }*/
})
//SPECIFIC POST
router.get('/:postId', async (req, res) => {
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch(err){
    res.json({message: err});
    }
    
});

//Delete Post
router.delete('/:postId', async (req, res) => {
    try{
    const removedPost = await Post.remove({_id: req.params.postId});
    res.json(removedPost);
    }catch(err){
        res.json({message: err});
    }
    
});

//Update a post
router.patch('/:postId', async (req, res) => {
    try{
    const updatedPost = await Post.updateOne({_id: req.params.postId}, {$set : {console: req.body.console}});
    res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
    
})


module.exports = router; 