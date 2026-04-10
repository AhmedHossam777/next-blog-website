import Link from "next/link";
import { IPost } from "@/interfaces/post";
import { connectDB } from "@/config/connect-db";
import { Post } from "@/model/Post";

function Posts({ posts }: { posts: IPost[] }) {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-white">All Posts</h1>
        <Link
          href="/posts/create"
          className="px-4 py-2 bg-white text-black text-sm font-medium rounded hover:bg-gray-200 transition-colors"
        >
          New Post
        </Link>
      </div>
      {posts.length === 0 && (
        <p className="text-gray-500">No posts yet. Create one!</p>
      )}
      <div className="flex flex-col gap-6">
        {posts.map((p) => (
          <article
            key={p._id}
            className="border-b border-gray-800 pb-6 last:border-none"
          >
            <h2 className="text-lg font-semibold text-white mb-1">{p.title}</h2>
            <p className="text-sm text-gray-400 line-clamp-2 mb-2">{p.body}</p>
            {p.tags?.length > 0 && (
              <div className="flex gap-2 mb-3">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-500 border border-gray-700 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <Link
              href={`/posts/${p._id}`}
              className="inline-block px-3 py-1.5 text-sm text-gray-400 border border-gray-700 hover:text-white hover:border-white rounded transition-colors"
            >
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Posts;

export async function getServerSideProps() {
  await connectDB();
  const posts = await Post.find().lean();
  return { props: { posts: JSON.parse(JSON.stringify(posts)) } };
}
