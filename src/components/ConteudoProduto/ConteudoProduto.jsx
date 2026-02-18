import style from "./ConteudoProduto.module.css";

// Importamos os dados dos produtos
import { produtos } from "../../data/produtos";

// Importamos os useParams
import { useParams } from "react-router-dom";

// Importamos os componentes
import Botao from "../Botao/Botao";

const ConteudoProduto = () => {
  const { produtoId } = useParams();
  const produtoEscolhido = produtos.filter(
    (produto) => produto.id == produtoId,
  );

  const gerarLinkWhatsapp = () => {
    const mensagem = `Olá, estava no seu site e me interessei pelo produto "${produtoEscolhido[0].nome}", pode me dar mais detalhes sobre ele?`;
    const contato = `https://api.whatsapp.com/send?phone=5532991657309&text=${encodeURI(mensagem)}`;
    return contato;
  };

  const linkContato = gerarLinkWhatsapp();
  const textoBotao = `FAZER PEDIDO`;

  return (
    <section>
      <div className={`container ${style.containerProduto}`}>
        <div className={style.containerFotoProduto}>
          <img src={produtoEscolhido[0].foto} alt="" />
        </div>
        <div className={style.containerConteudoProduto}>
          <h1>{produtoEscolhido[0].nome}</h1>
          <div className={style.containerConteudoProduto}>
            {produtoEscolhido[0].descricaoPagina}
          </div>
          <Botao link={linkContato} texto={textoBotao} tipo="whatsapp" />
          <small>
            * Ao clicar no botão "Fazer pedido", você será redirecionado ao
            nosso whatsapp, a onde daremos sequencia ao pedido do produto. *
          </small>
        </div>
      </div>
    </section>
  );
};

export default ConteudoProduto;
