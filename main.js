// Variáveis iniciais
let nome = "";
let vida = 100;
let forca = 50;
let recurso = 30; // Pode ser dinheiro, magia, poções etc.

function start() {
    nome = prompt("Digite o nome do(a) herói(na):");
    console.log(`Era uma vez um(a) herói(na) chamado(a) ${nome} que precisa enfrentar uma grande aventura.`);
    rodada1();
}

function mostrarStatus() {
    console.log(`STATUS DO HERÓI(NA) ${nome}: Vida: ${vida}, Força: ${forca}, Recurso: ${recurso}`);
}

function rodada1() {
    console.log("\nRodada 1: Encontro na floresta");
    console.log(`${nome} se depara com um monstro!`);
    
    let acao = prompt("Você quer lutar (1) ou fugir (2)?");
    
    if (acao == 1) {
        console.log(`${nome} decide lutar!`);
        lutar(20, 10);  // Dano e força do monstro
    } else {
        console.log(`${nome} decide fugir, mas perde recursos no processo.`);
        vida -= 10;
        recurso -= 5;
    }

    mostrarStatus();
    if (vida > 0) rodada2();
}

function rodada2() {
    console.log("\nRodada 2: A caverna gelada");
    console.log(`${nome} encontra um baú misterioso.`);
    
    let acao = prompt("Você quer abrir o baú (1) ou ignorá-lo (2)?");
    
    if (acao == 1) {
        console.log(`${nome} encontra uma poção de cura!`);
        vida += 20;
        recurso += 10;
    } else {
        console.log(`${nome} ignora o baú e segue em frente.`);
    }

    mostrarStatus();
    if (vida > 0) rodada3();
}

function rodada3() {
    console.log("\nRodada 3: O chefe final");
    console.log(`${nome} chega ao covil do chefe maligno!`);
    
    let acao = prompt("Você quer enfrentar o chefe (1) ou tentar negociar (2)?");

    if (acao == 1) {
        console.log(`${nome} decide lutar com todas as suas forças!`);
        lutar(50, 30);  // Dano e força do chefe final
    } else {
        console.log(`${nome} tenta negociar, mas o chefe não aceita e ataca!`);
        lutar(50, 20);  // Negociar causa menos dano, mas ainda é uma luta
    }

    mostrarStatus();
    if (vida > 0) rodada4(); // Continua para a próxima rodada se o jogador sobreviver
}

function rodada4() {
    console.log("\nRodada 4: O Vale do Vento Morto");
    console.log(`${nome} atravessa um vale árido e misterioso, onde ventos traiçoeiros roubam a energia dos viajantes.`);
    
    let acao = prompt("Você quer montar um acampamento e descansar (1) ou continuar andando sem parar (2)?");

    if (acao == 1) {
        console.log(`${nome} monta um acampamento e recupera parte de sua força.`);
        vida += 10;
        forca += 5;
    } else {
        console.log(`${nome} continua andando, mas sofre o efeito dos ventos fortes, perdendo energia.`);
        vida -= 15;
        forca -= 10;
    }

    mostrarStatus();
    if (vida > 0) rodada5();
}

function rodada5() {
    console.log("\nRodada 5: O Guardião do Portal");
    console.log(`${nome} chega ao último obstáculo: um guardião gigantesco que protege o portal para a vila.`);
    
    let acao = prompt("Você quer lutar com o guardião (1) ou tentar resolver o enigma (2)?");

    if (acao == 1) {
        console.log(`${nome} ataca o guardião com todas as suas forças!`);
        lutar(60, 40);  // Dano e força do guardião
    } else {
        console.log(`${nome} decide resolver o enigma que o guardião propôs.`);
        let resposta = prompt("O guardião pergunta: 'O que tem cabeça, mas não pensa?' (1) Alfinete (2) Pedra");

        if (resposta == 1) {
            console.log(`O guardião fica satisfeito com a resposta e deixa ${nome} passar.`);
        } else {
            console.log(`Resposta errada! O guardião ataca!`);
            lutar(60, 40);  // Se errar o enigma, terá que lutar
        }
    }

    mostrarStatus();
    if (vida > 0) {
        console.log(`Parabéns! ${nome} derrotou o guardião e atravessou o portal para salvar a vila!`);
    } else {
        console.log(`Infelizmente, ${nome} foi derrotado(a) no último desafio. A vila está em perigo.`);
    }
}

function lutar(dano, forcaMonstro) {
    if (forca >= forcaMonstro) {
        console.log(`${nome} venceu a batalha!`);
        recurso += 10;
    } else {
        console.log(`${nome} foi ferido(a) gravemente!`);
        vida -= dano;
        forca -= 10;
    }
}

