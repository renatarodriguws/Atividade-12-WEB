let heroi = {
    nome: "Valente",
    vida: 100,
    forca: 10,
    recursos: 50
};

function start() {
    console.log("Bem-vindo à Aventura do Herói!");
    console.log(`Você é ${heroi.nome}.`);
    console.log(`VIDA: ${heroi.vida}, FORÇA: ${heroi.forca}, RECURSOS: ${heroi.recursos}`);

    let rodadas = 5;
    for (let i = 0; i < rodadas; i++) {
        console.log(`Rodada ${i + 1}:`);
        let desafio = Math.floor(Math.random() * 20);
        console.log(`Desafio: ${desafio}`);
        
        if (heroi.forca > desafio) {
            console.log("Você venceu o desafio!");
            heroi.recursos += 10; // Ganha recursos
        } else {
            console.log("Você perdeu o desafio...");
            heroi.vida -= 20; // Perde vida
        }

        // Atualiza status do herói
        console.log(`VIDA: ${heroi.vida}, FORÇA: ${heroi.forca}, RECURSOS: ${heroi.recursos}`);
        
        // Verifica se o herói ainda está vivo
        if (heroi.vida <= 0) {
            console.log("Você foi derrotado! Fim do jogo.");
            return;
        }
    }

    console.log("Parabéns! Você completou todas as rodadas e saiu VIVO!");
}
