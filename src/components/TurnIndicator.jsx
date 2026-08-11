import React from "react";
const TurnIndicator = ({ activePlayerName }) => {
  return (
    <div className="text-center mb-4">
      <p className="text-xs text-gray-500">Current Turn</p>
      <h2 className="mt-1 text-lg font-bold text-green-600">{activePlayerName}'s Turn</h2>
    </div>
  );
};
export default React.memo(TurnIndicator);












// import React from "react";
// const TurnIndicator = ({ activePlayerName }) => {
//   return (
//     <div className="text-center mb-5">
//        <p className="text-sm text-gray-500">Current Turn </p>
//     <h2  className="mt-1 text-xl font-bold text-green-600"> {activePlayerName}'s Turn </h2>
//     </div>
//   );
// };
// export default React.memo(TurnIndicator);