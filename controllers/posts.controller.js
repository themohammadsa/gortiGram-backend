const { Post } = require('../models/post.model');

const getPosts = async (req, res) => {
  try {
    const postsData = await Post.find({}).limit(30).sort({ createdAt: -1 });

    res.json({
      success: true,
      postsData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again.',
    });
  }
};

const deletePost = async (req, res) => {
  const { postId } = req.body;
  try {
    const response = await Post.findOneAndDelete({ _id: postId });
    res.json({
      success: true,
      message: 'Post deleted',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again.',
    });
  }
};

module.exports = { getPosts, deletePost };
