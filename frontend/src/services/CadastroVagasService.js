import axios from "axios";

const CADASTROVAGAS_API_URL = "https://backend-homedelas.herokuapp.com/cadastroVagas";

class CadastroVagas{
    getAllCadastroVagas(){
        return axios.get(CADASTROVAGAS_API_URL);
    }

    createCadastroVagas(cadastroVagas){
        return axios.post(CADASTROVAGAS_API_URL, cadastroVagas);
    }

    getCadastroVagasById(cadastroVagasId){
        return axios.get(CADASTROVAGAS_API_URL + "/" + cadastroVagasId);
    }

    updateCadastroVagas(cadastroVagasId, cadastroVagas){
        return axios.put(CADASTROVAGAS_API_URL + "/" + cadastroVagasId, cadastroVagas);
    }

    deleteCadastroVagas(cadastroVagasId){
        return axios.delete(CADASTROVAGAS_API_URL + "/" + cadastroVagasId);
    }
}

export default new CadastroVagas();