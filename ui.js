import prompt from "./prompt.js";
import { validateAccountName } from "./validation.js";

export async function promptNovaConta() {
  while (true) {
    const name = await prompt("Qual é o seu nome? ");
    const validationResult = validateAccountName(name);
    if (validationResult.valid) {
      return name;
    }
    console.log(validationResult.error);
  }
}
