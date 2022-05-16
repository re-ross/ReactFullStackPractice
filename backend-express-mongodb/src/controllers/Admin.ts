import { Response, Request } from "express";
import mongoose from "mongoose";
import Twitter from "../models/Twitter";

export const getTweets = (req: Request, res: Response): void => {
  Twitter.find((err: any, data: any) => {
    console.log(data);

    res.json(data);

    if (err) {
      console.log(err);
    }
  });
};

export const getTweet = async (req: Request, res: Response): Promise<any> => {
  const tweetId = req.params.tweetId;
  console.log("Tweet ID", tweetId);
  // This line of code fixes the CastError: Cast to ObjectId failed for value "favicon.ico" (type string) at path "_id" for model "contents"

  if (!mongoose.Types.ObjectId.isValid(tweetId)) return false;

  await Twitter.findById(tweetId).exec();

  Twitter.findById(tweetId, (err: any, tweet: any) => {
    console.log(tweet);

    res.json(tweet);

    if (err) {
      console.log(err);
    }
  });
};

export const postTweet = (req: Request, res: Response) => {
  const { tweet, img } = req.body;

  const twitter = new Twitter({ tweet: tweet, img: img });

  twitter.save();

  console.log("Tweet has been created");

  res.status(201).json({ msg: "Tweet has been created" });
};

export const updateTweet = (req: Request, res: Response) => {
  const tweetId = req.params.tweetId;

  const { tweet, img } = req.body;

  Twitter.findByIdAndUpdate(tweetId, { tweet: tweet, img: img }).then(() => {
    console.log(`Tweet ${tweetId} Updated`);

    res.json({ msg: `Tweet ${tweetId} has been updated` });
  });
};

export const deleteTweet = (req: Request, res: Response) => {
  const tweetId = req.body.tweetId;

  Twitter.findByIdAndRemove(tweetId, () => {
    res.json({ msg: `Tweet ${tweetId} has been deleted.` });
  });
};
