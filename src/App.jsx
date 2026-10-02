import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Setup from "./pages/Setup";
import Game from "./pages/Game";
import Scoreboard from "./pages/Scoreboard";
import ProtectedRoute from "./components/ProtectedRoutes";
function App(){
return(
<Routes>
<Route path="/" element={<Welcome/>}/>
<Route path="/setup" element={<ProtectedRoute type="setup"><Setup/></ProtectedRoute>}/>
<Route path="/game" element={<ProtectedRoute type="game"><Game/></ProtectedRoute>}/>
<Route path="/scoreboard" element={<Scoreboard/>}/>
</Routes>
)
}
export default App;