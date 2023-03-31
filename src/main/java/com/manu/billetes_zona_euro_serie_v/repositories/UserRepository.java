package com.manu.billetes_zona_euro_serie_v.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.manu.billetes_zona_euro_serie_v.models.User;


public interface UserRepository extends JpaRepository<User, Long>{
    public Optional<User> findByUsername(String username);
}