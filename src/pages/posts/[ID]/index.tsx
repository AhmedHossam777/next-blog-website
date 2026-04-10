import Link from "next/link";
import { IPost } from "@/interfaces/post";
import { useRouter } from "next/router";
import { connectDB } from "@/config/connect-db";
import { Post } from "@/model/Post";
import { GetServerSidePropsContext } from "next";

const PostPage = ({ post }: { post: IPost }) => {
  const router = useRouter();

  const handleDelete = async () => {
    await fetch(`/api/posts/${post._id}`, { method: "DELETE" });
    router.push("/posts");
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <Link
        href="/posts"
        className="text-sm text-gray-500 hover:text-white transition-colors"
      >
        &larr; Back to posts
      </Link>

      <article className="mt-8">
        <h1 className="text-2xl font-bold text-white mb-4">{post.title}</h1>
        {post.tags?.length > 0 && (
          <div className="flex gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-500 border border-gray-700 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="text-gray-400 leading-relaxed">{post.body}</p>
      </article>

      <div className="flex gap-3 mt-8">
        <Link
          href={`/posts/${post._id}/edit`}
          className="px-4 py-2 text-sm border border-gray-700 text-gray-400 hover:text-white hover:border-white rounded transition-colors"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="px-4 py-2 text-sm border border-red-900 text-red-400 hover:text-red-300 hover:border-red-700 rounded transition-colors cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { ID } = context.params!;
  await connectDB();
  const post = await Post.findById(ID).lean();

  if (!post) {
    return { notFound: true };
  }

  return { props: { post: JSON.parse(JSON.stringify(post)) } };
}
