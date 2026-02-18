import style from "./ContainerCards.module.css";

// Importamos os dados dos produtos
import { produtos } from "../../data/produtos.jsx";

// Importaremos os componentes
import Card from "../Card/Card";

const ContainerCards = ({ data, destaque }) => {
  const produtosDestaques = produtos.filter(
    (produto) => produto.destaque == true,
  );

  return (
    <div className={style.containerCards}>
      {destaque &&
        produtosDestaques.map((produto, index) => (
          <Card key={index} data={data} produto={produto} />
        ))}
    </div>
  );
};

export default ContainerCards;
