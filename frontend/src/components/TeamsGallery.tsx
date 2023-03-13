import {useEffect, useState} from "react";
import {TeamCard} from "./TeamCard";
import '../stylesheets/TeamsGallery.css'

interface Team {
    id : string,
    name: string,
    teamLogoUrl: string
}

interface TeamsGalleryProps {
    setTeamId: Function
}
const TeamsGallery = (props: TeamsGalleryProps) => {
    const [teams, setTeams] = useState<Team[]>([]);

    useEffect(() => {
        let teamsToAdd: Team[] = [];
        fetch('http://localhost:8080/league/dutch/teams')
            .then(response => response.json())
            .then(data => {
                data.forEach((it: Team) => {
                    teamsToAdd.push(it);
                })
                setTeams(teamsToAdd)
            });
    }, []);
    return(
        <div className='teams-gallery'>
            <img className='teams-gallery__logo' src={require('../images/logo.png')}/>
            <img className='teams-gallery__img' src={require('../images/Eredivisie.png')}/>
            <div className='team-cards'>
                {teams.map((team, index) =>
                    <TeamCard key={index} team={team} setTeamId={props.setTeamId}/>)}
            </div>
        </div>
    )
}
export {
    TeamsGallery
}
export type { Team };

