import style from "./SecaoHero.module.css";

// Importamos os dados do conteúdo
import { secaoHero } from "../../data/content";

// Importamos os componentes
import Botao from "../Botao/Botao.jsx";

const SecaoHero = () => {
  return (
    <section id="hero">
      <div className={`container ${style.containerHero}`}>
        <div className={style.containerCoteudo}>
          <h1>
            {secaoHero.titulo.parte1}{" "}
            <span className="destaque-texto">{secaoHero.titulo.destaque}</span>{" "}
            {secaoHero.titulo.parte2}{" "}
            <span className="destaque-texto">{secaoHero.titulo.destaque2}</span>
            {secaoHero.titulo.parte3}
          </h1>
          <p>{secaoHero.texto}</p>
          <Botao
            link={secaoHero.linkBotao}
            texto={secaoHero.ctaBotao}
            tipo="colecao"
          />
        </div>

        <div className={style.containerImage}>
          <img src={secaoHero.imagem} />
        </div>
      </div>
    </section>
  );
};

export default SecaoHero;
