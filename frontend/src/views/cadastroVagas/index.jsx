import React, { useState, useEffect } from "react";
import CadastroVagasService from "../../services/CadastroVagasService";

export default function Index() {
    const [cadastroVagas, setCadastroVagas] = useState([]);

    const getAllCadastroVagas = () => {
        CadastroVagasService.getAllCadastroVagas().then((response) => {
            setCadastroVagas(response.data);
        }).catch((error) => { console.log(error); });
    };

    useEffect(() => { getAllCadastroVagas(); }, []);

    const deleteCadastroVagas = (cadastroVagasId) => {
        CadastroVagasService.deleteCadastroVagas(cadastroVagasId).then((response) => {
            getAllCadastroVagas();
        }).catch((error) => {
            console.log(error);
            const { data } = error.response;
            if (data.status === 500) {
                alert("Erro na API");
            }
        });
    };

    return (
        <>
            <header className="header">
                <h1 className="container">Vagas disponíveis </h1>
            </header>
            <div className="container p-5">
                <table className="table table-hover table-sm">
                    <thead>
                        <tr>
                            <th>Empresa</th>
                            <th>Vaga</th>
                            <th>Descrição</th>
                            <th>Contato</th>
                        </tr>
                    </thead>

                    <table className="table table-hover table-sm">
                        {cadastroVagas.map((cadastro) => (
                            <thead key={cadastro.id}>
                                <tr>
                                    <td>{cadastro.nome_empresa}</td>
                                    <td><a href={cadastro.vaga_link}>{cadastro.nome_vaga}</a></td>
                                    <td>{cadastro.descricao_vaga}</td>
                                    <td><a href={cadastro.linkedin_empresa}>Linkedin</a></td>
                                </tr>




                                {/* <Link
                                    to={`/CadastroVagas-Update/${cadastro.id}`} className="btn btn-info"> Editar
                                </Link> */}

                                {/* <button
                                    className="btn btn-danger"
                                    onClick={() => deleteCadastroVagas(cadastro.id)}
                                    style={{ marginLeft: "10px" }}>Deletar
                                </button> */}

                            </thead>
                        ))}
                    </table>
                </table>
            </div>
        </>
    );
}