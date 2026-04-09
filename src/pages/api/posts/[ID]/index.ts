import { connectDB } from "@/config/connect-db";
import { Post } from "@/model/Post";

export default async function handler(req: any, res: any) {
  try {
    await connectDB();
    let { ID } = req.query;

    if (req.method === "GET") {
      const post = await Post.findById(ID);
      if (!post) {
        return res.status(404).json({
          message: "post not found",
        });
      }
      return res.status(200).json(post);
    }

    if (req.method === "PUT") {
      const { title, body, tags, userId } = req.body;
      const updatedPost = await Post.findByIdAndUpdate(
        ID,
        {
          title,
          body,
          tags,
          userId,
        },
        { new: true },
      );

      if (!updatedPost) {
        return res.status(404).json({
          message: "post not found",
        });
      }

      return res.status(200).json({
        message: "post updated successfully",
        updatedPost,
      });
    }

    if (req.method === "DELETE") {
      const deletedPost = await Post.findByIdAndDelete(ID);
      if (!deletedPost) {
        return res.status(404).json({
          message: "post not found",
        });
      }
      return res.status(204).json(deletedPost);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred",
      error: error,
    });
  }
}
