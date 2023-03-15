import {Team} from "./TeamsGallery";
import '../stylesheets/TeamCard.css'
import {useNavigate} from "react-router-dom";


interface TeamCardProps {
    team: Team
    setTeamId: Function
}

const TeamCard = (props: TeamCardProps) => {
    const navigate = useNavigate();
    function handleClick(event: React.MouseEvent<HTMLDivElement>) {
        event.preventDefault()
        props.setTeamId(props.team.id)
        navigate('/players')
    }

    return(
        <div className='team-card'>
        <img className='team-card__img' src={props.team.teamLogoUrl} alt='No logo'
             onClick={event => handleClick(event)}/>
        </div>
    )
}

export {
    TeamCard
}
