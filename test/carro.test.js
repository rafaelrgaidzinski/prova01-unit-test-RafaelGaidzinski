const Carro = require('../src/carro');

describe('Testes da classe Carro', () => {
    let carro;

    beforeEach(() => {
        carro = new Carro('Toyota', 'Corolla', 2020);
    });

    test('Deve criar um carro com a marca, modelo e ano corretos', () => {
        expect(carro.marca).toBe('Toyota');
        expect(carro.modelo).toBe('Corolla');
        expect(carro.ano).toBe(2020);
        expect(carro.kilometragem).toBe(0);
    });

    test('Deve dirigir o carro e aumentar a quilometragem corretamente', () => {
        carro.dirigir(100);
        expect(carro.kilometragem).toBe(100);
    });

    test('Não deve alterar a quilometragem se a distância for negativa', () => {
        carro.dirigir(-50);
        expect(carro.kilometragem).toBe(0);
    });

    test('Deve retornar as informações corretas do carro', () => {
        const info = carro.obterInfo();
        expect(info).toBe('Toyota Corolla, Ano: 2020, Quilometragem: 0 km');
    });

    test('Deve retornar as informações corretas após dirigir', () => {
        carro.dirigir(150);
        const info = carro.obterInfo();
        expect(info).toBe('Toyota Corolla, Ano: 2020, Quilometragem: 150 km');
    });
});

describe('Classe Carro - Cobertura mínima completa', () => {
    let carro;

    beforeEach(() => {
        carro = new Carro('Honda', 'Civic', 2021);
    });

    test('Construtor inicializa propriedades corretamente', () => {
        expect(carro.marca).toBe('Honda');
        expect(carro.modelo).toBe('Civic');
        expect(carro.ano).toBe(2021);
        expect(carro.kilometragem).toBe(0);
    });

    test('Dirigir com distância positiva aumenta quilometragem', () => {
        carro.dirigir(200);
        expect(carro.kilometragem).toBe(200);
    });

    test('Dirigir com distância zero não altera quilometragem', () => {
        carro.dirigir(0);
        expect(carro.kilometragem).toBe(0);
    });

    test('Dirigir com distância negativa não altera quilometragem', () => {
        carro.dirigir(-100);
        expect(carro.kilometragem).toBe(0);
    });

    test('Obter informações retorna string correta sem quilometragem adicional', () => {
        expect(carro.obterInfo()).toBe('Honda Civic, Ano: 2021, Quilometragem: 0 km');
    });

    test('Obter informações retorna string correta após dirigir', () => {
        carro.dirigir(150);
        expect(carro.obterInfo()).toBe('Honda Civic, Ano: 2021, Quilometragem: 150 km');
    });

    test('Dirigir várias vezes acumula quilometragem corretamente', () => {
        carro.dirigir(50);
        carro.dirigir(70);
        carro.dirigir(30);
        expect(carro.kilometragem).toBe(150);
    });
});

