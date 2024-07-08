// Funcionalidade criar uma placa válida

export function gerarPlacaMercosul() {
    let placa = '';
    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numeros = '0123456789';

    // Gerar as três letras iniciais da placa
    for (let i = 0; i < 3; i++) {
        placa += letras.charAt(Math.floor(Math.random() * letras.length));
    }

    // Gerar os quatro números da placa
    for (let i = 0; i < 4; i++) {
        placa += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }

    // Gerar o último dígito verificador da placa
    placa += letras.charAt(Math.floor(Math.random() * letras.length));

    return placa;
}