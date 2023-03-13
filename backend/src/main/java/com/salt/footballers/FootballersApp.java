package com.salt.footballers;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class FootballersApp {
    public static void main(String... args) {
        SpringApplication.run(FootballersApp.class);
    }
}
