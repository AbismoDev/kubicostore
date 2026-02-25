import style from "./Rodape.module.css";
import { Link } from "react-router-dom";

// Importamos os dados
import { rodape } from "../../data/content";

const Rodape = ({ tipoPagina }) => {
  return (
    <footer className={style.rodape}>
      <div className={`container ${style.containerRodape}`}>
        <div className={style.containerRodapeContainers}>
          <div>
            <h4>{rodape.container3.titulo}</h4>
            <nav>
              <ul>
                {rodape.container3.links.map((link, index) => (
                  <li key={index}>
                    <img src={link.icone} alt="" />
                    <a href={link.url} target="_blank">
                      {link.titulo}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <h4>{rodape.container2.titulo}</h4>
            <nav>
              <ul>
                {tipoPagina == "produto"
                  ? rodape.container2.menuPaginas.map((link, index) => (
                      <li key={index}>
                        <a href={link.url}>{link.link}</a>
                      </li>
                    ))
                  : rodape.container2.menu.map((link, index) => (
                      <li key={index}>
                        <a href={link.url}>{link.link}</a>
                      </li>
                    ))}
              </ul>
            </nav>
          </div>
          <div>
            <img src={rodape.container1.logo} alt="" className="logo" />
            <h4>{rodape.container1.titulo}</h4>
            <p>{rodape.container1.texto}</p>
          </div>
        </div>

        <div>
          <p>&copy; {rodape.creditos.disclaimer}</p>
          <p>
            {rodape.creditos.feitopor.parte1}{" "}
            <a href={rodape.creditos.feitopor.url} className="destaque-texto">
              {rodape.creditos.feitopor.destaque}
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
