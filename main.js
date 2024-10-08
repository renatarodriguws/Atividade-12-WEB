class Heroi {
    constructor(nome) {
        this.nome = nome;
        this.vida = 100;
        this.forca = 10;
        this.recurso = 50;
    }

    status() {
        console.log(`Status de ${this.nome}: Vida = ${this.vida}, Força = ${this.forca}, Recurso = ${this.recurso}`);
    }

    enfrentarDesafio() {
        const desafio = Math.floor(Math.random() * 3);
        switch (desafio) {
            case 0:
                this.vida -= 20;
                console.log(`${this.nome} enfrentou uma armadilha e perdeu 20 de vida!`);
                break;
            case 1:
                this.forca += 5;
                console.log(`${this.nome} encontrou uma arma poderosa e ganhou 5 de força!`);
                break;
            case 2:
                this.recurso += 30;
                console.log(`${this.nome} encontrou um tesouro e ganhou 30 de recurso!`);
                break;
        }
    }
}

let luna = new Heroi("Luna");
let rodadas = 5;

function start() {
    console.log("Aventura de Luna começou!");
    luna.status();
    
    for (let i = 0; i < rodadas; i++) {
        console.log(`Rodada ${i + 1}:`);
        luna.enfrentarDesafio();
        luna.status();

        if (luna.vida <= 0) {
            console.log(`${luna.nome} foi derrotada! Fim de jogo.`);
            return;
        }
    }

    console.log(`${luna.nome} venceu a aventura com vida: ${luna.vida}, força: ${luna.forca}, recurso: ${luna.recurso}`);
}

// Para iniciar o jogo, execute o comando: start()
