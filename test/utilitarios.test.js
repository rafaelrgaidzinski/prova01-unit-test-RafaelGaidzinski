const Utilitarios = require("../src/utilitarios");

describe('Análise Utilitários', ()=> {
    let utilitario;
  
    beforeEach(() => {
      utilitario = new Utilitarios();
    });

    test("Deve inverter a string", async () => {
        expect(utilitario.inverterString("satc")).toBe('ctas');
    });

    test("Deve contar a quantidade de caracteres da string", async () => {
        expect(utilitario.contarCaracteres("satc")).toBe(4);
    });

    test("Deve transformar todos os caracteres da string em letras maiúsculas", async () => {
        expect(utilitario.paraMaiusculas("satc")).toBe("SATC");
    });

    test("Deve transformar todos os caracteres da string em letras minúsculas", async () => {
        expect(utilitario.paraMinusculas("SATC")).toBe("satc");
    });

    test("Deve transformar o primeiro caractere da string em letras maiúscula", async () => {
        expect(utilitario.primeiraLetraMaiuscula("satc")).toBe("Satc");
    });

    test("Somar dois valores", async () => {
        expect(utilitario.somar(7, 10)).toStrictEqual(17);
    });

    test("Subtrair dois valores", async () => {
        expect(utilitario.subtrair(30, 15)).toStrictEqual(15);
    });

    test("Multiplicar dois valores", async () => {
        expect(utilitario.multiplicar(3, 7)).toStrictEqual(21);
    });

    test("Dividir dois valores", async () => {
        expect(utilitario.dividir(15, 3)).toStrictEqual(5);
    });

    test('Deve lançar um erro ao verificar que o divisor é zero', async () => {
        expect(() => utilitario.dividir(15, 0)).toThrow('Divisão por zero');
    });

    test("Deve verificar se um número é par", async () => {
        expect(utilitario.ehPar(14)).toBeTruthy();
    });

    test("Deve verificar se um número é par", async () => {
        expect(utilitario.ehPar(15)).toBeFalsy();
    });

    test("Deve retornar o primeiro elemento do array", async () => {
        expect(utilitario.primeiroElemento(["Rafael", "Ronsoni", "Gaidzinski"])).toBe("Rafael");
    });

    test("Deve retornar undefined ao tentar acessar o primeiro elemento de array vazio", () => {
        expect(utilitario.primeiroElemento([])).toBeUndefined();
    });

    test("Deve retornar o último elemento do array", async () => {
        expect(utilitario.ultimoElemento(["Rafael", "Ronsoni", "Gaidzinski"])).toBe("Gaidzinski");
    });
    
    test("Deve retornar undefined ao tentar acessar o último elemento de array vazio", () => {
        expect(utilitario.ultimoElemento([])).toBeUndefined();
    });

    test("Deve retornar o tamanho do array", async () => {
        expect(utilitario.tamanhoArray("Rafael")).toBe(6);
    });

    test("Deve ordenar os elementos do array", async () => {
        expect(utilitario.ordenarArray(["F", "A", "D", "C"])).toEqual(["A", "C", "D", "F"]);
    });

    test("Deve ordenar corretamente um array de números", () => {
        expect(utilitario.ordenarArray([10, 1, 3])).toEqual([1, 10, 3]);
    });

    test("Deve inverter os elementos do array", async () => {
        expect(utilitario.inverterArray(["F", "A", "D", "C"])).toEqual(["C", "D", "A", "F"]);
    });

    test("Deve gerar um número aleatório", async () => {
        const sorteado = utilitario.gerarNumeroAleatorio()
        expect(sorteado).toBeGreaterThanOrEqual(0);
        expect(sorteado).toBeLessThanOrEqual(1 * sorteado);
    });

    test("Deve gerar um número aleatório até o limite passado como argumento", () => {
        const numero = utilitario.gerarNumeroAleatorio(10);
        expect(numero).toBeGreaterThanOrEqual(0);
        expect(numero).toBeLessThanOrEqual(10);
    });    

    test("Deve verificar se é um número ", async () => {
        expect(utilitario.ehNumero(14)).toBeTruthy();
        expect(utilitario.ehNumero("14")).toBeFalsy();
    });

    test("Deve retornar false para NaN e true para Infinity em ehNumero", () => {
        expect(utilitario.ehNumero(NaN)).toBeFalsy();
        expect(utilitario.ehNumero(Infinity)).toBeTruthy();
    });
    

    test("Deve remover os espaços", async () => {
        expect(utilitario.removerEspacos(" Rafael Ronsoni ")).toBe("Rafael Ronsoni");
    });

    test("Deve repetir o texto a quantidade de vezes passadas como argumento", async () => {
        expect(utilitario.repetirTexto("Rafael", 5)).toBe("RafaelRafaelRafaelRafaelRafael");
    });

    test("Deve retornar string vazia ao repetir texto 0 vezes", () => {
        expect(utilitario.repetirTexto("abc", 0)).toBe("");
    });    

    test("Deve juntar todos os itens do array", async () => {
        expect(utilitario.juntarArray(["Rafael", "Ronsoni", "Gaidzinski"], " - ")).toBe("Rafael - Ronsoni - Gaidzinski");
    });

    test("Deve juntar os itens do array usando separador padrão", () => {
        expect(utilitario.juntarArray(["a", "b", "c"])).toBe("a,b,c");
    });

    test("Deve contar quantas palavras a string tem", async () => {
        expect(utilitario.contarPalavras("Rafael Ronsoni Gaidzinski")).toBe(3);
    });

    test("Deve retornar a média do array", async () => {
        expect(utilitario.mediaArray([1, 3, 5, 7, 9])).toBe(5);
    });

    test("Deve retornar 0 ao calcular a média de um array vazio", () => {
        expect(utilitario.mediaArray([])).toBe(0);
    });
    
    test("Deve remover os itens duplicados do array", async () => {
        expect(utilitario.removerDuplicados([1, 1, 5, 7, 7])).toEqual([1, 5, 7]);
    });

    test("Deve verificar se a palavra é palindroma", async () => {
        expect(utilitario.ehPalindromo("Arara")).toBeTruthy();
        expect(utilitario.ehPalindromo("Rafael")).toBeFalsy();
    });

    test('Deve mesclar os objetos', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { c: 99, d: 3 };
    
        const resultado = utilitario.mesclarObjetos(obj1, obj2);
    
        expect(resultado).toEqual({ a: 1, b: 2, c: 99, d: 3 });
    });
    
    test("Deve sobrescrever propriedades ao mesclar objetos com chaves duplicadas", () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 3, c: 4 };
        expect(utilitario.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
    });
    
});