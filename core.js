import { validateAccountName } from "./validation";

export function criarNovaConta(name) {
  const validationResult = validateAccountName(name);
  if (validationResult.error) {
    return validationResult;
  }

  return {
    Nome: name,
    Quantidade: 200,
  };
}
