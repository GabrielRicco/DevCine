package br.com.devcine.DevCineServer.Model.Repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.devcine.DevCineServer.Model.Entities.MovieModel;
import br.com.devcine.DevCineServer.Model.Entities.UserModel;

import java.util.List;


public interface IMovieRepository extends JpaRepository<MovieModel, UUID> {
  MovieModel findByName(String name);
  List<MovieModel> findByUser(UserModel user);
  List<MovieModel> findByRented(boolean rented);
}
