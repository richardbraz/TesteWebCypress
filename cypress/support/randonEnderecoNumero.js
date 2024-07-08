// Funcionalidade para gerar um numero de endereço aleatório

export function numeroEndereco(min = 1, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  