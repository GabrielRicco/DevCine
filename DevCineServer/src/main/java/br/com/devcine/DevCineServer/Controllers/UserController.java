package br.com.devcine.DevCineServer.Controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import at.favre.lib.crypto.bcrypt.BCrypt;
import br.com.devcine.DevCineServer.Model.Entities.UserModel;
import br.com.devcine.DevCineServer.Model.Repositories.IUserRepository;

@RestController
@RequestMapping("/users")
public class UserController {
  @Autowired
  private IUserRepository userRepository;

  @PostMapping("/")
  public ResponseEntity<?> create(@RequestBody UserModel userModel) {
    var user = this.userRepository.findByUsername(userModel.getUsername());

    if(user != null) {
      return ResponseEntity.status(400).body("Usuário já existe");
    }

    var passwordHashed = BCrypt.withDefaults().hashToString(12, userModel.getPassword().toCharArray());
    userModel.setPassword((passwordHashed));

    var userCreated = this.userRepository.save(userModel);
    return ResponseEntity.status(200).body(userCreated);
  }

  @GetMapping("/")
  public List<UserModel> list() {
    var users = this.userRepository.findAll();
    
    return users;
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable UUID id) {
    var user = this.userRepository.findById(id).orElse(null);

    if(user == null) {
      return ResponseEntity.status(400).body("Usuário não encontrado");
    }

    return ResponseEntity.status(200).body(user);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> delete(@PathVariable UUID id) {
    var user = this.userRepository.findById(id).orElse(null);

    if(user == null) {
      return ResponseEntity.status(400).body("Usuário não encontrado");
    }

    this.userRepository.delete(user);
    return ResponseEntity.status(200).body("Usuário deletado com sucesso!");
  }
}
