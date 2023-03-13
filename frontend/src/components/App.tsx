import '../stylesheets/App.css';
import '../components/TeamsGallery'
import {TeamsGallery} from "./TeamsGallery";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PlayerDTO, PlayerGallery} from "./PlayerGallery";
import {useState} from "react";
import {PlayerCard} from "./PlayerCard";

function App() {
    const [teamId, setTeamId] = useState("0");
    const [player, setPlayer] = useState<PlayerDTO>();
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/players/:id' element={<PlayerCard player={player}/>}/>
                <Route path='/players' element={<PlayerGallery teamId={teamId} setPlayer={setPlayer}/>}/>
                <Route path='/' element={<TeamsGallery setTeamId={setTeamId}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
