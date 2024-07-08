// Funcionalidade para gerar um numero de telefone aleatório

export function gerarNumeroTelefone() {
    const randomDigit = () => Math.floor(Math.random() * 10);
    const randomAreaCode = () => Math.floor(Math.random() * 90) + 10; // Área code between 10 and 99
  
    const areaCode = randomAreaCode();
    const firstPart = Array.from({ length: 4 }, randomDigit).join('');
    const secondPart = Array.from({ length: 4 }, randomDigit).join('');
  
    // For mobile numbers, we need to start the first part with a '9' and have 5 digits
    const isMobile = Math.random() > 0.5; // 50% chance of being a mobile number
    const firstPartMobile = `9${Array.from({ length: 4 }, randomDigit).join('')}`;
    const phoneNumber = isMobile 
      ? `(${areaCode}) ${firstPartMobile}-${secondPart}` 
      : `(${areaCode}) ${firstPart}-${secondPart}`;
  
    return phoneNumber;
  }
  