import '../stylesheets/PlayerGallery.css'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

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
    }, [props.teamId]);

    return (
        <div className='player-gallery'>
            <img className='player-gallery__logo' src={require('../images/logo.png')}/>
            <div className='player-gallery__container'> {players.map((it, index) =>
                <div className='player-gallery__name' key={index}
                     onClick={event => handleClick(event, it)}>{it.name}</div>)}
            </div>
        </div>
    )
}

export {
    PlayerGallery
}
export type {
    PlayerDTO
}
