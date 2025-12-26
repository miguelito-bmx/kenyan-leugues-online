import React from "react";

export default function FixtureList({ fixtures }) {
  return (
    <section style={{margin: "20px 0"}}>
      <h2>Upcoming Fixtures</h2>
      {fixtures.length === 0 && <p>No fixtures yet.</p>}
      {fixtures.map((fixture, index) => (
        <div key={index} style={{borderBottom: "1px solid #ccc", padding: "10px 0"}}>
          <p>{fixture.home} vs {fixture.away} | {fixture.date}</p>
        </div>
      ))}
    </section>
  );
}
