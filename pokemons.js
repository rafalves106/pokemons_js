function Pokemon(numeroPokedex, nome, level, evolucao, natureza) {
    this.numeroPokedex = numeroPokedex;
    this.nome = nome;
    this.level = level;
    this.evolucao = evolucao;
    this.natureza = natureza;

    this.fraqueza = function() {
        if (this.natureza === "Elétrico") {
            return "Terrestre";
        } else if (this.natureza === "Voador") {
            return "Elétrico, Gelo e Pedra";
        } else {
            return "Desconhecido";
        }
    }

    this.vantagem = function() {
        if (this.natureza === "Elétrico") {
            return "Água e Voador"
        } else if (this.natureza === "Voador") {
            return "Inseto, Lutador e Planta";
        } else {
            return "Desconhecido";
        }
    }
}

function Pikachu(nome) {
    Pokemon.call(this, 25, nome, 20, "Raichu", "Elétrico");
    this.fraqueza = this.fraqueza();
    this.vantagem = this.vantagem();
}

function Pidgeotto(nome) {
    Pokemon.call(this, 17, nome, 15, "Pidgeot", "Voador");
    this.fraqueza = this.fraqueza();
    this.vantagem = this.vantagem();
}

function Mewtwo(nome) {
    Pokemon.call(this, 150, nome, 60, "Desconhecido", "Desconhecido")
    this.fraqueza = this.fraqueza();
    this.vantagem = this.vantagem();
}

const pokemon1 = new Pikachu("Rato");
const pokemon2 = new Pidgeotto("Passarinho")
const pokemon3 = new Mewtwo("Rato de Academia")

console.log(pokemon1)
console.log(pokemon2)
console.log(pokemon3)