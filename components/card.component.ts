import IFruta from "../models/fruta"

export default class CardComponent {
  constructor(novaFruta: IFruta) {
    const cardFrutas = document.getElementById("frutas");

    if(cardFrutas) cardFrutas.innerHTML += this.render(novaFruta);
  }

  render(novaFruta: IFruta) {
    return `
        <div class="frutas-itens" id="produto-1">
            <div class="fruta-imagem"><img src="${novaFruta.imagem}" alt="${novaFruta.descricao}"></div>
            <h4>${novaFruta.descricao}</h4>
            <p>${novaFruta.preco}Kg</p>
            <a href="#"><i class="bi bi-cart2"></i> Adicionar</a>
        </div>
        `;
  }
}
