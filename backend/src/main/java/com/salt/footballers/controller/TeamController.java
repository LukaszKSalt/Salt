package com.salt.footballers.controller;

import com.salt.footballers.model.Team;
import com.salt.footballers.service.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class TeamController {

    private final TeamService teamService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/league/dutch/teams")
    List<Team> fetchAllDutchTeams() {
        return teamService.fetchAllDutchTeams();
    }
}
