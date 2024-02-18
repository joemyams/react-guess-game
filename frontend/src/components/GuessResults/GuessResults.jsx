import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constant";

range(5);

const GuessResults = ({ guesses, answer }) => (
  <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
      <Guess key={num} value={guesses[num]} answer={answer} />
    ))}
  </div>
);
export default GuessResults;
