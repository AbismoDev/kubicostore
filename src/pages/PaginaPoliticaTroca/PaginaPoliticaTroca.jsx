import style from "./PaginaPoliticaTroca.module.css";

import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Rodape from "../../components/Rodape/Rodape";

const PaginaPoliticaTroca = () => {
  return (
    <>
      <Cabecalho tipoPagina="politica" />

      <section className={style.secaoPoliticaTroca}>
        <div className={`container ${style.containerPoliticaTroca}`}>
          <header>
            <h1>Políticas de Troca e Devolução</h1>
            <p>Atualizado em Fevereiro de 2026</p>
          </header>
          <div className={style.containerRegulamentos}>
            <section>
              <h2>1. Arrependimento da Compra</h2>
              <p>
                De acordo com o Código de Defesa do Consumidor, você tem até{" "}
                <strong>7 (sete) dias corridos</strong> após o recebimento do
                produto para solicitar a devolução por arrependimento. O produto
                deve estar sem marcas de uso e na embalagem original. O
                reembolso é feito integralmente após a conferência da peça
                devolvida.
              </p>
            </section>

            <section>
              <h2>2. Produto com Defeito ou Quebrado</h2>
              <p>
                Nossos produtos são embalados com proteção reforçada (plástico
                bolha e caixa dupla). Se sua peça chegar quebrada ou com defeito
                de impressão visível, entre em contato em até{" "}
                <strong>30 dias corridos</strong>.
              </p>
              <p>
                Enviaremos uma nova peça sem custo adicional ou faremos o
                reembolso total, incluindo o frete.
              </p>
            </section>

            <section>
              <h2>3. Produtos Personalizados</h2>
              <p>
                Itens feitos sob encomenda com personalização exclusiva (ex:
                nome gravado, projeto específico de cliente){" "}
                <strong>não podem ser trocados por arrependimento</strong>,
                apenas em caso de defeito de fabricação ou erro nosso na
                produção.
              </p>
            </section>

            <section>
              <h3>Como solicitar?</h3>
              <p>
                Mande uma foto do produto e o número do pedido para nosso
                WhatsApp ou E-mail. Nossa equipe resolve tudo em até 24h úteis.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Rodape tipoPagina="politica" />
    </>
  );
};

export default PaginaPoliticaTroca;
