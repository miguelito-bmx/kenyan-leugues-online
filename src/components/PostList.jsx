import React from "react";

export default function PostList({ posts }) {
  return (
    <section style={{margin: "20px 0"}}>
      <h2>Recent Social Media Posts</h2>
      {posts.length === 0 && <p>No posts yet.</p>}
      {posts.map((post, index) => (
        <div key={index} style={{borderBottom: "1px solid #ccc", padding: "10px 0"}}>
          <p>{post.text}</p>
          <small>{post.timestamp}</small>
        </div>
      ))}
    </section>
  );
}
