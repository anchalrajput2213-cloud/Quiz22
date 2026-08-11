import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import { GameContext } from "../context/GameContext";
function Setup() {
  const navigate = useNavigate();
  const { setGameSetup } = useContext(GameContext);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://the-trivia-api.com/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(Object.keys(data));
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  function startGame() {
    if (!player1 || !player2 || !category) {
      alert("Please fill all details.");
      return;
    }
    setGameSetup(player1, player2, category);
    navigate("/game");
  }
  return (
    <div className="max-w-2xl mx-auto p-8 ">
      <h1 className="text-3xl font-bold mb-6">Setup Game</h1>
      <input className="border p-3 w-full mb-3 rounded" placeholder="Player 1 Name" value={player1} onChange={(e) => setPlayer1(e.target.value)}/>
      <input className="border p-3 w-full mb-5 rounded" placeholder="Player 2 Name" value={player2}onChange={(e) => setPlayer2(e.target.value)}/>
      <h2 className="text-xl font-bold mb-3">Select Category</h2>
      {loading ? (<p>Loading Categories...</p>
      ) : (<CategoryList categories={categories} selected={category} onSelect={setCategory}/>
      )}
      <div className="flex gap-4 mt-6">
        <button onClick={startGame} className="bg-green-500 text-white px-5 py-2 rounded">Start Game</button>
        <button onClick={() => navigate("/")} className="bg-red-500 text-white px-5 py-2 rounded">End</button>
      </div>
    </div>
  );
}
export default Setup;