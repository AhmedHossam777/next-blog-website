import Link from "next/link";
import { IPost } from "@/interfaces/post";

const PostsComponent = ({ posts }: { posts: IPost[] }) => {
  return (
    <div className="flex flex-col gap-6">
      {posts.map((p) => (
        <article
          key={p.id}
          className="border-b border-gray-200 dark:border-gray-800 pb-6 last:border-none"
        >
          <h2 className="text-lg font-semibold text-foreground mb-1">
            {p.title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-2">
            {p.body}
          </p>
          <span className="text-xs text-gray-400">{p.views} views</span>
          <br />
          <Link
            href={`/posts/${p.id}`}
            className="mt-3 inline-block px-3 py-1.5 text-sm font-medium text-gray-500 border border-gray-300 dark:border-gray-700 dark:text-gray-400 hover:text-foreground hover:border-foreground rounded transition-colors"
          >
            View post →
          </Link>
        </article>
      ))}
    </div>
  );
};

export default PostsComponent;
