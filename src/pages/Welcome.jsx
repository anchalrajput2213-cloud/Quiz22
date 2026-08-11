import { useNavigate } from "react-router-dom";
function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5 bg-blue-200">
      <h1 className="text-4xl font-bold">Two-Player Game</h1>
      <p className="text-lg">Let's Play Game</p>
      <button onClick={() => navigate("/setup")} className="bg-green-500 hover:bg-green-900 text-white px-6 py-3 rounded-lg">Start</button>
    </div>
  );
}
export default Welcome;