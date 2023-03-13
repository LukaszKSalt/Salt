package com.salt.footballers.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "footballer")
@Data
public final class Footballer {
    @Id
    private String id;
    private String teamId;
    private String name;
}
