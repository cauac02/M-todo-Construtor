export {};

// ===== Classe Estudante =====
class Estudante {
  private nome: string;
  private nota1: number;
  private nota2: number;

  constructor(nome: string, nota1: number, nota2: number) {
    if (nome.trim() === "") {
      throw new Error("O nome não pode ser vazio.");
    }
    if (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
      throw new Error("A nota 1 deve estar entre 0 e 10.");
    }
    if (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
      throw new Error("A nota 2 deve estar entre 0 e 10.");
    }
    this.nome = nome.trim();
    this.nota1 = nota1;
    this.nota2 = nota2;
  }

  public calcularMedia(): number {
    return (this.nota1 + this.nota2) / 2;
  }

  public exibirInformacoes(): void {
    const media = this.calcularMedia();
    console.log(`Estudante: ${this.nome}`);
    console.log(`Nota 1: ${this.nota1.toFixed(1)}`);
    console.log(`Nota 2: ${this.nota2.toFixed(1)}`);
    console.log(`Média: ${media.toFixed(1)}`);
    console.log(`Situação: ${media >= 6 ? "Aprovado" : "Reprovado"}`);
  }
}

// ===== Classe principal =====
class Main {
  public static executar(): void {
    // Objeto válido
    const estudante = new Estudante("Maria", 8, 7.5);
    estudante.exibirInformacoes();

    // Teste: nome vazio
    try {
      new Estudante("", 5, 5);
    } catch (e) {
      console.log("Erro:", (e as Error).message);
    }

    // Teste: nota acima de 10
    try {
      new Estudante("João", 11, 5);
    } catch (e) {
      console.log("Erro:", (e as Error).message);
    }

    // Teste: nota negativa
    try {
      new Estudante("Ana", 5, -2);
    } catch (e) {
      console.log("Erro:", (e as Error).message);
    }
  }
}

Main.executar();