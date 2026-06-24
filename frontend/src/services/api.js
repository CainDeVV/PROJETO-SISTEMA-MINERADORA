const API_URL = 'http://localhost:3000'; // Default backend URL

export const equipamentoService = {
    listar: async () => {
        const response = await fetch(`${API_URL}/equipamentos`);
        if (!response.ok) throw new Error('Erro ao listar equipamentos');
        const data = await response.json();
        return { data };
    },
    criar: async (equipamento) => {
        const response = await fetch(`${API_URL}/equipamentos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(equipamento)
        });
        if (!response.ok) throw new Error('Erro ao criar equipamento');
        const data = await response.json();
        return { data };
    }
};

export const cidadeService = {
    listar: async () => {
        const response = await fetch(`${API_URL}/cidades`);
        if (!response.ok) throw new Error('Erro ao listar cidades');
        const data = await response.json();
        return { data };
    },
    criar: async (cidade) => {
        const response = await fetch(`${API_URL}/cidades`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cidade)
        });
        if (!response.ok) throw new Error('Erro ao criar cidade');
        const data = await response.json();
        return { data };
    }
};

export const funcionarioService = {
    listar: async () => {
        const response = await fetch(`${API_URL}/funcionarios`);
        if (!response.ok) throw new Error('Erro ao listar funcionarios');
        const data = await response.json();
        return { data };
    },
    criar: async (funcionario) => {
        const response = await fetch(`${API_URL}/funcionarios`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(funcionario)
        });
        if (!response.ok) throw new Error('Erro ao criar funcionario');
        const data = await response.json();
        return { data };
    }
};

export const servicoService = {
    listar: async () => {
        const response = await fetch(`${API_URL}/servicos`);
        if (!response.ok) throw new Error('Erro ao listar servicos');
        const data = await response.json();
        return { data };
    },
    criar: async (servico) => {
        const response = await fetch(`${API_URL}/servicos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(servico)
        });
        if (!response.ok) throw new Error('Erro ao criar servico');
        const data = await response.json();
        return { data };
    }
};
