import React, { useState, useEffect } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import CadastroVagasService from "../../services/CadastroVagasService";

export default function Create(){
    const [nome_empresa, setNome_empresa] = useState("");
    const [nome_vaga, setNome_vaga] = useState("");
    const [linkedin_empresa, setLinkedln_empresa] = useState("");
    const [descricao_vaga, setDescricao_vaga] = useState("");
    const [vaga_link, setVaga_link] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const criarOuEditarCadastroVagas = (e) => {
        e.preventDefault();

        const cadastroVagas = { nome_empresa, nome_vaga, linkedin_empresa, descricao_vaga, vaga_link };

        if(id) {
            CadastroVagasService.updateCadastroVagas(id, cadastroVagas).then((response) => { 
                navigate("/cadastroVagas")
             })

        } else {
            CadastroVagasService.createCadastroVagas(cadastroVagas).then((response) => { navigate("/cadastroVagas") })
        }
    }

    useEffect(() => {
        function getCadastroVagasById(){
            if(id) {
                CadastroVagasService.getCadastroVagasById(id).then((response) => { 
                    setNome_empresa(response.data.nome_empresa);
                    setNome_vaga(response.data.nome_vaga);
                    setLinkedln_empresa(response.data.linkedin_empresa);
                    setDescricao_vaga(response.data.descricao_vaga);
                    setVaga_link(response.data.vaga_link);
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        }
        getCadastroVagasById()
    }, [id]);

    return(
        <div className="container py-3">
            <form>
                <fieldset>
                    <legend>
                        <h2 className="text-center">{id ? "Editar" : "Crie uma nova vaga"}</h2>
                    </legend>

                    {/* ATRIBUTO: nome_empresa */}
                    <div className="mb-3">
                        <label htmlFor="nome_empresa" className="form-label">Empresa:</label>

                        <input type="text" id="nome_empresa" className="form-control" placeholder="Nome da empresa" value={nome_empresa} onChange={ (e) => setNome_empresa(e.target.value)}/>
                    </div>

                    {/* ATRIBUTO: nome_vagas */}
                    <div className="mb-3">
                        <label htmlFor="nome_vagas" className="form-label">Nome da vaga:</label>

                        <input type="text" id="nome_vagas" className="form-control" placeholder="Nome da vaga" value={nome_vaga} onChange= { (e) => setNome_vaga(e.target.value)} />
                    </div>

                    {/* ATRIBUTO: linkedln_empresa */}
                    <div className="mb-3">
                        <label htmlFor="linkedin_empresa" className="form-label">Contato da empresa:</label>

                        <input type="url" id="linkedin_empresa" className="form-control" placeholder="Ex.: Linkedln da empresa" value={linkedin_empresa} onChange= { (e) => setLinkedln_empresa(e.target.value) } />
                    </div>

                    {/* ATRIBUTO: descricao_vaga */}
                    <div className="mb-3">
                        <label htmlFor="descricao_vaga" className="form-label">Descrição da vaga:</label>

                        <input type="text" id="descricao_vaga" className="form-control" placeholder="Descrição da vaga" value={descricao_vaga} onChange= { (e) => setDescricao_vaga(e.target.value) } />
                    </div>

                    {/* ATRIBUTO: vaga_link */}
                    <div className="mb-3">

                        <label htmlFor="vaga_link" className="form-label">Acesse a vaga pelo link:</label>

                        <input type="url" id="vaga_link" className="form-control" placeholder="Link"
                        value={vaga_link} onChange={ (e) => setVaga_link(e.target.value)} />
                    </div>

                    <button type="sumit" className="btn btn-primary" onClick={(e) => criarOuEditarCadastroVagas(e)}>
                        Enviar
                    </button>
                    <Link 
                    to="/cadastroVagas" 
                    className="btn btn-danger"
                    style={{marginLeft: "10px"}}>Cancelar</Link>
                </fieldset>
            </form>
        </div>
    );
}