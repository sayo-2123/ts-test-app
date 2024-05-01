import React from "react";
import { posts } from "../data/posts.tsx";
import { Link } from "react-router-dom";

export const Lists = () => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id} className="postIds">
          <Link
            to={`/article/${post.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
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
            <div className="postContent">{post.content}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};