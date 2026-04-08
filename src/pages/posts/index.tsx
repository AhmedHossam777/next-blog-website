import PostsComponent from "@/components/Posts";
import { IPostsResponse } from "@/interfaces/post";
import React from "react";

function Posts({ posts }: { posts: IPostsResponse }) {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-foreground mb-10">All Posts</h1>
      <PostsComponent {...posts} />
    </div>
  );
}

export default Posts;

export async function getStaticProps() {
  const res = await fetch(`https://dummyjson.com/posts`);
  const posts = await res.json();
  return { props: { posts } };
}
