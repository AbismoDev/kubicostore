import style from "./Card.module.css";

// Importaremos os componentes
import Botao from "../Botao/Botao";

const Card = ({ data, produto }) => {
  return (
    <div className={style.card}>
      <div className={style.cardImage}>
        <img src={produto.foto} alt={produto.nome} />
      </div>
      <div className={style.cardDescricao}>
        <h3>{produto.nome}</h3>
        <p>{produto.descricaoCard}</p>
        <Botao
          link={`/produto/${produto.id}`}
          texto={data.ctaBotao}
          tipo="normal"
        />
      </div>
    </div>
  );
};

export default Card;
