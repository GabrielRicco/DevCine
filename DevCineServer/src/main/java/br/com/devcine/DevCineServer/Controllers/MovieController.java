package br.com.devcine.DevCineServer.Controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.devcine.DevCineServer.Model.Entities.MovieModel;
import br.com.devcine.DevCineServer.Model.Entities.UserModel;
import br.com.devcine.DevCineServer.Model.Repositories.IMovieRepository;

@RestController
@RequestMapping("/movies")
public class MovieController {
  @Autowired
  private IMovieRepository movieRepository;

  @PostMapping("/")
  public ResponseEntity<?> create(@RequestBody MovieModel movieModel) {
    var movie = this.movieRepository.findByName(movieModel.getName());

    if(movie != null) {
      return ResponseEntity.status(400).body("Filme já existe");
    }

    var movieCreated = this.movieRepository.save(movieModel);
    return ResponseEntity.status(200).body(movieCreated);
  }

  @PutMapping("/{id}")
  public ResponseEntity<?> update(@RequestBody MovieModel movieModel, @PathVariable UUID id) {
    var movie = this.movieRepository.findById(id);

    if(movie.isPresent()) {
      MovieModel newMovieModel = movie.get();
      newMovieModel.setRented(movieModel.isRented());
      newMovieModel.setUser(movieModel.getUser());

      var movieUpdated = this.movieRepository.save(newMovieModel);

      return ResponseEntity.status(200).body(movieUpdated);
    } else {
      return ResponseEntity.status(400).body("Filme não encontrado");
    }
  }

  @GetMapping("/")
  public List<MovieModel> list() {
    var movies = this.movieRepository.findAll();

    return movies;
  }

  @GetMapping("/movie/{id}")
  public ResponseEntity<?> listById(@PathVariable UUID id) {
    var movie = this.movieRepository.findById(id);

    return ResponseEntity.status(200).body(movie);
  }

  @GetMapping("/rented")
  public List<MovieModel> listRented() {
    var movies = this.movieRepository.findByRented(true);

    return movies;
  }

  @GetMapping("/notRented")
  public List<MovieModel> listNotRented() {
    var movies = this.movieRepository.findByRented(false);

    return movies;
  }

  @GetMapping("/{userId}")
  public List<MovieModel> listByUser(@PathVariable UUID userId) {
    UserModel user = new UserModel();
    user.setId(userId);

    var movies = this.movieRepository.findByUser(user);

    return movies;
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> delete(@PathVariable UUID id) {
    var movie = this.movieRepository.findById(id).orElse(null);

    if(movie == null) {
      return ResponseEntity.status(400).body("Filme não encontrado");
    }

    this.movieRepository.delete(movie);

    return ResponseEntity.status(200).body("Filme deletado com sucesso!");
  }
}
