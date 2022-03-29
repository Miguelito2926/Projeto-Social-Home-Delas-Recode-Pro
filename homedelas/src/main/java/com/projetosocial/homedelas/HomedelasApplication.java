package com.projetosocial.homedelas;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.projetosocial.homedelas.repositories.CadastroVagasRepository;

@SpringBootApplication
public class HomedelasApplication implements CommandLineRunner {

	@Autowired
	private CadastroVagasRepository cadastroVagasRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(HomedelasApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
	}
}
