import {useSelector, useStore} from "react-redux";
import {autoPlay} from "./store";
import {selectGameIsPlaying} from "./selectors";

export const PlayPauseButton = () => {
  const store = useStore();
  const playing = useSelector(selectGameIsPlaying);

  return (
      <button
          className="button"
          onClick={() => {
            autoPlay(store);
          }}
      >
        {playing ? "Jeu en cours..." : "Jouer"}
      </button>
  );
};
