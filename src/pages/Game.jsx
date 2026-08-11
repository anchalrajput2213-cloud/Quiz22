import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../context/GameContext";
import useFetchQuestions from "../hooks/useFetchQuestions";
import TurnIndicator from "../components/TurnIndicator";
import AnswerOption from "../components/AnswerOption";
import ScoreDisplay from "../components/ScoreDisplay";
import Question from "../components/Question";
function Game() {
  const navigate = useNavigate();
  const { player1Name,player2Name,category,scores,currentPlayer,submitAnswer,gameFinished,finishGame} = useContext(GameContext);
  useEffect(() => {
  if (gameFinished)
     { navigate("/scoreboard");}}, [gameFinished, navigate]);
  const { questions, loading, error, } = useFetchQuestions(category);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState([]);
useEffect(() => {
  if (questions.length === 0) return;
  const current = questions[currentIndex];
   const allOptions = [
    ...current.incorrectAnswers,
    current.correctAnswer,
  ];
  allOptions.sort(() => Math.random() - 0.5);
  setOptions(allOptions);
}, [questions, currentIndex]);
//   const allOptions = [
//     ...current.incorrectAnswers,
//     current.correctAnswer,
//   ];
//   setOptions(allOptions);
// }, [questions, currentIndex]);
  if (loading) {
    return (
      <h1 className="text-lg font-semibold text-gray-600">Loading Questions...</h1> );
  }
  if (error) {
    return (
      <h1 className="text-lg font-semibold text-red-500">{error}</h1>
    );
  }
  if (questions.length === 0) {
    return null;
  }
  const currentQuestion = questions[currentIndex];
  const activePlayerName = currentPlayer === 1 ? player1Name : player2Name;
 function handleAnswer(selectedAnswer) {
  setSelectedAnswer(selectedAnswer);
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  let points = 0;
  if (isCorrect) {
    if (currentQuestion.difficulty === "easy") {
      points = 10;
    } else if (currentQuestion.difficulty === "medium") {
      points = 15;
    } else {
      points = 20;
    }
  }
  submitAnswer(isCorrect, points);
  setTimeout(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      finishGame();
      navigate("/scoreboard");
    }
  }, 1000);
}
  // function handleAnswer(selectedAnswer) {
  //   const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  //   let points = 0;
  //   if (isCorrect) {
  //     if (currentQuestion.difficulty === "easy") {
  //       points = 10;
  //     } 
  //     else if (currentQuestion.difficulty === "medium") {
  //        points = 15;
  //     } 
  //     else {
  //       points = 20;
  //     }
  //   }
  //   submitAnswer(isCorrect,points);
  //   if (currentIndex < questions.length - 1) {
  //     setCurrentIndex((prev) => prev + 1);
  //   } 
  //   else {
  //      finishGame();
  //   navigate("/scoreboard");
  //     // navigate("/scoreboard");
  //   }
  // }
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-3">
      <TurnIndicator activePlayerName={activePlayerName}/>
      <div className="flex justify-center gap-3 mb-4">
        <ScoreDisplay name={player1Name} score={scores.player1}/>
        <ScoreDisplay name={player2Name} score={scores.player2}/>
      </div>
      <h2 className="flex justify-center mb-2">Question {currentIndex + 1} / {questions.length}</h2>
      <Question question={currentQuestion.question} />
      <div className="grid grid-cols-2 gap-2 max-w-2xl mx-auto">
     {
  options.map((option) => (
    <AnswerOption key={option}text={option} onClick={handleAnswer}selectedAnswer={selectedAnswer}correctAnswer={currentQuestion.correctAnswer}
    />
  ))
}
        {/* {
          options.map((option) => (
            <AnswerOption key={option} text={option} onClick={handleAnswer}/>
          ))
        } */}
      </div>
    </div>
  );

}
export default Game;


























// // import { useState, useEffect, useContext } from "react";
// // import TurnIndicator from "../components/TurnIndicator";
// // import AnswerOption from "../components/AnswerOption";
// // import Question from "../components/Question";
// // import { GameContext } from "../context/GameContext";
// // import { useReducer } from "react";
// // import { GameReducer, initialState } from "../reducers/gameReducer";

// // function Game() {
// //   const {
// //     category,
// //     player1Name,
// //     player2Name,
// //     scores,
// //     currentPlayer,
// //     updateScore,
// //   } = useContext(GameContext);
// //   const [state, dispatch] = useReducer(GameReducer, initialState);
// //   const [question, setQuestion] = useState("");
// //   const [answer, setAnswer] = useState("");
// //   const [options, setOptions] = useState([]);

// //   const activePlayerName =
// //     currentPlayer === 1 ? player1Name : player2Name;

// //   useEffect(() => {
// //     if (!category) return;

// //     fetch(
// //       `https://the-trivia-api.com/v2/questions?limit=2&categories=${category}&difficulties=hard&type=multiple`
// //     )
// //       .then((res) => res.json())
// //       .then((data) => {
// //         const q = data[0];

// //         setQuestion(q.question.text);
// //         setAnswer(q.correctAnswer);

// //         const allOptions = [
// //           ...q.incorrectAnswers,
// //           q.correctAnswer,
// //         ];

// //         allOptions.sort(() => Math.random() - 0.5);

// //         setOptions(allOptions);
// //       })
// //       .catch((err) => console.log(err));
// //   }, [category]);

// //   function handleAnswer(selectedAnswer) {
// //     if (selectedAnswer === answer) {
// //       alert("Correct");
// //       updateScore(20);
// //     } else {
// //       alert("Incorrect");
// //       updateScore(0);
// //     }
// //   }

// //   return (
// //     <div className="max-w-xl mx-auto p-5">
// //       <TurnIndicator activePlayerName={activePlayerName} />

// //       <h2 className="text-lg font-bold mt-4">
// //         Player 1 : {player1Name} ({scores.player1})
// //       </h2>

// //       <h2 className="text-lg font-bold">
// //         Player 2 : {player2Name} ({scores.player2})
// //       </h2>

// //       <Question question={question} />

// //       <div className="mt-5">
// //         {options.map((option) => (
// //           <AnswerOption
// //             key={option}
// //             text={option}
// //             onClick={handleAnswer}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Game;