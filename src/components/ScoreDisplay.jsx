const ScoreDisplay = ({ name, score }) => {
  return (
    <div className="px-4 py-3 rounded-xl bg-white border border-gray-200 shadow-sm text-center max-w-xs mx-auto w-full">
      <h3 className="text-base font-bold text-gray-800">{name}</h3>
      <p className="mt-1 text-xs text-gray-500">Score</p>
      <p className="text-xl font-bold text-blue-600">{score}</p>
    </div>
  );
};
export default ScoreDisplay;


















// const ScoreDisplay = ({ name, score }) => {
//   return (
//     <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm text-center">
//       <h3 className="text-lg font-bold text-gray-800">{name}</h3>
//       <p className="mt-2 text-sm text-gray-500">Score:</p>
//       <p className="text-2xl font-bold text-blue-600">{score}</p>
//     </div>
//   );
// };
// export default ScoreDisplay;