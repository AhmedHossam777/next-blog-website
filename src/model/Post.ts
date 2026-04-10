import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  },
});

export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
