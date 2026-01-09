import prompt from "./prompt.js";

let contas=[
    {Nome: 'Wesley', Quantidade: 200},
    {Nome: 'Daniel', Quantidade: 200},
    {Nome: 'Pedro', Quantidade: 200}
];

let contasBlock=[]

function Imprimir_Contas() {
    console.log('Contas Disponíveis: ')
    for (let conta of contas){
    console.log(`----${conta.Nome}----`)
    console.log(`---- Quantidade: ${conta.Quantidade}----`)
    console.log('--------------------------')

 }
};

function Imprimir_Contas_Block() {
    console.log('Contas Bloqueadas: ')
    for (let contaB of contasBlock){
    console.log(`----${contaB.Nome}----`)
    console.log(`---- Quantidade: ${contaB.Quantidade}----`)
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

async function init() {
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
        await Menu()
    }
    else {
        console.log('')
        console.log('Opção Indisponílvel. Tente Novamente...')
        console.log('')
        await init();
    }
    
};

init();

async function Menu(){
    console.log(' ')
    console.log('Transferir um Valor (1)')
    console.log('Bloquear uma Conta (2)')
    console.log('Realizar uma Cobrança em Débito Automático (3)')
    const b= await prompt('O que Gostaria de Fazer? (1); (2); (3): ')
    
    if (b == 1) {
        Transfer()
    }
    if (b == 3) {
        Transfer2()
    }
    if (b == 2) {
        Block()
    }
    }

async function Transfer(){
    const contaUsuario = contas[contas.length - 1]
    let nomeConta = await prompt (`Para qual conta gostaria de transferir, ${contaUsuario.Nome}? `)
    const contaEntrada = contas.find((conta)=>conta.Nome === nomeConta)
    let quantidadeTransferencia = await prompt(`Quanto deseja transferir? `) 
    let quantidadeTransferenciaNum = parseFloat(quantidadeTransferencia)
    
    if(Number.isNaN(quantidadeTransferenciaNum)) {
    console.log('Inválido')
    console.log('')
    quantidadeTransferencia = await prompt('Quanto deseja transferir? ')
   } 
   contaEntrada.Quantidade +=quantidadeTransferenciaNum
   contaUsuario.Quantidade -=quantidadeTransferenciaNum
   console.log(' ')
   console.log('Transferência Realizada!')
   console.log('')
   Imprimir_Contas()
   console.log('')
   Menu()

}

async function Block(){
    const contaUsuario = contas[contas.length - 1]
    const usuarioBlock = await prompt (`Qual conta gostaria de bloquear, ${contaUsuario.Nome}? `)
    const index = contas.findIndex(conta=>conta.Nome === usuarioBlock)
        if (index === -1){
            console.log('')
            console.log('Conta não econtrada!')
            console.log('')
            return
        }
        if (usuarioBlock == contaUsuario.Nome){
            console.log('')
            console.log('Não é possível bloquear a si mesmo')
            console.log('')
            return
        }
    const [contaBloquear]= contas.splice(index, 1)
    contasBlock.push(contaBloquear) 
    console.log('')
    console.log('Conta bloqueada com sucesso! ')
    console.log('')
    Imprimir_Contas()
    console.log('')
    Imprimir_Contas_Block()
    console.log('')
    Menu()

}

async function Transfer2(){
    const contaUsuario = contas[contas.length - 1]
    let nomeConta = await prompt (`Para qual conta gostaria de realizar uma cobrança, ${contaUsuario.Nome}? `)
    const contaEntrada = contas.find((conta)=>conta.Nome === nomeConta)
    let quantidadeTransferencia = await prompt(`Quanto deseja cobrar? `) 
    let quantidadeTransferenciaNum = parseFloat(quantidadeTransferencia)
    
    if(Number.isNaN(quantidadeTransferenciaNum)) {
    console.log('Inválido')
    console.log('')
    quantidadeTransferencia = await prompt('Quanto deseja cobrar? ')
   } 
   contaEntrada.Quantidade -=quantidadeTransferenciaNum
   contaUsuario.Quantidade +=quantidadeTransferenciaNum
   console.log(' ')
   console.log('Cobrança Realizada!')
   console.log('')
   Imprimir_Contas()
   console.log('')
   Menu()

}




