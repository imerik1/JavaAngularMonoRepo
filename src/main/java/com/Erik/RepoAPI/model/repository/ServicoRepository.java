package com.Erik.RepoAPI.model.repository;

import com.Erik.RepoAPI.model.entity.Servico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicoRepository extends JpaRepository<Servico, Integer> {
}
