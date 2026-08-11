import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";
function ProtectedRoute({ children, type }) {
  const {player1Name,player2Name,gameFinished,} = useContext(GameContext);
  if (gameFinished && (type === "game" || type === "setup")) {
    return <Navigate to="/scoreboard" replace />;
  }
  const isAllowed = player1Name && player2Name;
  if (type === "game" && !isAllowed) {
    return <Navigate to="/scoreboard" replace />;
  }
  return children;
}
export default ProtectedRoute;





// import { Navigate } from "react-router-dom";
// import { useContext } from "react";
// import { GameContext } from "../context/GameContext";

// function ProtectedRoute({ children, type }) {
//   const { player1Name, player2Name, gameFinished } =
//     useContext(GameContext);
//   if (type === "game" && gameFinished) {
//     return <Navigate to="/scoreboard" replace />;
//   }
//   const isAllowed = player1Name && player2Name;
//   if (!isAllowed && type === "game") {
//     return <Navigate to="/" replace />;
//   }
//   return children;
// }
// export default ProtectedRoute;
















// // // import { Navigate } from "react-router-dom";
// // // import { useContext } from "react";
// // // import { GameContext } from "../context/GameContext";
// // // function ProtectedRoute({ children }) {
// // //   const { player1Name, player2Name } = useContext(GameContext);
// // //   const isAllowed = player1Name && player2Name;
// // //   return isAllowed ? children : <Navigate to="/" replace />;
// // // }
// // // export default ProtectedRoute;