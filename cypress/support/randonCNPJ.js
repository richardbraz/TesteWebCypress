// Funcionalidade para gerar um CNPJ aleatório

export function gerarCNPJ() {
    const randomNumbers = () => Math.floor(Math.random() * 9);
    
    const cnpj = [];
    for (let i = 0; i < 12; i++) {
      cnpj.push(randomNumbers());
    }
  
    // Calcular o primeiro dígito verificador
    let sum = 0;
    const weight1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 12; i++) {
      sum += cnpj[i] * weight1[i];
    }
    let firstVerifier = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    cnpj.push(firstVerifier);
  
    // Calcular o segundo dígito verificador
    sum = 0;
    const weight2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 13; i++) {
      sum += cnpj[i] * weight2[i];
    }
    let secondVerifier = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    cnpj.push(secondVerifier);
  
    return cnpj.join('');
  }
  