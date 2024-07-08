// Funcionalidade de marca aleatória

export function gerarMarcaVeiculo() {
    const marcas = [
        "Audi", "BMW", "Chevrolet", "Fiat", "Ford", "Honda", 
        "Hyundai", "Jeep", "Mercedes-Benz", "Nissan", "Renault", 
        "Toyota", "Volkswagen", "Volvo"
    ];

    // Escolher uma marca aleatoriamente
    const indice = Math.floor(Math.random() * marcas.length);
    return marcas[indice];
}