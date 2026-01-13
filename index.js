import prompt from "./prompt.js";

import { promptNovaConta } from "./ui.js";
import { criarNovaConta } from "./core.js";

let contas = [
  { Nome: "Wesley", Quantidade: 200 },
  { Nome: "Daniel", Quantidade: 200 },
  { Nome: "Pedro", Quantidade: 200 },
];

let contasBlock = [];

async function init() {
  imprimirContas();

  const answer = await prompt("Gostaria de abrir uma nova conta? (S/N): ");

  if (normalize(answer) === normalize("S")) {
    //criar_nova_conta()
    const retornoUsuario = await promptNovaConta();
    const novaConta = criarNovaConta(retornoUsuario);
    contas.push(novaConta);
    console.log("");
    console.log("Conta Criada Com Sucesso! ");
    console.log("");
    imprimirContas();
    await menu();
  } else {
    console.log("");
    console.log("Opção Indisponílvel. Tente Novamente...");
    console.log("");
    await init();
  }
}

init();

function normalize(str) {
  return str.trim().toLowerCase();
}

function compareStringsNormalized(str1, str2) {
  return normalize(str1) === normalize(str2);
}

function imprimirContas() {
  console.log("Contas Disponíveis: ");
  for (let conta of contas) {
    console.log(`----${conta.Nome}----`);
    console.log(`---- Quantidade: ${conta.Quantidade}----`);
    console.log("--------------------------");
  }
}

function imprimirContasBlock() {
  console.log("Contas Bloqueadas: ");
  for (let contaB of contasBlock) {
    console.log(`----${contaB.Nome}----`);
    console.log(`---- Quantidade: ${contaB.Quantidade}----`);
    console.log("--------------------------");
  }
}

async function menu() {
  console.log(" ");
  console.log("Transferir um Valor (1)");
  console.log("Bloquear uma Conta (2)");
  console.log("Realizar uma Cobrança em Débito Automático (3)");
  const answer = await prompt("O que Gostaria de Fazer? (1); (2); (3): ");

  if (answer == 1) {
    transfer();
  }
  if (answer == 2) {
    block();
  }
  if (answer == 3) {
    automaticDebt();
  }
}

async function transfer() {
  const contaUsuario = contas[contas.length - 1];
  let nomeConta = await prompt(
    `Para qual conta gostaria de transferir, ${contaUsuario.Nome}? `
  );
  const contaEntrada = contas.find((conta) =>
    compareStringsNormalized(conta.Nome, nomeConta)
  );
  let quantidadeTransferencia = await prompt(`Quanto deseja transferir? `);
  let quantidadeTransferenciaNum = parseFloat(quantidadeTransferencia);

  if (Number.isNaN(quantidadeTransferenciaNum)) {
    console.log("Inválido");
    console.log("");
    quantidadeTransferencia = await prompt("Quanto deseja transferir? ");
  }
  contaEntrada.Quantidade += quantidadeTransferenciaNum;
  contaUsuario.Quantidade -= quantidadeTransferenciaNum;
  console.log(" ");
  console.log("Transferência Realizada!");
  console.log("");
  imprimirContas();
  console.log("");
  menu();
}

async function block() {
  const contaUsuario = contas[contas.length - 1];
  const usuarioBlock = await prompt(
    `Qual conta gostaria de bloquear, ${contaUsuario.Nome}? `
  );
  const index = contas.findIndex((conta) => conta.Nome === usuarioBlock);
  if (index === -1) {
    console.log("");
    console.log("Conta não econtrada!");
    console.log("");
    return;
  }
  if (usuarioBlock == contaUsuario.Nome) {
    console.log("");
    console.log("Não é possível bloquear a si mesmo");
    console.log("");
    return;
  }
  const [contaBloquear] = contas.splice(index, 1);
  contasBlock.push(contaBloquear);
  console.log("");
  console.log("Conta bloqueada com sucesso! ");
  console.log("");
  imprimirContas();
  console.log("");
  imprimirContasBlock();
  console.log("");
  menu();
}

async function automaticDebt() {
  const contaUsuario = contas[contas.length - 1];
  let nomeConta = await prompt(
    `Para qual conta gostaria de realizar uma cobrança, ${contaUsuario.Nome}? `
  );
  const contaEntrada = contas.find((conta) => conta.Nome === nomeConta);
  let quantidadeTransferencia = await prompt(`Quanto deseja cobrar? `);
  let quantidadeTransferenciaNum = parseFloat(quantidadeTransferencia);

  if (Number.isNaN(quantidadeTransferenciaNum)) {
    console.log("Inválido");
    console.log("");
    quantidadeTransferencia = await prompt("Quanto deseja cobrar? ");
  }
  contaEntrada.Quantidade -= quantidadeTransferenciaNum;
  contaUsuario.Quantidade += quantidadeTransferenciaNum;
  console.log(" ");
  console.log("Cobrança Realizada!");
  console.log("");
  imprimirContas();
  console.log("");
  menu();
}
