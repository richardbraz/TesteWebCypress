// Funcionalidade para gerar uma razão social aleatório

export function gerarRazaoSocial() {
    const firstNames = ['Banco Daicoval', 'Banco Sul', 'Leblon Financiadora', 'Alfa Financiamento', 'Banco Delta', 'TYUO Multimarcas', 'BMG Financiamentos', 'JP Morgan', 'AT&T'];
    const lastNames = ['S/A', 'LTDA', 'CIA', 'S.A'];
  
    const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
  
    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
  
    return `${firstName} ${lastName}`;
  }