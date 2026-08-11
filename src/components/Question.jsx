function Question({ question }) {
  return (
    <div className="mt-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm max-w-2xl mx-auto">
      <p className="text-xs text-gray-500 mb-2">Question</p>
      <h2 className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed">{question.text}</h2>
    </div>
  );
}
export default Question;















// function Question({ question }) {
//   return (
//     <div className="mt-5 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm ">
//       <p className="text-sm text-gray-500 mb-2">Question</p>
//       <h2  className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
//         {question.text}
//       </h2>
//     </div>
//   );
// }
// export default Question;
// function Question({ question }) {
//   return (
//     <div>
//       <h2>{question.question.text}</h2>
//     </div>
//   );
// }

// export default Question;