import style from "./CardDiferencial.module.css";

const CardDiferencial = ({ card }) => {
  return (
    <div className={style.card}>
      <img src={card.icone} alt={card.titulo} />
      <h3>{card.titulo}</h3>
      <p>{card.texto}</p>
    </div>
  );
};

export default CardDiferencial;
