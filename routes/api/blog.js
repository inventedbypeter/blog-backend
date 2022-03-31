const express = require("express");
const router = express.Router();
const Blog = require("../../models/Blog");
const Comments = require("../../models/Comments");
var ObjectId = require("mongodb").ObjectId;

// POST http://localhost:5000/api/v1/blog/create/blog

router.post("/create/blog", async (req, res) => {
    const newBlog = new Blog(req.body);
    newBlog.save().catch(err => console.log(err));
    return res.status(200).send(newBlog);
})


// POST http://localhost:5000/api/v1/blog/create/comment

router.post("/create/comment", async (req, res) => {
    const newComment = new Comments(req.body);
    newComment.save().catch(err => console.log(err));
    return res.status(200).send(newComment);
})

// GET http://localhost:5000/api/v1/blog/fetch/blogs

router.get("/fetch/blogs", async (req, res) => {
    const blogsList = await Blog.find()
    return res.status(200).send(blogsList);
})

// GET http://localhost:5000/api/v1/blog/fetch/comments/:blogId

router.get("/fetch/comments/:blogId", async (req, res) => {
    const commentsList = await Comments.find({blogId : req.params.blogId})
    return res.status(200).send(commentsList);
})

module.exports = router;