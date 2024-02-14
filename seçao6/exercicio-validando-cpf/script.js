function validarCPF(cpf) {
    let CPF = '705.484.450-52';
    cpf = CPF.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
  
    if (cpf.length !== 11) {
      return false; // CPF deve ter 11 dígitos
    }
  
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }
  
    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digito1 = resto === 10 || resto === 11 ? 0 : resto;
  
    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digito2 = resto === 10 || resto === 11 ? 0 : resto;
  
    // Verifica se os dígitos verificadores são válidos
    if (parseInt(cpf.charAt(9)) !== digito1 || parseInt(cpf.charAt(10)) !== digito2) {
      return false;
    }
  
    return true;
  }
  
  // Exemplo de uso:
  let cpfParaValidar = "123.456.789-09";
  if (validarCPF(cpfParaValidar)) {
    console.log("CPF válido!");
  } else {
    console.log("CPF inválido!");
  }