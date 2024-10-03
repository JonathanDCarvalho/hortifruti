// listarProdutos.ts
import { ProdutoCRUD } from "./ProdutoCRUD";

export function listarProdutos(): void {
  const produtos = ProdutoCRUD.getProdutos();
  const tbodyFrutas = document.getElementById(
    "tbody-frutas"
  ) as HTMLTableSectionElement;
  tbodyFrutas.innerHTML = "";

  produtos.forEach((produto) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${produto.imagem}</td>
            <td>${produto.nome}</td>
            <td>R$ ${produto.preco.toFixed(2)}</td>
            <td><button onclick="editarProduto(${
              produto.id
            })">Editar</button></td>
            <td><button onclick="deletarProduto(${
              produto.id
            })">Excluir</button></td>
        `;
    tbodyFrutas.appendChild(tr);
  });
}
