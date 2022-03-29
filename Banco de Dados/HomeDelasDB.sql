create database HomeDelasDB;

use HomeDelasDB;

CREATE TABLE cadastro_vagas(
	id int IDENTITY(1,1) NOT NULL,
	descricao_vaga varchar(255) NULL,
	linkedin_empresa varchar(255) NULL,
	nome_empresa varchar(255) NULL,
	nome_vaga varchar(255) NULL,
	vaga_link varchar(255) NULL
);

select cad.id, cad.nome_empresa, cad.nome_vaga, cad.descricao_vaga, cad.vaga_link, cad.linkedin_empresa
from cadastro_vagas as cad;