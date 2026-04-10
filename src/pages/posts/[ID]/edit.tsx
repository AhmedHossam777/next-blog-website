import { IPost } from "@/interfaces/post";
import { useRouter } from "next/router";
import { useState } from "react";
import { connectDB } from "@/config/connect-db";
import { Post } from "@/model/Post";
import { GetServerSidePropsContext } from "next";

export default function EditPost({ post }: { post: IPost }) {
  const router = useRouter();
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [tags, setTags] = useState(post.tags?.join(", ") || "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`/api/posts/${post._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        body,
        tags: tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
      }),
    });
    router.push(`/posts/${post._id}`);
  };

  return (
    <div className="max-w-xl mx-auto py-16 px-6">
      <h1 className="text-2xl font-bold text-white mb-8">Edit Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:border-gray-500"
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          rows={6}
          className="bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:border-gray-500 resize-none"
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:border-gray-500"
        />
        <button
          type="submit"
          className="bg-white text-black font-medium py-2 rounded hover:bg-gray-200 transition-colors cursor-pointer"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { ID } = context.params!;
  await connectDB();
  const post = await Post.findById(ID).lean();

  if (!post) {
    return { notFound: true };
  }

  return { props: { post: JSON.parse(JSON.stringify(post)) } };
}
