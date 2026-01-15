import { contaUsuario } from "./contas.ts";
import prompt from "./prompt.js"
import {validadeAccountName} from "./validation.ts"

export async function promptNewAccount(): Promise<string> { 
    while(true) {
        const name = await prompt('Qual é o seu nome? ')
        const validationResult = validadeAccountName(name);
        if (validationResult.valid) {
        return name;
        }
        console.log(validationResult.error)
    }
    
}

export async function answerQuestionNumber(question: string): Promise<number> { 
    while(contaUsuario) {
        const answer = await prompt(question)
        const value = Number(answer);
        if (!Number.isNaN(value)) {
            return value
        }
        console.log('Digite apenas um número válido')
    }

    throw new Error('Usuario não está definido')
    
}
