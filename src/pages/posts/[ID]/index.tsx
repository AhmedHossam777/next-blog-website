import Post from "@/components/Post";
import { IPost } from "@/interfaces/post";
import { useRouter } from "next/router";
import React from "react";

const ID = ({ post }: { post: IPost }) => {
  const router = useRouter();
  const { ID } = router.query;
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <Post {...post} />
    </div>
  );
};

export default ID;
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
export async function getStaticProps(context: { params: { ID: string } }) {
  const { params } = context;

  const res = await fetch(`https://dummyjson.com/posts/${params.ID}`);
  const post = await res.json();
  return { props: { post } };
}
