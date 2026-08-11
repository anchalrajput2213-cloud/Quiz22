import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../context/GameContext";
import ScoreDisplay from "../components/ScoreDisplay";
function Scoreboard() {
  const navigate = useNavigate();
const {player1Name,player2Name,scores,rematchGame,endGame,} = useContext(GameContext);
let winner;
if (scores.player1 > scores.player2) {
  winner = `${player1Name} Wins`;
} else if (scores.player2 > scores.player1) {
  winner = `${player2Name} Wins`;
} else {
  winner = "Match Tie";
}
function handleRematch() {
  rematchGame();
  navigate("/game");
}
function handleEndGame() {
  endGame();
  navigate("/");
}
  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Scoreboard </h1>
      <ScoreDisplay name={player1Name} score={scores.player1} />
      <ScoreDisplay name={player2Name} score={scores.player2} />
      <h2 className="text-2xl font-bold text-center text-green-600 mt-6"> {winner} </h2>
      <div className="flex justify-center gap-4 mt-8">
        <button onClick={handleRematch} className="bg-blue-500 text-white px-5 py-2 rounded">Rematch</button>
        <button onClick={handleEndGame} className="bg-red-500 text-white px-5 py-2 rounded">End Game</button>
      </div>
    </div>
  );
}
export default Scoreboard;