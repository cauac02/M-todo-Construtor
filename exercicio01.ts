class Produto {
    constructor(
        private nome: string,
        private preco: number,
        private quantidade: number
    ) {}

    public getNome(): string {
        return this.nome;
    }

    public getPreco(): number {
        return this.preco;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }

    public setPreco(preco: number): void {
        if (preco > 0) {
            this.preco = preco;
        } else {
            console.log("O preço deve ser maior que zero.");
        }
    }

    public setQuantidade(quantidade: number): void {
        if (quantidade >= 0) {
            this.quantidade = quantidade;
        } else {
            console.log("A quantidade não pode ser negativa.");
        }
    }
}

const produto = new Produto("Notebook", 3500, 10);

console.log("Nome:", produto.getNome());
console.log("Preço:", produto.getPreco());
console.log("Quantidade:", produto.getQuantidade());

produto.setPreco(4000);
produto.setQuantidade(8);

console.log("Novo preço:", produto.getPreco());
console.log("Nova quantidade:", produto.getQuantidade());