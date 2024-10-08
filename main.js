let hero = {
    name: "",
    vida: 100,
    forca: 10,
    recurso: 50
};

function start() {
    hero.name = prompt("Digite o nome do seu personagem:");
    alert(`Era uma vez um(a) HERÓI(NA) conhecido(a) como ${hero.name} que precisa ir em uma aventura para derrotar um inimigo. Como será que essa história termina?`);
    gameLoop();
}

function gameLoop() {
    if (hero.vida <= 0) {
        alert(`${hero.name} foi derrotado! Fim de jogo.`);
        return;
    }

    alert(`Status: Vida: ${hero.vida}, Força: ${hero.forca}, Recurso: ${hero.recurso}`);
    let action = prompt("O que você quer fazer? (Ex: 'atacar a torre', 'explorar a floresta', 'descansar')");

    switch (action.toLowerCase()) {
        case 'atacar a torre':
            atacarTorre();
            break;
        case 'explorar a floresta':
            explorarFloresta();
            break;
        case 'descansar':
            descansar();
            break;
        default:
            alert("Ação inválida! Tente novamente.");
            gameLoop();
            break;
    }
}

function atacarTorre() {
    const sucesso = Math.random() < 0.5;
    if (sucesso) {
        alert(`${hero.name} atacou a torre e conseguiu recuperar 20 recursos!`);
        hero.recurso += 20;
    } else {
        alert(`${hero.name} atacou a torre e perdeu 20 vida!`);
        hero.vida -= 20;
    }
    gameLoop();
}

function explorarFloresta() {
    const achado = Math.random() < 0.5;
    if (achado) {
        alert(`${hero.name} encontrou uma poção e ganhou 20 vida!`);
        hero.vida += 20;
    } else {
        alert(`${hero.name} encontrou um inimigo e perdeu 10 vida!`);
        hero.vida -= 10;
    }
    gameLoop();
}

function descansar() {
    alert(`${hero.name} descansou e recuperou 10 vida!`);
    hero.vida += 10;
    gameLoop();
}
