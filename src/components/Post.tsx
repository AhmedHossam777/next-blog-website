import Link from "next/link";
import { IPost } from "@/interfaces/post";

function Post(props: IPost) {
  return (
    <div>
      <Link
        href="/posts"
        className="text-sm text-gray-400 hover:text-foreground transition-colors"
      >
        ← Back to posts
      </Link>

      <article className="mt-8 border-b border-gray-200 dark:border-gray-800 pb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          {props.title}
        </h1>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs text-gray-400">{props.views} views</span>
          {props.tags?.length > 0 && (
            <div className="flex gap-2">
              {props.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-400 border border-gray-200 dark:border-gray-700 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {props.body}
        </p>
      </article>

      <div className="flex items-center gap-4 mt-4 text-xs text-gray-400">
        <span>👍 {props.reactions?.likes ?? 0}</span>
        <span>👎 {props.reactions?.dislikes ?? 0}</span>
      </div>
    </div>
  );
}

export default Post;
