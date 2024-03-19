function verificarSaldo(saldo) {
    if (saldo > 0) {
      return "Saldo positivo";
    } else {
      return "Saldo negativo";
    }
  }
  
  function realizarSaque(saldoAtual, valorSaque) {
    if (valorSaque <= saldoAtual) {
      saldoAtual -= valorSaque;
      return Saque realizado com sucesso. Saldo atual: R$${saldoAtual};
    } else {
      return "Saldo insuficiente";
    }
  }
  
  function realizarDeposito(saldoAtual, valorDeposito) {
    saldoAtual += valorDeposito;
    return Depósito realizado com sucesso. Novo saldo: R$${saldoAtual};
  }
  
  function realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia) {
    if (valorTransferencia <= saldoOrigem && valorTransferencia <= limiteTransferencia) {
      saldoOrigem -= valorTransferencia;
      saldoDestino += valorTransferencia;
      return "Transferência realizada com sucesso";
    } else if (valorTransferencia > saldoOrigem) {
      return "Saldo insuficiente para transferência";
    } else {
      return "Valor excede o limite de transferência";
    }
  }
  
  function checarChequeEspecial(saldo) {
    if (saldo < 0) {
      return "Dentro do limite do cheque especial";
    } else {
      return "Fora do limite do cheque especial";
    }
  }
  
  function atualizarCadastro(cadastroAtivo, saldo) {
    if (cadastroAtivo) {
      if (saldo > 0) {
        return "Cadastro ativo e saldo positivo";
      } else {
        return "Cadastro ativo mas precisa regularizar saldo";
      }
    } else {
      return "Por favor, atualize seu cadastro";
    }
  }
  
  function avaliarCredito(saldo, historicoCredito, rendaMensal) {
    if (saldo > 1000 && historicoCredito && rendaMensal > 3000) {
      return "Crédito aprovado";
    } else {
      return "Crédito negado";
    }
  }
  
  
  function exibirMenu() {
    console.log("=== MENU ===");
    console.log("1. Verificar Saldo.");
    console.log("2. Realizar Saque.");
    console.log("3. Realizar Depósito.");
    console.log("4. Realizar Transferência.");
    console.log("5. Checar Cheque Especial.");
    console.log("6. Atualizar Cadastro.");
    console.log("7. Avaliar Crédito.");
    console.log("0. Sair.");
  }
  
  
  function main() {
    let saldo = 1000;
    let cadastroAtivo = true;
    
  
    let opcao;
    do {
      exibirMenu();
      opcao = parseInt(prompt("Escolha uma opção:"));
      
      switch (opcao) {
        case 1:
          console.log(verificarSaldo(saldo));
          break;
        case 2:
          let valorSaque = parseFloat(prompt("Digite o valor do saque:"));
          console.log(realizarSaque(saldo, valorSaque));
          break;
        case 3:
          let valorDeposito = parseFloat(prompt("Digite o valor do depósito:"));
          console.log(realizarDeposito(saldo, valorDeposito));
          break;
        case 4:
          let valorTransferencia = parseFloat(prompt("Digite o valor da transferência:"));
          let limiteTransferencia = 2000; 
          let saldoDestino = 2000;  
          console.log(realizarTransferencia(saldo, saldoDestino, valorTransferencia, limiteTransferencia));
          break;
        case 5:
          console.log(checarChequeEspecial(saldo));
          break;
        case 6:
          console.log(atualizarCadastro(cadastroAtivo, saldo));
          break;
        case 7:
          let historicoCredito = true;  
          let rendaMensal = 4000;  
          console.log(avaliarCredito(saldo, historicoCredito, rendaMensal));
          break;
        case 0:
          console.log("Saindo do sistema.");
          break;
        default:
          console.log("Opção inválida.");
          break;
      }
    } while (opcao !== 0);
  }
  
  
  main();