import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";

import CadastroVagas from "./views/cadastroVagas";
import CadastroVagasCreate from "./views/cadastroVagas/Create";

import Contatos from "./views/Contatos";
import Cursos from "./views/Cursos";

import Menu from "./components/Menu";
import Footer from "./components/Footer";

import "./style.css"

function App() {
  return (
    <BrowserRouter>
      <main>
        <Menu/>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/CadastroVagas" element={<CadastroVagas/>} />
          <Route path="/CadastroVagas-Create" element={<CadastroVagasCreate/>}/>
          <Route path="/CadastroVagas-Update/:id" element={<CadastroVagasCreate/>}/>

          <Route path="/Contatos" element={<Contatos />} />

          <Route path="/Cursos" element={<Cursos />} />
          
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
