import { useRouter } from "next/router";
import { useState } from "react";

export default function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/posts", {
      method: "POST",
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
    router.push("/posts");
  };

  return (
    <div className="max-w-xl mx-auto py-16 px-6">
      <h1 className="text-2xl font-bold text-white mb-8">Create Post</h1>
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
          Create
        </button>
      </form>
    </div>
  );
}
