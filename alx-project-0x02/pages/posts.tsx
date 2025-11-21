import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";
import { useEffect, useState } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      const mappedPosts: PostProps[] = data.map((post: any) => ({
        userId: post.userId,
        id: post.id,
        title: post.title,
        content: post.body,
      }));

      setPosts(mappedPosts);
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Header />

      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>

        {posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))
        )}
      </main>
    </>
  );
}



export async function getStaticProps() {
  return {
    props: {}, // no props needed
  };
}
