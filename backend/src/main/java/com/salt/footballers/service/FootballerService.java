package com.salt.footballers.service;

import com.salt.footballers.model.Footballer;
import com.salt.footballers.repository.FootballerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FootballerService {

    private final FootballerRepository footballerRepository;

    public List<Footballer> getFootballersByTeamId(String teamId) {
        return footballerRepository.findByTeamId(teamId);
    }
}
