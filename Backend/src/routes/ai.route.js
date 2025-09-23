import express from 'express';
import getReview from '../controller/ai.controller.js'
import getReviewHinglish from '../controller/ai.controllerHinglish.js';
const router = express.Router();

router.post('/get-review', getReview)
router.post('/get-review-hinglish', getReviewHinglish)


export default router;