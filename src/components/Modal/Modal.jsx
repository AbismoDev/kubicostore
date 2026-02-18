import style from "./Modal.module.css";

import closeMenu from "../../assets/icon/icon-close.svg";
import { Link } from "react-router-dom";

const Modal = ({ data, mostrarModal, tipoPagina }) => {
  return (
    <div>
      <div className={style.containerModal}>
        <header className={`${style.headerModal} container`}>
          <img src={data.logo} alt="logo da Kúbico Store" className="logo" />
          <button>
            <img src={closeMenu} alt="icone de fechar" onClick={mostrarModal} />
          </button>
        </header>

        <section className={`container ${style.secaoLinks}`}>
          <nav className={style.containerLinks}>
            <ul>
              {tipoPagina == "produto"
                ? data.menuPaginas.map((menu, index) => (
                    <li key={index} onClick={mostrarModal}>
                      <Link to={menu.url}>{menu.link}</Link>
                    </li>
                  ))
                : data.menu.map((menu, index) => (
                    <li key={index} onClick={mostrarModal}>
                      <Link to={menu.url}>{menu.link}</Link>
                    </li>
                  ))}
            </ul>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Modal;
