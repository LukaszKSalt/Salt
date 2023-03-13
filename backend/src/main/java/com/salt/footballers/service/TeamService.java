package com.salt.footballers.service;

import com.salt.footballers.model.Team;
import com.salt.footballers.repository.TeamRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TeamService {
    private final TeamRepository teamRepository;

    public List<Team> fetchAllDutchTeams() {
        return teamRepository.findAll();
    }
}
