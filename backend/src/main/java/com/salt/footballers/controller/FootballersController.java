package com.salt.footballers.controller;

import com.salt.footballers.model.Footballer;
import com.salt.footballers.service.FootballerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class FootballersController {

    private final FootballerService footballerService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/teams/{teamId}/players")
    List<Footballer> getFootballersByTeamId(@PathVariable String teamId) {
        return footballerService.getFootballersByTeamId(teamId);
    }
}
