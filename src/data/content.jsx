//Importamos a Logo
import logo from "../assets/icon/logo/logo.svg";

// Importamos as imagens
import imageHero from "../assets/img/hero/img-hero.webp";

// Importamos os icons
import iconEmail from "../assets/icon/icon-email.svg";
import iconInstagram from "../assets/icon/icon-instagram.svg";
import iconWhatsApp from "../assets/icon/icon-whatsapp.svg";
import iconTecnologia from "../assets/icon/icon-tecfdm.svg";
import iconSobMedida from "../assets/icon/icon-sobmedida.svg";
import iconFilamento from "../assets/icon/icon-filamento.svg";

// Aqui fica as configurações de conteudo para o site
export const textoBotao = {
  botaoDetalhes: `VER DETALHES`,

  botaoColecao: `VER COLEÇÃO`,
  botaoOrcamento: `ORÇAMENTO PERSONALIZADO`,
};

export const cabecalho = {
  logo: logo,
  menu: [
    { link: "INÍCIO", url: "/" },
    { link: "DESTAQUES", url: "#destaques" },
    { link: "SOBRE", url: "#sobre" },
    { link: "CATALOGO", url: "#catalogo" },
  ],
  menuPaginas: [
    { link: "INÍCIO", url: "/" },
    { link: "DESTAQUES", url: "/#destaques" },
    { link: "SOBRE", url: "/#sobre" },
    { link: "CATALOGO", url: "/#catalogo" },
  ],
};

export const secaoHero = {
  titulo: {
    parte1: `Do`,
    destaque: `Digital`,
    parte2: `para o`,
    destaque2: `Real`,
    parte3: ".",
  },
  texto: `Action Figures, peças de 
    reposição e projetos 
    personalizados impressos 
    com alta precisão e qualidade 
    premium.`,
  ctaBotao: textoBotao.botaoColecao,
  linkBotao: "#catalogo",
  imagem: imageHero,
};

export const secaoFavoritos = {
  titulo: {
    parte1: "Os",
    destaque: "Favoritos",
    parte2: "da",
    destaque2: "Semana",
  },
  ctaBotao: textoBotao.botaoDetalhes,
};

export const secaoDiferencial = {
  titulo: {
    parte1: "O Nosso",
    destaque: "Diferencial",
  },
  cards: [
    {
      icone: iconTecnologia,
      titulo: "Tecnologia FDM",
      texto:
        "Impressão detalhada sem camadas visíveis, pronta para pintura ou uso imediato.",
    },
    {
      icone: iconSobMedida,
      titulo: "Projetos Sob Medida",
      texto:
        "Tem um arquivo STL? Nós imprimimos. Tem uma ideia? Nós materializamos.",
    },
    {
      icone: iconFilamento,
      titulo: "Filamentos Premium",
      texto:
        "Trabalhamos apenas com materiais de alta resistência que garantem durabilidade e cores vivas.",
    },
  ],
};

export const secaoColecao = {
  titulo: {
    destaque: "Explore",
    parte1: "Nossa",
    destaque2: "Coleção",
  },
  tags: ["Todos", "Animes", "Games", "Decoração", "Utilitários"],
  ctaBotao: textoBotao.botaoDetalhes,
};

export const rodape = {
  container1: {
    logo: logo,
    titulo: "Transformando ideias em realidade 3D.",
    texto:
      "Loja especializada em Action Figures, Colecionaveis e Peças Técnicas impressas com precisão.",
  },
  container2: {
    titulo: "Links Úteis:",
    menu: [
      { link: "Início", url: "/" },
      { link: "Destaques", url: "#destaques" },
      { link: "Sobre", url: "#sobre" },
      { link: "Catalago", url: "#catalogo" },
      { link: "Política de Troca", url: "/politica-de-troca" },
    ],
    menuPaginas: [
      { link: "Início", url: "/" },
      { link: "Destaques", url: "/#destaques" },
      { link: "Sobre", url: "/#sobre" },
      { link: "Catalago", url: "/#catalogo" },
      { link: "Política de Troca", url: "/politica-de-troca" },
    ],
  },
  container3: {
    titulo: "Fale Conosco:",
    links: [
      {
        icone: iconWhatsApp,
        titulo: "WhatsApp: (32) 9 9165-7309",
        url: "https://api.whatsapp.com/send?phone=5532991657309&text=Ol%C3%A1,%20estava%20no%20seu%20site%20e%20me%20interessei%20pelos%20produtos,%20pode%20me%20dar%20mais%20detalhes%20sobre%20ele?",
      },
      {
        icone: iconInstagram,
        titulo: "Instagram: @kubicostore",
        url: "https://www.instagram.com/kubicostore",
      },
      {
        icone: iconEmail,
        titulo: "E-mail: contato@kubicostore.com.br",
        url: "mailto:contato@kubicostore.com.br",
      },
    ],
  },
  creditos: {
    disclaimer: `2026 Kúbico Store. Todos os direitos reservados.`,
    feitopor: {
      parte1: "Desenvolvido por",
      destaque: "Rosolen Digital",
      url: "https://www.rosolendigital.com.br",
    },
  },
};
