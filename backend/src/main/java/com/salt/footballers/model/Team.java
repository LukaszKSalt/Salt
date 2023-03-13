package com.salt.footballers.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "team")
@Data
public final class Team {
    @Id
    private String id;
    private String name;
    private String teamLogoUrl;
}
