import { createContext, useReducer, useState,useEffect } from "react";
import { gameReducer, initialState,} from "../reducers/gameReducer";
export const GameContext = createContext();
export function GameProvider({ children }) {
  const [player1Name, setPlayer1Name] = useState(localStorage.getItem("player1Name") || "");
  const [player2Name, setPlayer2Name] = useState(localStorage.getItem("player2Name") || "");
  const [category, setCategory] = useState(localStorage.getItem("category") || "");
  const savedGameState = localStorage.getItem("gameState");
  const [gameFinished, setGameFinished] = useState(
  localStorage.getItem("gameFinished") === "true");
  const [gameState, dispatch] = useReducer( gameReducer,savedGameState ? JSON.parse(savedGameState) : initialState);
   useEffect(() => {
    localStorage.setItem("gameState",JSON.stringify(gameState));},[gameState]);
  function setGameSetup(name1, name2, selectedCategory) {
    setPlayer1Name(name1);
    setPlayer2Name(name2);
    setCategory(selectedCategory);
    setGameFinished(false);
    localStorage.setItem("gameFinished", "false");
    localStorage.setItem("player1Name", name1);
    localStorage.setItem("player2Name", name2);
    localStorage.setItem("category", selectedCategory);
  }
  function submitAnswer(correct, points) {
    dispatch({type: "SUBMIT_ANSWER",payload: {correct,points,}});
 }
 function finishGame() {
  setGameFinished(true);
  localStorage.setItem("gameFinished", "true");
}
  function rematchGame(){
  dispatch({
    type: "RESET_GAME",
  });
   setGameFinished(false);
  localStorage.setItem("gameFinished", "false");
}
function endGame() {
  setPlayer1Name("");
  setPlayer2Name("");
  setCategory("");
  setGameFinished(false);
  localStorage.removeItem("player1Name");
  localStorage.removeItem("player2Name");
  localStorage.removeItem("category");
  localStorage.removeItem("gameState");
  localStorage.removeItem("gameFinished");
  dispatch({
    type: "RESET_GAME",
  });
}
 return (
  <GameContext.Provider
    value={{
      player1Name,
      player2Name,
      category,
      currentPlayer: gameState.currentPlayer,
      currentQuestion: gameState.currentQuestion,
      scores: gameState.scores,
      gameFinished,
      finishGame,
      setGameSetup,
      submitAnswer,
      rematchGame,
      endGame,
    }}>
    {children}
  </GameContext.Provider>
);
}


















// import { createContext, useReducer, useState } from "react";
// import {
//   gameReducer,
//   initialState,
// } from "../reducers/gameReducer";

// export const GameContext = createContext();

// export function GameProvider({ children }) {

//   // Setup Page State
//   const [player1Name, setPlayer1Name] = useState("");
//   const [player2Name, setPlayer2Name] = useState("");
//   const [category, setCategory] = useState("");

//   // Game Reducer
//   const [gameState, dispatch] = useReducer(
//     gameReducer,
//     initialState
//   );

//   function setGameSetup(name1, name2, selectedCategory) {
//     setPlayer1Name(name1);
//     setPlayer2Name(name2);
//     setCategory(selectedCategory);
//   }

//   function submitAnswer(correct, points) {
//     dispatch({
//       type: "SUBMIT_ANSWER",
//       payload: {
//         correct,
//         points,
//       },
//     });
//   }

//   function resetGame() {
//     setPlayer1Name("");
//     setPlayer2Name("");
//     setCategory("");

//     dispatch({
//       type: "RESET_GAME",
//     });
//   }

//   return (
//     <GameContext.Provider
//       value={{
//         player1Name,
//         player2Name,
//         category,

//         currentPlayer: gameState.currentPlayer,
//         currentQuestion: gameState.currentQuestion,
//         scores: gameState.scores,

//         setGameSetup,
//         submitAnswer,
//         resetGame,
//       }}
//     >
//       {children}
//     </GameContext.Provider>
//   );
// }