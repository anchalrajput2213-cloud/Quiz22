export const initialState = {
  currentQuestion: 0,
  currentPlayer: 1,
  scores: {player1: 0,player2: 0,},
};
export function gameReducer(state, action) {
  switch (action.type) {
    case "SUBMIT_ANSWER": {
      const { correct, points } = action.payload;
      let updatedScores = { ...state.scores };
      if (correct) {
        if (state.currentPlayer === 1) {
          updatedScores.player1 += points;
        } else {
          updatedScores.player2 += points;
        }
      }
      return {
        ...state,
        scores: updatedScores,
        currentPlayer: state.currentPlayer === 1 ? 2 : 1,
        currentQuestion: state.currentQuestion + 1,
      };
    }
    case "RESET_GAME":
      return initialState;
    default:
      return state;
  }
}