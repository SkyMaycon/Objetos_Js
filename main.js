// Classe abstrata
class Animal {
  constructor(nome, especie) {
    if (new.target === Animal) {
      throw new Error("Não é possível instanciar uma classe abstrata.");
    }

    this.nome = nome;
    this.especie = especie;
  }

  emitirSom() {
    throw new Error("O método 'emitirSom()' deve ser implementado nas classes filhas.");
  }

  mover() {
    console.log("O animal está se movendo.");
  }
}

// Classe filha 1
class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome, "Cachorro");
    this.raca = raca;
  }

  emitirSom() {
    console.log("O cachorro está latindo.");
  }
}

// Classe filha 2
class Gato extends Animal {
  constructor(nome, cor) {
    super(nome, "Gato");
    this.cor = cor;
  }

  emitirSom() {
    console.log("O gato está miando.");
  }
}

// Instâncias de objetos
const cachorro1 = new Cachorro("Bolinha", "Labrador");
const gato1 = new Gato("Frajola", "Preto e branco");
const cachorro2 = new Cachorro("Max", "Poodle");

// Teste de métodos e propriedades
console.log(cachorro1.nome); // Saída: "Bolinha"
console.log(gato1.especie); // Saída: "Gato"

cachorro1.emitirSom(); // Saída: "O cachorro está latindo."
gato1.emitirSom(); // Saída: "O gato está miando."

cachorro2.mover(); // Saída: "O animal está se movendo."