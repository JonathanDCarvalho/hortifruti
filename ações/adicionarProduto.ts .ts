
import { ProdutoCRUD, Produto } from "./ProdutoCRUD";

export function adicionarProduto(
  imagem: string,
  nome: string,
  preco: number
): void {
  const novoProduto: Produto = {
    id: ProdutoCRUD.currentId++,
    imagem,
    nome,
    preco,
  };
  ProdutoCRUD.adicionarProduto(novoProduto);
}
