import React from "react";
import { useSelector } from "react-redux";

import Card from "../UI/Card";

function FinalScreen() {
  const score = useSelector((state) => state.score);

  return (
    <Card>
      <h3>Your Score: {score}</h3>
    </Card>
  );
}
export default FinalScreen;
