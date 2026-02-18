import style from "./PaginaProduto.module.css";
import { useEffect } from "react";

// Importamos os componentes
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import ConteudoProduto from "../../components/ConteudoProduto/ConteudoProduto";
import Rodape from "../../components/Rodape/Rodape";

const PaginaProduto = () => {
  useEffect(() => {
    const element = document.querySelector("#topo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <>
      <Cabecalho tipoPagina="produto" />
      <ConteudoProduto />
      <Rodape tipoPagina="produto" />
    </>
  );
};

export default PaginaProduto;
