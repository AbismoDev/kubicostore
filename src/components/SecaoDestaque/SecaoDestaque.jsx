import style from "./SecaoDestaque.module.css";

// Importamos os dados
import { secaoFavoritos } from "../../data/content";

// Importamos os componentes
import ContainerCards from "../ContainerCards/ContainerCards";

const SecaoDestaque = () => {
  return (
    <section className={style.secaoDestaque} id="destaques">
      <div className={`container ${style.containerDestaque}`}>
        <h2>
          {secaoFavoritos.titulo.parte1}{" "}
          <span className="destaque-texto">
            {secaoFavoritos.titulo.destaque}
          </span>{" "}
          {secaoFavoritos.titulo.parte2}{" "}
          <span className="destaque-texto">
            {secaoFavoritos.titulo.destaque2}
          </span>
        </h2>

        <div className={style.containerCards}>
          <ContainerCards data={secaoFavoritos} destaque={true} />
        </div>
      </div>
    </section>
  );
};

export default SecaoDestaque;
