import CardComponent from "../components/card.component.js";
let frutaArray = [
    {
        imagem: "img/cards/banana.png",
        descricao: "Banana",
        preco: 9.90
    },
    {
        imagem: "img/cards/maca.png",
        descricao: "Maçã",
        preco: 8.99
    }
];
// const frutaArray: Array<IFruta> | null = localStorage.getItem("frutaArray")
const frutaJSON = localStorage.getItem("frutaArray");
let frutaJSONArray = [];
if (!frutaJSON) {
    localStorage.setItem("frutaArray", JSON.stringify(frutaArray));
}
else {
    frutaArray = JSON.parse(frutaJSON);
}
console.log(frutaJSONArray);
// const card = new CardComponent(frutaArray[0]);
for (let fruta of frutaArray) {
    const card = new CardComponent(fruta);
}
