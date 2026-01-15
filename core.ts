import {validadeAccountName} from './validation.ts'
import {contas, contasBlock} from './contas.ts'
import { contaUsuario } from './contas.ts'
import { answerQuestionNumber } from './ui.ts'

function getNextId(): number { 
    const all = [...contas, ...contasBlock]
    if(contaUsuario){
        all.push(contaUsuario)
    }
    if (all.length === 0) return 1;
    return Math.max(...all.map(conta => conta.id))+1;
}

export function createNewAccount(name:string):Contas{
    return {
        name:name,
        value: 200,
        id: getNextId()
    };
}

export function imprimirContas() {Promise<string>
    console.log('Contas Disponíveis')
    console.log('---------------------------')
    for (let conta of contas) {
        console.log(`Nome:${conta.name}`)
        console.log(`Valor:${conta.value}`)
        console.log(`ID:${conta.id}`)
        console.log('---------------------------')
    }
}

export async function menu () {
    while (contaUsuario) {
        console.log(' ')
        console.log('Transferir um Valor (1)')
        console.log('Bloquear uma Conta (2)')
        console.log('Realizar uma Cobrança em Débito Automático (3)')
        console.log('Trocar de Usuário (4)')
        console.log(' ')
        const answer = await answerQuestionNumber(`O que gostaria de fazer hoje, ${contaUsuario.name}? `)
            if (answer == 1) {
                transfer()
            }
            else if (answer == 2) {
                block()
            }
            else if (answer == 3) {
                automaticDebt()
            }
            else if (answer == 4) {
                userChange()
            }
            else {
                console.log('Opção Inválida')
                continue
            }
    }
}

