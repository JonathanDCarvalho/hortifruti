import { ProdutoCRUD } from "./ProdutoCRUD";

export function atualizarProduto(
  id: number,
  imagem: string,
  nome: string,
  preco: number
): void {
  ProdutoCRUD.atualizarProduto(id, { imagem, nome, preco });
}
