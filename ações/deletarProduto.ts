import { ProdutoCRUD } from "./ProdutoCRUD";

export function deletarProduto(id: number): void {
  ProdutoCRUD.deletarProduto(id);
}
