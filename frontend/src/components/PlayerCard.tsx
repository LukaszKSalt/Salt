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
    strThumb: string
    strCutout: string
    strPosition: string
    strDescriptionEN: string
}

const PlayerCard = (props: PlayerProps) => {
    const [player, setPlayer] = useState<Player>();
    let {id} = useParams();

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`)
            .then(response => response.json())
            .then(data => {
                const playerToShow: Player = data.players[0]
                setPlayer(playerToShow)
            });
    }, []);
    return (
        <div>
            <img className='player-card__logo' src={require('../images/logo.png')}/>
            {!player ? <div>Loading...</div> :
                <div>
                    {player.strCutout ? <img className='player-card__img' src={player.strCutout} alt={Anonymous}/>
                        : player.strThumb ? <img className='player-card__img' src={player.strThumb} alt={Anonymous}/>
                            : <img className='player-card__img' src={require('../images/AnonymousFootballer.png')}/>}
                    <div className='player-card__container'>
                        <p className=''>{player.strPlayer}</p>
                        <p>Position: {player.strPosition}</p>
                        <p>Height: {player.strHeight}</p>
                        <p>Date of birth: {player.dateBorn}</p>
                        <p>Nationality: {player.strNationality}</p>
                        <p>Description</p>
                        <p>{player.strDescriptionEN}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export {
    PlayerCard
}
