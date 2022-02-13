// https://www.youtube.com/watch?v=nHMAMS38x-E

import React from "react";
import { Card } from "./components";
import "./App.scss ";
import movies from "./data";

const CompoundComponents = () => {
  return (
    <body>
      <main>
        {movies.map((movie) => (
          <Card classes="mr" key={`${movie.id}`}>
            <Card.Image src={movie.image} alt={movie.title} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.desc}</Card.Text>
              <Card.Button>{movie.ctaText}</Card.Button>
            </Card.Body>
          </Card>
        ))}
      </main>
    </body>
  );
};

export default CompoundComponents;
