import React from "react";
import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";
import Data from "./data.js";

export default function App() {
  const card = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <section className="container">
      <Navbar />
      <section className="card--section">{card}</section>
    </section>
  );
}
