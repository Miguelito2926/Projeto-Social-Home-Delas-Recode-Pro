package com.projetosocial.homedelas.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cadastro_vagas")
public class CadastroVagas implements Serializable {

	private static final long  serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String nome_empresa;
	private String nome_vaga;
	private String linkedin_empresa;
	private String descricao_vaga;
	private String vaga_link;
	
	public CadastroVagas() {
		super();
	}

	public CadastroVagas(int id, String nome_empresa, String nome_vaga, String linkedin_empresa, String descricao_vaga,
			String vaga_link) {
		super();
		this.id = id;
		this.nome_empresa = nome_empresa;
		this.nome_vaga = nome_vaga;
		this.linkedin_empresa = linkedin_empresa;
		this.descricao_vaga = descricao_vaga;
		this.vaga_link = vaga_link;
	}

	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome_empresa() {
		return nome_empresa;
	}

	public void setNome_empresa(String nome_empresa) {
		this.nome_empresa = nome_empresa;
	}

	public String getNome_vaga() {
		return nome_vaga;
	}

	public void setNome_vaga(String nome_vaga) {
		this.nome_vaga = nome_vaga;
	}

	public String getLinkedin_empresa() {
		return linkedin_empresa;
	}

	public void setLinkedin_empresa(String linkedin_empresa) {
		this.linkedin_empresa = linkedin_empresa;
	}

	public String getDescricao_vaga() {
		return descricao_vaga;
	}

	public void setDescricao_vaga(String descricao_vaga) {
		this.descricao_vaga = descricao_vaga;
	}

	public String getVaga_link() {
		return vaga_link;
	}

	public void setVaga_link(String vaga_link) {
		this.vaga_link = vaga_link;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CadastroVagas other = (CadastroVagas) obj;
		return id == other.id;
	}
	
}
