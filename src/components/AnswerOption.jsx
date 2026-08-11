import { memo } from "react";
function AnswerOption({text,onClick,selectedAnswer,correctAnswer}) {
  let buttonColor ="bg-white border-gray-200 text-gray-800 hover:border-blue-500 hover:bg-blue-50";
  if (selectedAnswer !== null) {
    if (text === correctAnswer) {
      buttonColor = "bg-green-500 text-white border-green-500";
    } else if (text === selectedAnswer) {
      buttonColor = "bg-red-500 text-white border-red-500";
    } else {
      buttonColor = "bg-white border-gray-200 text-gray-400";
    }
  }
  return (
    <button
      onClick={() => onClick(text)}
      disabled={selectedAnswer !== null}
      className={` w-full px-3 py-2 rounded-lg border text-left text-sm font-medium transition-all duration-200 ${buttonColor}`}>
      {text}
    </button>
  );
}

export default memo(AnswerOption);









// function AnswerOption({text,onClick,selectedAnswer,correctAnswer}) {
//   let buttonColor = "bg-white border-gray-300 hover:bg-gray-100";
//   if (selectedAnswer !== null) {
//     if (text === correctAnswer) {
//       buttonColor = "bg-green-500 text-white border-green-500";
//     } else {
//       buttonColor = "bg-red-500 text-white border-red-500";
//     }
//   }
//   return (
//     <button
//       onClick={() => onClick(text)}
//       disabled={selectedAnswer !== null}
//       className={` w-full p-4 rounded-xl border-2 text-left font-medium transition duration-200 ${buttonColor}`}>
//       {text}
//     </button>
//   );
// }
// export default AnswerOption;














// // import { memo } from "react";
// // function AnswerOption({ text, onClick,selectedAnswer,correctAnswer }) {
// //   return (<button onClick={() => onClick(text)} className="block border p-2 my-2 w-full">{text}</button>);
// //   //  return (<button onClick={() => onClick(text)} className={`block w-full p-3 my-2 rounded-lg border transition-all duration-300 ${
// //   //       selectedAnswer === text
// //   //         ? text === correctAnswer
// //   //           ? "bg-green-500 text-white border-green-500"
// //   //           : "bg-red-500 text-white border-red-500"
// //   //         : "bg-white hover:bg-gray-100"
// //   //     }`}
// //   //   >
// //   //     {text}</button>);
// // }
// // export default memo(AnswerOption);