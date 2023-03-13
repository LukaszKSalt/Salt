import {PlayerDTO} from "./PlayerGallery";
import {useEffect, useState} from "react";
import '../stylesheets/PlayerCard.css'
import {useParams} from "react-router-dom";
import Anonymous from '../images/AnonymousFootballer.png'

interface PlayerProps {
    player?: PlayerDTO
}

interface Player {
    idPlayer: string,
    strNationality: string,
    strPlayer: string
    dateBorn: string
    strHeight: string
    strCutout: string;
    strPosition: string
    strDescriptionEN: string
}

const PlayerCard = (props: PlayerProps) => {
    const [player, setPlayer] = useState<Player>();
    let { id } = useParams();

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${ id }`)
            .then(response => response.json())
            .then(data => {
                const playerToShow: Player = data.players[0]
                setPlayer(playerToShow)
            });
    }, []);
    return(
        <div>
            {!player ? <div>Loading...</div> :
                <div>
                    {player.strCutout ? <img src={player.strCutout} alt={Anonymous}/>
                        : <img src={require('../images/AnonymousFootballer.png')}/>}
                    <h2>Name: {player.strPlayer}</h2>
                    <h2>Position: {player.strPosition}</h2>
                    <h2>Height: {player.strHeight}</h2>
                    <h2>Date of birth: {player.dateBorn}</h2>
                    <h2>Nationality: {player.strNationality}</h2>
                    <h2>Description</h2>
                    <h2>{player.strDescriptionEN}</h2>
                </div>
            }
            </div>
    )
}

export {
    PlayerCard
}
