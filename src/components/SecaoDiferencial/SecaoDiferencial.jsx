import style from "./SecaoDiferencial.module.css";

// Importamos os dados
import { secaoDiferencial } from "../../data/content";

// Importamos os componentes
import CardDiferencial from "../CardDiferencial/CardDiferencial";

const SecaoDiferencial = () => {
  return (
    <section id="sobre">
      <div className={`container ${style.containerDiferencial}`}>
        <h2>
          {secaoDiferencial.titulo.parte1}{" "}
          <span className="destaque-texto">
            {secaoDiferencial.titulo.destaque}
          </span>
        </h2>

        <div className={style.containerCards}>
          {secaoDiferencial.cards.map((card, index) => (
            <CardDiferencial key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecaoDiferencial;
