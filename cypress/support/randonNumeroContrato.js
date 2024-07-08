// Funcionalidade para gerar numero de contrato aleatório

export function gerarNumeroContrato() {
    let contrato = '';
    let caracteres = '0123456789';

    // Gerar 10 caracteres aleatórios
    for (let i = 0; i < 10; i++) {
        contrato += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return contrato;
}
