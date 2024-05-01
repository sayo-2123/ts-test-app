import React from "react";
import { posts } from "../data/posts.tsx";
import { useParams } from "react-router-dom";

export const Article = () => {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || "", 10);
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return <div>記事が見つかりません</div>;
  }

  return (
    <div key={post.id} className="postId">
      <img src={post.thumbnailUrl} alt="Post thumbnail" />

      <div className="postHead">
        <div className="postCreatedAt">
          {new Date(post.createdAt).toLocaleDateString("ja-JP")}
        </div>
        <div className="postCategories">
          {post.categories.map((category, index) => (
            <div key={index} className="postCategory">
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className="postTitle">{post.title}</div>
      <div className="post">{post.content}</div>
    </div>
  );
};