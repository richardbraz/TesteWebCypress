// Funcionalidade para gerar um e-mail aleatório

export function gerarEmail() {
    const domains = ['oul.com', 'yahoo.com', 'crdc.com', 'hotmail.com', 'gmail.com', 'outlook.com', 'erdoc.com'];
    const randomString = (length) => {
      const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    };
  
    const localPart = randomString(10);
    const domain = domains[Math.floor(Math.random() * domains.length)];
  
    return `${localPart}@${domain}`;
  }
  