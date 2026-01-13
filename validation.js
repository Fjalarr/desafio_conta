export function validateAccountName(name) {
  if (name.trim() === "") {
    return { error: "Nome da conta não pode ser vazio" };
  }
  return { valid: true };
}
