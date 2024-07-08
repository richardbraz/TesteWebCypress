// Funcionalidade para gerar um renavam válido

export function gerarRenavam() {
    let renavam = '';
    let numeros = '0123456789';

    // Gerar os 10 primeiros dígitos do RENAVAM
    for (let i = 0; i < 10; i++) {
        renavam += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }

    // Calcular o dígito verificador usando o algoritmo específico do RENAVAM
    let soma = 0;
    let peso = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 10; i++) {
        soma += parseInt(renavam.charAt(i)) * peso[i];
    }
    let digito = 11 - (soma % 11);
    if (digito >= 10) {
        digito = 0;
    }
    renavam += digito;

    return renavam;
}