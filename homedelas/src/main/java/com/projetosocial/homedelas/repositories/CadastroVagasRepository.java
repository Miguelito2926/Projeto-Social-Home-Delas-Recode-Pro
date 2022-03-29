package com.projetosocial.homedelas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projetosocial.homedelas.entities.CadastroVagas;

@Repository
public interface CadastroVagasRepository extends JpaRepository<CadastroVagas, Integer> {

}
