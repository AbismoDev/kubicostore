import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Importando os componentes
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import SecaoHero from "../../components/SecaoHero/SecaoHero";
import SecaoDestaque from "../../components/SecaoDestaque/SecaoDestaque";
import SecaoDiferencial from "../../components/SecaoDiferencial/SecaoDiferencial";
import SecaoColecao from "../../components/SecaoColecao/SecaoColecao";
import Rodape from "../../components/Rodape/Rodape";

const PaginaInicial = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      <Cabecalho />
      <SecaoHero />
      <SecaoDestaque />
      <SecaoDiferencial />
      <SecaoColecao />
      <Rodape />
    </>
  );
};

export default PaginaInicial;
