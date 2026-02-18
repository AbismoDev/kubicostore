import style from "./SecaoColecao.module.css";

import { useState } from "react";

// Importamos os dados
import { secaoColecao } from "../../data/content.jsx";
import { produtos } from "../../data/produtos.jsx";

// Importamos os componentes
import Card from "../Card/Card.jsx";

const SecaoColecao = () => {
  const [filtroAtivado, setFiltroAtivado] = useState("Todos");

  const produtosFiltrados =
    filtroAtivado === "Todos"
      ? produtos
      : produtos.filter((produto) => produto.tags.includes(filtroAtivado));

  return (
    <section className={style.secaoColecao} id="catalogo">
      <div className={`container ${style.containerColecao}`}>
        <h2>
          <span className="destaque-texto">{secaoColecao.titulo.destaque}</span>{" "}
          {secaoColecao.titulo.parte1}{" "}
          <span className="destaque-texto">
            {secaoColecao.titulo.destaque2}
          </span>
        </h2>

        <div className={style.containerTags}>
          {secaoColecao.tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFiltroAtivado(tag)}
              className={`${filtroAtivado === tag ? style.tagDestaque : style.tagDefault} ${style.botaoTag}`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className={style.containerCards}>
          {produtosFiltrados.map((produto, index) => (
            <Card key={index} data={secaoColecao} produto={produto} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecaoColecao;
