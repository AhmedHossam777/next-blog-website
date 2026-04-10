import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6">
      <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
      <p className="text-gray-500 mb-8">A simple blog powered by Next.js</p>
      <Link
        href="/posts"
        className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors"
      >
        View Posts
      </Link>
    </div>
  );
}
