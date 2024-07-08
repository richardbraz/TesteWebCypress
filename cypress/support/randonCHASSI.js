// Funcionalidade criar um chassi válido

export function gerarCHASSI() {
    let chassi = '';
    let caracteres = 'ABCDEFGHJKLMNPRSTUVWXYZ0123456789';

    // Gerar os 11 primeiros caracteres do chassi
    for (let i = 0; i < 11; i++) {
        chassi += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    // Adicionar duas letras seguidas de quatro números
    for (let i = 0; i < 2; i++) {
        chassi += caracteres.charAt(Math.floor(Math.random() * 23)); // Letras do alfabeto
    }
    for (let i = 0; i < 4; i++) {
        chassi += caracteres.charAt(23 + Math.floor(Math.random() * 10)); // Números
    }

    return chassi;
}