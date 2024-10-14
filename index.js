// 3 Escrevendo classes de um jogo

class makeHero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        if (this.tipo === "mago") {
            ataque = "magia";
            console.log(`o ${this.tipo} atacou usando ${ataque}`);
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
            console.log(`o ${this.tipo} atacou usando ${ataque}`);
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
            console.log(`o ${this.tipo} atacou usando ${ataque}`);
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
            console.log(`o ${this.tipo} atacou usando ${ataque}`);
        }
    }
}

let magoFogo = new makeHero("Piro", 32, "mago");
let guerreiroBruto = new makeHero("Arthur", 45, "guerreiro");
let mongeSabio = new makeHero("Bastion", 53, "monge");
let ninjaSombra = new makeHero("Ren", 38, "ninja");

magoFogo.atacar();
guerreiroBruto.atacar();
mongeSabio.atacar();
ninjaSombra.atacar();
