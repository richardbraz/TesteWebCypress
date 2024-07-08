// Funcionalidade para gerar uma cor aleatória

export function gerarCorAleatoria() {
    const cores = [
        "Azul", "Verde", "Vermelho", "Amarelo", "Roxo", 
        "Laranja", "Preto", "Branco", "Cinza", "Marrom",
        "Beje", "Dourado", "Prata", "Rosa"
    ];

    // Escolher uma cor aleatoriamente
    const indice = Math.floor(Math.random() * cores.length);
    return cores[indice];
}