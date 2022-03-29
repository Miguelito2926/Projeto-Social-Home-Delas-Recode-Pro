package com.projetosocial.homedelas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetosocial.homedelas.entities.CadastroVagas;
import com.projetosocial.homedelas.repositories.CadastroVagasRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/cadastroVagas")
public class CadastroVagasController {
	
	@Autowired
	private CadastroVagasRepository cadastroVagasRepository;
	
	// ============================ Get method ============================
	@GetMapping
	public ResponseEntity<List<CadastroVagas>> findAll() {
		List<CadastroVagas> cadastroVagas = cadastroVagasRepository.findAll();
		return ResponseEntity.ok().body(cadastroVagas);
	}

	// ============================ Get by Id method =====================
	@GetMapping(value = "/{id}")
	public ResponseEntity<CadastroVagas> findById(@PathVariable Integer id) {
		CadastroVagas cadastroVagas = cadastroVagasRepository.findById(id).get();
		return ResponseEntity.ok().body(cadastroVagas);
	}
	
	// =========================== Create method ==========================
	@PostMapping
	public CadastroVagas create(@RequestBody CadastroVagas id) {
		return cadastroVagasRepository.save(id);
	}
	
	// ========================== Update ==================================
	@PutMapping("{id}")
	public ResponseEntity<CadastroVagas> update(@PathVariable Integer id, @RequestBody CadastroVagas cadastroVagasDetails) {
		CadastroVagas updateCadastroVagas = cadastroVagasRepository.findById(id).get();
		
		updateCadastroVagas.setNome_empresa(cadastroVagasDetails.getNome_empresa());
		updateCadastroVagas.setNome_vaga(cadastroVagasDetails.getNome_vaga());
		updateCadastroVagas.setDescricao_vaga(cadastroVagasDetails.getDescricao_vaga());
		updateCadastroVagas.setLinkedin_empresa(cadastroVagasDetails.getLinkedin_empresa());
		updateCadastroVagas.setVaga_link(cadastroVagasDetails.getVaga_link());
		
		cadastroVagasRepository.save(updateCadastroVagas);
		
		return ResponseEntity.ok(updateCadastroVagas);
	}
	
	// ========================= Delete ==================================
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable Integer id) {
		CadastroVagas cadastroVagas = cadastroVagasRepository.findById(id).get();
		
		cadastroVagasRepository.delete(cadastroVagas);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}

































