package com.Erik.RepoAPI.model.repository;

import com.Erik.RepoAPI.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}
