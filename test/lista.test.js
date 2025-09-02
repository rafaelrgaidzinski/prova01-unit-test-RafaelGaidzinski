const ListaDeCompras = require('../src/lista');

describe('Testes da classe ListaDeCompras', () => {
    let lista;

    beforeEach(() => {
        lista = new ListaDeCompras();
        lista.adicionarItem('Leite');
        lista.adicionarItem('Pão');
    });

    test('Deve adicionar itens corretamente à lista', () => {
        expect(lista.obterItens()).toEqual(['Leite', 'Pão']);
    });

    test('Deve remover um item existente da lista', () => {
        lista.removerItem('Leite');
        expect(lista.obterItens()).toEqual(['Pão']);
    });

    test('Deve lançar um erro ao tentar remover um item que não existe na lista', () => {
        expect(() => lista.removerItem('Manteiga')).toThrow("Item não encontrado na lista");
    });

    test('Deve lançar um erro específico ao tentar remover um item inexistente', () => {
        try {
            lista.removerItem('Manteiga');
        } catch (e) {
            expect(e.message).toBe("Item não encontrado na lista");
        }
    });
});

describe('Classe ListaDeCompras - Cobertura mínima completa', () => {
    let lista;

    beforeEach(() => {
        lista = new ListaDeCompras();
    });

    test('Inicializa com array vazio', () => {
        expect(lista.obterItens()).toEqual([]);
    });

    test('Adicionar um único item à lista', () => {
        lista.adicionarItem('Leite');
        expect(lista.obterItens()).toEqual(['Leite']);
    });

    test('Adicionar múltiplos itens à lista', () => {
        lista.adicionarItem('Leite');
        lista.adicionarItem('Pão');
        lista.adicionarItem('Ovos');
        expect(lista.obterItens()).toEqual(['Leite', 'Pão', 'Ovos']);
    });

    test('Remover item existente da lista', () => {
        lista.adicionarItem('Leite');
        lista.adicionarItem('Pão');
        lista.removerItem('Leite');
        expect(lista.obterItens()).toEqual(['Pão']);
    });

    test('Remover último item da lista', () => {
        lista.adicionarItem('Leite');
        lista.removerItem('Leite');
        expect(lista.obterItens()).toEqual([]);
    });

    test('Lançar erro ao remover item inexistente', () => {
        lista.adicionarItem('Leite');
        expect(() => lista.removerItem('Manteiga')).toThrow("Item não encontrado na lista");
    });

    test('Obter itens retorna array correto', () => {
        lista.adicionarItem('Leite');
        lista.adicionarItem('Pão');
        expect(lista.obterItens()).toEqual(['Leite', 'Pão']);
    });

    test('Adicionar e remover vários itens sequencialmente', () => {
        lista.adicionarItem('Leite');
        lista.adicionarItem('Pão');
        lista.adicionarItem('Ovos');
        lista.removerItem('Pão');
        lista.removerItem('Leite');
        expect(lista.obterItens()).toEqual(['Ovos']);
    });
});
