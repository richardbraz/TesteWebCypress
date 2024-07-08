// Funcionalidade para inserir um CEP válido

const ceps = ['13412239', '31630900', '88020-210', '88020-230', '88020-231', '13412-240', '13401-630', '13401-615']

export function gerarCepAleatorio() {
    const randomIndex = Math.floor(Math.random() * ceps.length);
    return ceps[randomIndex];
  }