const AnaliseDeDados = require("../src/analiseDeDados");

describe('AnaliseDeDados', () => {
    let analise;
  
    beforeEach(() => {
      analise = new AnaliseDeDados([10, 20, 30, 40, 50]);
    });
  
    test('Deve calcular a média corretamente', () => {
      expect(analise.calcularMedia()).toBe(30);
    });
  
    test('Deve calcular a mediana corretamente', () => {
      expect(analise.calcularMediana()).toBe(30);
    });
  
    test('Deve calcular a moda corretamente', () => {
      analise.adicionarDados([20, 20, 40, 40]);
      expect(analise.calcularModa()).toEqual([20, 40]);
    });
  
    test('Deve calcular a variância corretamente', () => {
      expect(analise.calcularVariancia()).toBe(200);
    });
  
    test('Deve calcular o desvio padrão corretamente', () => {
      expect(analise.calcularDesvioPadrao()).toBeCloseTo(14.14, 2);
    });     
  });

describe('Analise De Dados', () => {
    let analise;
    
    beforeEach(() => {
      analise = new AnaliseDeDados();
    });

    // Inicialização
    test('Deve criar instância com array vazio', () => {
      expect(analise.dados).toEqual([]);
    });

    // Adição de dados
    test('Deve adicionar dados ao array', () => {
      analise.adicionarDados([1, 2, 3]);
      expect(analise.dados).toEqual([1, 2, 3]);
    });

    test('Deve lançar erro ao adicionar um dado que não é array', () => {
      expect(() => analise.adicionarDados("abc")).toThrow("Os dados devem ser um array.");
    });

    // Limpeza
    test('Deve limpar os dados zerando o array', () => {
      analise.adicionarDados([1, 2]);
      analise.limparDados();
      expect(analise.dados).toEqual([]);
    });

    // Ordenação
    test('Deve retornar o array ordenado', () => {
      analise.adicionarDados([3,1,2]);
      expect(analise.ordenarDados()).toEqual([1,2,3]);
    });

    // Média
    test('Deve calcular a média correta', () => {
      analise.adicionarDados([1,2,3]);
      expect(analise.calcularMedia()).toBe(2);
    });

    test('calcularMedia retorna null se array vazio', () => {
      expect(analise.calcularMedia()).toBeNull();
    });

    // Mediana
    test('calcularMediana ímpar', () => {
      analise.adicionarDados([1,3,2]);
      expect(analise.calcularMediana()).toBe(2);
    });

    test('calcularMediana par', () => {
      analise.adicionarDados([1,2,3,4]);
      expect(analise.calcularMediana()).toBe(2.5);
    });

    // Moda
    test('calcularModa com moda única', () => {
      analise.adicionarDados([1,1,2]);
      expect(analise.calcularModa()).toEqual([1]);
    });

    test('calcularModa com moda múltipla', () => {
      analise.adicionarDados([1,2]);
      expect(analise.calcularModa()).toEqual([1,2]);
    });

    // Variância e desvio padrão
    test('calcularVariancia retorna valor correto', () => {
      analise.adicionarDados([1,2,3]);
      expect(analise.calcularVariancia()).toBeCloseTo(0.6667, 4);
    });

    test('calcularDesvioPadrao retorna valor correto', () => {
      analise.adicionarDados([1,2,3]);
      expect(analise.calcularDesvioPadrao()).toBeCloseTo(0.8165, 4);
    });

    // Min, Max e Amplitude
    test('encontrarMinimo e encontrarMaximo', () => {
      analise.adicionarDados([5,1,9]);
      expect(analise.encontrarMinimo()).toBe(1);
      expect(analise.encontrarMaximo()).toBe(9);
    });

    test('calcularAmplitude', () => {
      analise.adicionarDados([5,1,9]);
      expect(analise.calcularAmplitude()).toBe(8);
    });

    // Normalização
    test('normalizarDados com min ≠ max', () => {
      analise.adicionarDados([1,2,3]);
      expect(analise.normalizarDados()).toEqual([0,0.5,1]);
    });

    test('normalizarDados com min = max', () => {
      analise.adicionarDados([2,2,2]);
      expect(analise.normalizarDados()).toEqual([0,0,0]);
    });

    // Percentil
    test('calcularPercentil válido', () => {
      analise.adicionarDados([1,2,3,4]);
      expect(analise.calcularPercentil(50)).toBe(2.5);
    });

    test('calcularPercentil inválido', () => {
      analise.adicionarDados([1,2,3]);
      expect(analise.calcularPercentil(110)).toBeNull();
    });

    // Soma e produto
    test('calcularSoma e calcularProduto', () => {
      analise.adicionarDados([1,2,3]);
      expect(analise.calcularSoma()).toBe(6);
      expect(analise.calcularProduto()).toBe(6);
    });

    // Coeficiente de variação
    test('calcularCoeficienteVariacao', () => {
      analise.adicionarDados([1,2,3]);
      const coef = analise.calcularCoeficienteVariacao();
      expect(coef).toBeGreaterThan(0);
    });

    // Remover outliers
    test('removerOutliers', () => {
      const analise = new AnaliseDeDados([1,2,3,100]);
      analise.removerOutliers(0);
      expect(analise.dados).toEqual([2,3]);
    });

    // Correlação
    test('calcularCorrelacao válido', () => {
      analise.adicionarDados([1,2,3]);
      const corr = analise.calcularCorrelacao([2,4,6]);
      expect(corr).toBeCloseTo(1, 4);
    });

    test('calcularCorrelacao inválido', () => {
      analise.adicionarDados([1,2,3]);
      expect(analise.calcularCorrelacao([1,2])).toBeNull();
    });

  });
  