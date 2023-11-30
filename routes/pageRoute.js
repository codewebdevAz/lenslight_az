import express from 'express'
import pageController from '../controllers/pageController.js'
const router = express.Router();


router.get('/', pageController.blog);
router.get('/about', pageController.blog_about);

export default router;