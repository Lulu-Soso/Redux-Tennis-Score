import React from 'react';
import { useSelector } from "react-redux";
import { selectPlayerPoints } from "./selectors";

const PlayerPoints = ({ playerId, playerName }) => {
  const playerPoints = useSelector(selectPlayerPoints(playerId));

  return (
      <div className="player-games">
        <p>{playerName}</p>
        <p>
          {playerPoints === 0
              ? "Aucun jeu gagné"
              : playerPoints === 1
                  ? "1 jeu gagné"
                  : `${playerPoints} jeux gagnés`}
        </p>
      </div>
  );
};

export default PlayerPoints;
