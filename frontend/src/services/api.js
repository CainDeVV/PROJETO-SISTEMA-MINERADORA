const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getFromStorage = (key) => {
    const data = localStorage.getItem(key);
    if (data) return JSON.parse(data);

    const initialData = {
        'equipamentos': [{ id: '1', nome: 'Escavadeira Hidráulica', setor: 'Extração' }, { id: '2', nome: 'Caminhão Fora de Estrada', setor: 'Transporte' }],
        'funcionarios': [{ id: '1', nome: 'Carlos Silva', cargo: 'Operador de Máquinas' }, { id: '2', nome: 'Ana Souza', cargo: 'Engenheira de Minas' }],
        'cidades': [{ id: '1', nome: 'Belo Horizonte', estado: 'MG' }, { id: '2', nome: 'Parauapebas', estado: 'PA' }],
        'servicos': [{ id: '1', nome: 'Manutenção Preventiva', valor: '5000' }, { id: '2', nome: 'Inspeção de Segurança', valor: '2500' }]
    };
    
    const initial = initialData[key] || [];
    localStorage.setItem(key, JSON.stringify(initial));
    return initial;
};

const saveToStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const mockService = (key) => ({
    listar: async () => {
        await delay(300);
        return { data: getFromStorage(key) };
    },
    criar: async (item) => {
        await delay(300);
        const data = getFromStorage(key);
        const newItem = { ...item, id: Date.now().toString() };
        data.push(newItem);
        saveToStorage(key, data);
        return { data: newItem };
    }
});

export const equipamentoService = mockService('equipamentos');
export const cidadeService = mockService('cidades');
export const funcionarioService = mockService('funcionarios');
export const servicoService = mockService('servicos');

