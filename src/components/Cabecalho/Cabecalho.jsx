import style from "./Cabecalho.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

/* Importando data conteudo */
import { cabecalho } from "../../data/content.jsx";

/* Importando o modal */
import Modal from "../Modal/Modal.jsx";

/* Importando Icon de Menu Mobile */
import menuHamb from "../../assets/icon/icon-menu.svg";

const Cabecalho = ({ tipoPagina }) => {
  const [modalVisivel, setModalVisivel] = useState(false);

  const mostrarModal = () => {
    setModalVisivel(!modalVisivel);
  };

  return (
    <header className={style.header} id="topo">
      <div className={`container ${style.containerHeader}`}>
        <div>
          <img
            src={cabecalho.logo}
            alt="logo da Kúbico Store"
            title="Kúbico Store"
            className="logo"
          />
        </div>
        <div className={style.menuMobile}>
          <button>
            <img
              src={menuHamb}
              alt="icone de menu hamburguer"
              onClick={mostrarModal}
            />
          </button>
        </div>

        <div className={style.menuDesktop}>
          <nav>
            <ul>
              {tipoPagina == "produto" || tipoPagina == "politica"
                ? cabecalho.menuPaginas.map((menu, index) => (
                    <li key={index}>
                      <Link to={menu.url}>{menu.link}</Link>
                    </li>
                  ))
                : cabecalho.menu.map((menu, index) => (
                    <li key={index}>
                      <Link to={menu.url}>{menu.link}</Link>
                    </li>
                  ))}
            </ul>
          </nav>
        </div>

        {/* Modal */}
        {modalVisivel &&
          (tipoPagina == "produto" ? (
            <Modal
              data={cabecalho}
              mostrarModal={mostrarModal}
              tipoPagina={tipoPagina}
            />
          ) : (
            <Modal data={cabecalho} mostrarModal={mostrarModal} />
          ))}
      </div>
    </header>
  );
};

export default Cabecalho;
