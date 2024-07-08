// Funcionalidade para gerar um numero de gravame aleatório

export function gerarGravame() {
    let gravame = '';
    let caracteres = '0123456789';

    // Gerar 8 caracteres aleatórios
    for (let i = 0; i < 8; i++) {
        gravame += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return gravame;
}