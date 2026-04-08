import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">BLOG</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/posts">FEED</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
