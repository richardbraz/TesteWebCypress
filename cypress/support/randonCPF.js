// Funcionalidade para gerar um CPF aleatório

export function gerarCPF() {
    const randomNumbers = () => Math.floor(Math.random() * 9);
    
    const cpf = [];
    for (let i = 0; i < 9; i++) {
      cpf.push(randomNumbers());
    }
  
    // Calcular o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += cpf[i] * (10 - i);
    }
    let firstVerifier = 11 - (sum % 11);
    if (firstVerifier >= 10) firstVerifier = 0;
    cpf.push(firstVerifier);
  
    // Calcular o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += cpf[i] * (11 - i);
    }
    let secondVerifier = 11 - (sum % 11);
    if (secondVerifier >= 10) secondVerifier = 0;
    cpf.push(secondVerifier);
  
    return cpf.join('');
  }
  