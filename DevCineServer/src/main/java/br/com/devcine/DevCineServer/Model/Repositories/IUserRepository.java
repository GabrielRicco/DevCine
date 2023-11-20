package br.com.devcine.DevCineServer.Model.Repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.devcine.DevCineServer.Model.Entities.UserModel;


public interface IUserRepository extends JpaRepository<UserModel, UUID> {
  UserModel findByUsername(String username);
}
