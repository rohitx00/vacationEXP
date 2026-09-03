import express from 'express';
import { 
  getPosts, 
  getPostById, 
  createPost, 
  toggleLike, 
  addComment,
  getUserPosts
} from '../controllers/postController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/user/me', protect, getUserPosts);
router.get('/:id', getPostById);
router.post('/', protect, createPost);
router.post('/:id/like', protect, toggleLike);
router.post('/:id/comment', protect, addComment);

export default router;
