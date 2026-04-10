import { connectDB } from "@/config/connect-db";
import { Post } from "@/model/Post";

export default async function handler(req: any, res: any) {
  await connectDB();

  if (req.method === "GET") {
    const posts = await Post.find();
    return res.status(200).json(posts);
  }

  if (req.method === "POST") {
    const { title, body, tags, userId } = req.body;
    const createdPost = await Post.create({
      title,
      body,
      tags,
    });

    return res.status(201).json({
      message: "post created successfully",
      createdPost,
    });
  }
}
