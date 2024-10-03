
export type Produto = {
  id: number;
  imagem: string;
  nome: string;
  preco: number;
};

export class ProdutoCRUD {
  private static produtos: Produto[] = [];
  private static currentId = 1;

  static adicionarProduto(produto: Produto): void {
    this.produtos.push(produto);
  }

  static getProdutos(): Produto[] {
    return this.produtos;
  }

  static atualizarProduto(
    id: number,
    dadosAtualizados: Partial<Produto>
  ): void {
    const produto = this.produtos.find((p) => p.id === id);
    if (produto) {
      Object.assign(produto, dadosAtualizados);
    }
  }

  static deletarProduto(id: number): void {
    this.produtos = this.produtos.filter((p) => p.id !== id);
  }
}
