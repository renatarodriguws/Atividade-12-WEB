let hero = {
    name: "",
    vida: 100,
    forca: 10,
    recurso: 50,
    alimentos: 0,
    fase: 1
};

let inimigosPorFase = {
    1: [{ nome: "Goblin", vida: 30, dano: 10 }, { nome: "Lobo", vida: 25, dano: 8 }],
    2: [{ nome: "Esqueleto", vida: 40, dano: 15 }, { nome: "Orc", vida: 50, dano: 20 }],
    3: [{ nome: "Dragão", vida: 80, dano: 25 }, { nome: "Chefe das Trevas", vida: 100, dano: 30 }]
};

function start() {
    function start() {
        let nomeHeroi;
        
        // Solicita o nome do herói até que algo seja digitado
        do {
            nomeHeroi = prompt("Digite o nome do seu personagem:");
            if (!nomeHeroi) {
                alert("Você precisa digitar um nome!");
            }
        } while (!nomeHeroi);
        
        hero.name = nomeHeroi;
        alert(`Era uma vez um(a) HERÓI(NA) conhecido(a) como ${hero.name}, que precisa ir em uma aventura para salvar um vilarejo ameaçado por forças do mal. Como será que essa história termina?`);
        gameLoop();
    }    
}

function gameLoop() {
    if (hero.vida <= 0) {
        alert(`${hero.name} foi derrotado! Fim de jogo.`);
        return;
    }

    alert(`Status: Vida: ${hero.vida}, Força: ${hero.forca}, Recursos: ${hero.recurso}, Alimentos: ${hero.alimentos}, Fase: ${hero.fase}`);
    
    if (hero.fase > 3) {
        final();
        return;
    }

    let action = prompt("O que você quer fazer? (Ex: 'atacar', 'explorar', 'descansar', 'status')");

    switch (action.toLowerCase()) {
        case 'atacar':
            combate();
            break;
        case 'explorar':
            explorar();
            break;
        case 'descansar':
            descansar();
            break;
        case 'status':
            mostrarStatus();
            break;
        default:
            alert("Ação inválida! Tente novamente.");
            gameLoop();
            break;
    }
}

function combate() {
    let inimigo = escolherInimigo();
    alert(`Um ${inimigo.nome} apareceu!`);

    while (inimigo.vida > 0 && hero.vida > 0) {
        let acao = prompt("Você quer 'atacar' ou 'fugir'?").toLowerCase();
        
        if (acao === 'atacar') {
            inimigo.vida -= hero.forca;
            alert(`${hero.name} atacou ${inimigo.nome}! Vida do inimigo: ${inimigo.vida}`);
            if (inimigo.vida > 0) {
                hero.vida -= inimigo.dano;
                alert(`${inimigo.nome} atacou ${hero.name}! Vida do herói: ${hero.vida}`);
            }
        } else if (acao === 'fugir') {
            alert(`${hero.name} fugiu da batalha!`);
            break;
        } else {
            alert("Ação inválida! Você perdeu a vez.");
            hero.vida -= inimigo.dano;
            alert(`${inimigo.nome} atacou ${hero.name}! Vida do herói: ${hero.vida}`);
        }
    }

    if (hero.vida > 0 && inimigo.vida <= 0) {
        alert(`${hero.name} derrotou ${inimigo.nome}!`);
        hero.recurso += 20;
    }

    if (hero.fase === 1 && inimigo.nome === "Lobo" && inimigo.vida <= 0) {
        hero.fase++;
        alert(`${hero.name} completou a Fase 1! Avançando para a Fase 2.`);
    } else if (hero.fase === 2 && inimigo.nome === "Orc" && inimigo.vida <= 0) {
        hero.fase++;
        alert(`${hero.name} completou a Fase 2! Avançando para a Fase 3.`);
    }

    gameLoop();
}

function escolherInimigo() {
    let inimigos = inimigosPorFase[hero.fase];
    return inimigos[Math.floor(Math.random() * inimigos.length)];
}

function explorar() {
    const achado = Math.random() < 0.5;
    if (achado) {
        let recursoEncontrado = Math.floor(Math.random() * 30) + 1; // Recursos de 1 a 30
        alert(`${hero.name} encontrou ${recursoEncontrado} recursos!`);
        hero.recurso += recursoEncontrado;
    } else {
        let alimentoEncontrado = Math.floor(Math.random() * 5) + 1; // Alimentos de 1 a 5
        alert(`${hero.name} encontrou ${alimentoEncontrado} alimentos!`);
        hero.alimentos += alimentoEncontrado;
    }

    let encontroInimigo = Math.random() < 0.3; // 30% chance de encontrar um inimigo
    if (encontroInimigo) {
        alert(`${hero.name} encontrou um inimigo! Prepare-se para o combate!`);
        combate();
    }

    gameLoop();
}

function descansar() {
    alert(`${hero.name} descansou e recuperou 10 vida!`);
    hero.vida = Math.min(hero.vida + 10, 100);
    if (hero.alimentos > 0) {
        hero.alimentos--;
        alert(`${hero.name} consumiu um alimento. Alimentos restantes: ${hero.alimentos}`);
        hero.vida = Math.min(hero.vida + 5, 100); // Recupera mais vida ao descansar
    } else {
        alert(`${hero.name} não tem alimentos para consumir.`);
    }
    gameLoop();
}

function mostrarStatus() {
    alert(`Status do Herói: \nVida: ${hero.vida} \nForça: ${hero.forca} \nRecursos: ${hero.recurso} \nAlimentos: ${hero.alimentos} \nFase: ${hero.fase}`);
    gameLoop();
}

function final() {
    alert(`${hero.name} chegou ao vilarejo e enfrentou o Chefe das Trevas!`);
    let chefe = { nome: "Chefe das Trevas", vida: 100, dano: 30 };

    while (chefe.vida > 0 && hero.vida > 0) {
        let acao = prompt("Você quer 'atacar' ou 'fugir'?").toLowerCase();
        
        if (acao === 'atacar') {
            chefe.vida -= hero.forca;
            alert(`${hero.name} atacou ${chefe.nome}! Vida do Chefe das Trevas: ${chefe.vida}`);
            if (chefe.vida > 0) {
                hero.vida -= chefe.dano;
                alert(`${chefe.nome} atacou ${hero.name}! Vida do herói: ${hero.vida}`);
            }
        } else if (acao === 'fugir') {
            alert(`${hero.name} fugiu da batalha!`);
            break;
        } else {
            alert("Ação inválida! Você perdeu a vez.");
            hero.vida -= chefe.dano;
            alert(`${chefe.nome} atacou ${hero.name}! Vida do herói: ${hero.vida}`);
        }
    }

    if (hero.vida > 0 && chefe.vida <= 0) {
        alert(`${hero.name} derrotou o Chefe das Trevas e salvou o vilarejo! Parabéns, você venceu!`);
    } else if (hero.vida <= 0) {
        alert(`${hero.name} foi derrotado pelo Chefe das Trevas! Fim de jogo.`);
    }

    return;
}

// Inicia o jogo
// start();
