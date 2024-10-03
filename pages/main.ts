import CardComponent from "../components/card.component.js";
import IFruta from "../models/fruta.js";

// Definição inicial do array de frutas
let frutaArray: Array<IFruta> = [
  {
    imagem: "img/cards/banana.png",
    descricao: "Banana",
    preco: 9.9,
  },
  {
    imagem: "img/cards/maca.png",
    descricao: "Maçã",
    preco: 8.99,
  },
];

// Recupera os dados do localStorage
const frutaJSON = localStorage.getItem("frutaArray");

if (!frutaJSON) {
  localStorage.setItem("frutaArray", JSON.stringify(frutaArray));
} else {
  frutaArray = JSON.parse(frutaJSON);
}

// Função para atualizar o localStorage
function atualizarLocalStorage() {
  localStorage.setItem("frutaArray", JSON.stringify(frutaArray));
}

// Função para listar as frutas na interface
function listarFrutas() {
  const cardContainer = document.getElementById(
    "tbody-frutas"
  ) as HTMLTableSectionElement;
  cardContainer.innerHTML = ""; // Limpa o conteúdo anterior

  // Cria cards para cada fruta
  frutaArray.forEach((fruta, index) => {
    const card = new CardComponent(fruta); // Passando o índice
    cardContainer.appendChild(card.render());
  });
}

// Função para adicionar uma nova fruta
function adicionarFruta(imagem: string, descricao: string, preco: number) {
  const novaFruta: IFruta = { imagem, descricao, preco };
  frutaArray.push(novaFruta);
  atualizarLocalStorage();
  listarFrutas();
}

// Função para deletar uma fruta
function deletarFruta(index: number) {
  frutaArray.splice(index, 1); // Remove a fruta pelo índice
  atualizarLocalStorage();
  listarFrutas();
}

// Inicializa o formulário
const form = document.getElementById("frutaForm") as HTMLFormElement;
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const imagemInput = document.getElementById("imagem") as HTMLInputElement;
  const descricaoInput = document.getElementById("nome") as HTMLInputElement;
  const precoInput = document.getElementById("preco") as HTMLInputElement;

  adicionarFruta(
    imagemInput.value,
    descricaoInput.value,
    parseFloat(precoInput.value)
  );

  // Limpa os campos
  imagemInput.value = "";
  descricaoInput.value = "";
  precoInput.value = "";
});

// Chama a função para listar as frutas ao carregar a página
document.addEventListener("DOMContentLoaded", listarFrutas);
