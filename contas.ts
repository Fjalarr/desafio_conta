export const contas: Contas[] = [
    {name: 'Daniel', value: 200, id: 1},
    {name: 'Pedro', value: 200, id: 2},
    {name: 'Wesley', value: 200, id: 3},
    {name: 'Beatriz', value: 200, id: 4},
    {name: 'Laura', value: 200, id: 5}
]

export let contaUsuario: Contas | null = null
export function setContaUsuario(conta: Contas) {
  contaUsuario = conta;
}

export const contasBlock: Contas[] = []

