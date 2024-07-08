// Funcionalidade para gerar um código de Detran aleatório

export function gerarCodigoDetran() {
    return Math.floor(1000 + Math.random() * 9000);
  }
  