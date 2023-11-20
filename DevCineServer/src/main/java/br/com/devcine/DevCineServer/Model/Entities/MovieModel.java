package br.com.devcine.DevCineServer.Model.Entities;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity(name = "tb_movies")
public class MovieModel {
  @Id
  @GeneratedValue(generator = "UUID")
  private UUID id;

  @Column(unique = true)
  private String name;

  private String type;

  @Column(unique = true)
  private String photo;

  private boolean rented;

  @ManyToOne
  private UserModel user;
}
