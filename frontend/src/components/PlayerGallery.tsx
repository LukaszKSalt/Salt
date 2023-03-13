import {PlayerCard} from "./PlayerCard";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {futimes} from "fs";
import {Team} from "./TeamsGallery";

interface PlayerGalleryProps {
    teamId: string
    setPlayer: Function
}

interface PlayerDTO {
    id: string,
    name: string
}

const PlayerGallery = (props: PlayerGalleryProps) => {
    const [players, setPlayers] = useState<PlayerDTO[]>([]);
    const navigate = useNavigate();

    function handleClick(event: React.MouseEvent<HTMLDivElement>, player: PlayerDTO) {
        event.preventDefault()
        props.setPlayer(player)
        navigate(`/players/${player.id}`)
    }

    useEffect(() => {
        let playersToAdd: PlayerDTO[] = [];
        fetch(`http://localhost:8080/teams/${props.teamId}/players`)
            .then(response => response.json())
            .then(data => {
                data.forEach((it: PlayerDTO) => {
                    playersToAdd.push(it);
                })
                setPlayers(playersToAdd)
            });
    }, []);

    return(
        <div>
            {players.map((it, index) =>
                <div key={index} onClick={event => handleClick(event, it)}>{it.name}</div>)}
        </div>
    )
}

export {
    PlayerGallery
}
export type {
    PlayerDTO
}
