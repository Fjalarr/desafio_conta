import prompt from "./prompt.js";

let contas=[
    {Nome: 'Wesley', Quantidade: 200},
    {Nome: 'Daniel', Quantidade: 200},
    {Nome: 'Pedro', Quantidade: 200}
];

 function Imprimir_Contas() {
    console.log('Contas Disponíveis: ')
    for (let conta of contas){
    console.log(`----${conta.Nome}----`)
    console.log(`---- Quantidade: ${conta.Quantidade}----`)
    console.log('--------------------------')

 }
};

 async function criar_nova_conta() {
    const name=await prompt('Qual é o seu nome? ')
    return {
        Nome: name,
        Quantidade: 200
    }

 }

async function init1() {
    Imprimir_Contas()

    const a= await prompt('Gostaria de abrir uma nova conta? (S/N): ')

    if (a.toUpperCase()==='S'){
        //criar_nova_conta()
        const nova_conta= await criar_nova_conta();
        contas.push(nova_conta);
        console.log('')
        console.log('Conta Criada Com Sucesso! ')
        console.log('')
        Imprimir_Contas()
        await To_Do()
    }
    else {
        console.log('')
        console.log('Opção Indisponílvel. Tente Novamente...')
        console.log('')
        await init1();
    }
    
};

init1();

async function To_Do(){
    console.log(' ')
    console.log('Transferir um Valor (1)')
    console.log('Bloquear um Usuário (2)')
    console.log('Realizar uma Cobrança em Débito Automático (3)')
    const b= await prompt('O que Gostaria de Fazer? (1); (2); (3): ')
    }




