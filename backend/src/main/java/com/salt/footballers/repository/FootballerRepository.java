package com.salt.footballers.repository;

import com.salt.footballers.model.Footballer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FootballerRepository extends JpaRepository<Footballer, String> {
    List<Footballer> findByTeamId(String teamId);
}
