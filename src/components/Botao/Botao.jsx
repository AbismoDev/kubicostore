import style from "./Botao.module.css";

// Importamos o Link da rota
import { Link } from "react-router-dom";

const Botao = ({ link, texto, tipo = "" }) => {
  return (
    <button className={style.botao}>
      {tipo == "colecao" ? (
        <a href={link}>{texto}</a>
      ) : tipo == "orcamento" || tipo == "whatsapp" ? (
        <a href={link} target="_blank">
          {texto}
        </a>
      ) : (
        <Link to={link}>{texto}</Link>
      )}
    </button>
  );
};

export default Botao;
