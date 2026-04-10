import Link from "next/link";

function Navbar() {
  return (
    <nav className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-lg font-bold text-white">
        BLOG
      </Link>
      <div className="flex gap-4">
        <Link href="/posts" className="text-gray-400 hover:text-white transition-colors">
          Posts
        </Link>
        <Link href="/posts/create" className="text-gray-400 hover:text-white transition-colors">
          New Post
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
