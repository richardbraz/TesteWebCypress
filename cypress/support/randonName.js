// Funcionalidade para gerar um nome aleatório

export function gerarNOME() {
    const firstNames = ['João', 'Maria', 'José', 'Ana', 'Carlos', 'Paula', 'Lucas', 'Fernanda', 'Marcos', 'Patrícia', 'Regis', 'Serafim', 'Edson', 'Roberto', 'Sebastian', 'Marta', 'Ramon', 'Judas'];
    const lastNames = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Lima', 'Pereira', 'Carvalho', 'Ribeiro', 'Almeida', 'Costa', 'Barbosa', 'Silva', 'Nascimento', 'Azevedo', 'Pinto', 'Arantes'];
  
    const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
  
    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
  
    return `${firstName} ${lastName}`;
  }
  