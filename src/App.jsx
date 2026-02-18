import "./App.css";

// Importamos as rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importamos a pagina
import PaginaInicial from "./pages/PaginaInicial/PaginaInicial";
import PaginaProduto from "./pages/PaginaProduto/PaginaProduto";
import PaginaPoliticaTroca from "./pages/PaginaPoliticaTroca/PaginaPoliticaTroca";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="produto/:produtoId" element={<PaginaProduto />} />
          <Route path="politica-de-troca" element={<PaginaPoliticaTroca />} />
          {/* Falta fazer a página de erro 404 */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
