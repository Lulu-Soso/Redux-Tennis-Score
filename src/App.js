import { PlayPauseButton } from "./PlayPauseButton";
import { ResetButton } from "./ResetButton";
import { PointScoredButton } from "./PointScoredButton";
import PlayerScore from "./PlayerScore";
import Display from "./Display";
import PlayerPoints from "./PlayerPoints";

const App = () => {
  return (
      <div>
        <PlayerPoints playerId="player1" playerName="Player 1" />
        <PlayerPoints playerId="player2" playerName="Player 2" />
        <Display />
        <PlayerScore playerId="player1" playerName="player 1"/>
        <PlayerScore playerId="player2" playerName="player 2"/>
        <div className="buttons-row">
          <PointScoredButton playerId="player1">Point Joueur 1</PointScoredButton>
          <PointScoredButton playerId="player2">Point Joueur 2</PointScoredButton>
        </div>
        <div className="buttons-row">
          <ResetButton />
          <PlayPauseButton />
        </div>
      </div>
  );
};

export default App;
