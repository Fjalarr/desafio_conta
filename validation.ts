export function validadeAccountName(name:string){
    const numeroTeste = /^[A-Za-zÀ-ÿ]+$/.test(name);
    if (name.trim() === '') {
        return {error: 'Nome de Usuário não pode ser vazio'}
    }
    if (!numeroTeste) {
        return {error: 'Nome deve conter caratceres válidos: Não é permitido números ou caracteres especiais.'}
    }
    return {valid: true}
}

export function normalize(str:string) { Promise<string>
  return str.trim().toLowerCase();
}