import express from "express";

import {
  getTweets,
  getTweet,
  postTweet,
  updateTweet,
  deleteTweet,
} from "../controllers/Admin";

const router = express.Router();

router.get("/", getTweets);
router.get("/:tweetId", getTweet);
router.post("/tweet", postTweet);
router.delete("/delete", deleteTweet);
router.put("/:tweetId", updateTweet);

export default router;
