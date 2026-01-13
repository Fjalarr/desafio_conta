import { test, expect, describe } from "vitest";

import { criarNovaConta } from "../core.js";

describe("criarNovaConta", () => {
  test("com nome válido deve retornar objeto da conta", () => {
    const nomeContaNova = "Josevaldo";

    const resultado = criarNovaConta(nomeContaNova);

    expect(resultado).toEqual({ Nome: nomeContaNova, Quantidade: 200 });
  });

  test("com nome vazio deve dar erro", () => {
    const nomeContaNova = "";

    const resultado = criarNovaConta(nomeContaNova);

    expect(resultado).toEqual({ error: "Nome da conta não pode ser vazio" });
  });

  test("com nome com espaços deve dar erro", () => {
    const nomeContaNova = "   ";

    const resultado = criarNovaConta(nomeContaNova);

    expect(resultado).toEqual({ error: "Nome da conta não pode ser vazio" });
  });
});
