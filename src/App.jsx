import React from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";
import FixtureList from "./components/FixtureList";

export default function App() {
  const dummyPosts = [
    { text: "Mathare United won 2-1 against Nairobi City Stars!", timestamp: "2025-12-26" },
    { text: "Gor Mahia prepares for the next NSL match.", timestamp: "2025-12-25" },
  ];

  const dummyFixtures = [
    { home: "KCB FC", away: "Bandari FC", date: "2025-12-28" },
    { home: "Ulinzi Stars", away: "Nairobi City Stars", date: "2025-12-29" },
  ];

  return (
    <div style={{fontFamily: "Arial, sans-serif", padding: "0 20px"}}>
      <Header />
      <PostList posts={dummyPosts} />
      <FixtureList fixtures={dummyFixtures} />
    </div>
  );
}
