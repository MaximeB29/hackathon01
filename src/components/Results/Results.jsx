import React from "react";
import Destination from "../Destination";

function Results({ currentAnswer }) {
  // faire une fonction qui donne un id pour la page de destination en fonction des réponses dans le tableau current answer
  return (
    <div>
      <div>Ta destination :</div>
      <Destination />
      <div>Merci d'avoir répondu au quiz !</div>
    </div>
  );
}

export default Results;
