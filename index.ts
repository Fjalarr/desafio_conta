import { contaUsuario, setContaUsuario } from "./contas";
import { createNewAccount, imprimirContas, menu } from "./core";
import { promptNewAccount } from "./ui";
import { normalize } from "./validation";
import prompt from "./prompt.js"

async function init() {
    imprimirContas()
    console.log('')
    console.log('Olá, Bem vindo')
    console.log('')
    const answer = (await prompt('Gostaria de abrir uma nova conta?(S/N) ')) ?? ''
    if (normalize(answer) === normalize('S')) {
        const userReturn = await promptNewAccount()
        const newAccount = await createNewAccount(userReturn)
        setContaUsuario(newAccount)
        if (contaUsuario) {
        console.log('')
        console.log('Conta criada com sucesso!')
        console.log('')
        imprimirContas()
        console.log('')
        console.log('Usuário Atual')
        console.log('---------------------------')
        console.log(`Nome: ${contaUsuario.name}`)
        console.log(`Valor:${contaUsuario.value}`)
        console.log(`ID:${contaUsuario.id}`)
        }
        await menu()
    }
    else if(normalize(answer) === normalize('N')) {
        console.log('')
        console.log('Seu direito constitucional')
        console.log('')
        await init()
    }
    else {
        console.log('')
        console.log('Opção inválida')
        console.log('')
        await init ()
    }
}   

init()
