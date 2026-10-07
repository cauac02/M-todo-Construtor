export {}; // evita conflito de nomes com outros arquivos da pasta

// ===== Classe Produto =====
class Produto {
  private nome: string;
  private preco: number;

  constructor(nome: string, preco: number) {
    if (nome.trim() === "") {
      throw new Error("O nome não pode ser vazio.");
    }
    if (isNaN(preco) || preco < 0) {
      throw new Error("O preço não pode ser negativo.");
    }
    this.nome = nome.trim();
    this.preco = preco;
  }

  public exibirInformacoes(): void {
    console.log(`Produto: ${this.nome}`);
    console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
  }
}

// ===== Classe principal =====
class Main {
  public static executar(): void {
    // Objeto válido
    const produto = new Produto("Notebook", 3500.9);
    produto.exibirInformacoes();

    // Teste: nome vazio
    try {
      new Produto("", 10);
    } catch (e) {
      console.log("Erro:", (e as Error).message);
    }

    // Teste: preço negativo
    try {
      new Produto("Mouse", -50);
    } catch (e) {
      console.log("Erro:", (e as Error).message);
    }
  }
}

Main.executar();