import React, { useState, useEffect } from 'react'; 
import { servicoService } from '../services/api'; 
 
export default function Servicos() { 
    const [servicos, setServicos] = useState([]); 
    const [descricao, setDescricao] = useState(''); 
    const [valor, setValor] = useState(''); 
 
    useEffect(() => { 
        carregarServicos(); 
    }, []); 
 
    const carregarServicos = async () => { 
        try { 
            const response = await servicoService.listar(); 
            setServicos(response.data); 
        } catch (error) { 
            console.error("Erro ao buscar serviços", error); 
        } 
    }; 
 
    const cadastrar = async () => { 
        if (!descricao || !valor) return alert("Preencha todos os campos!"); 
        try { 
            await servicoService.criar({ descricao, valor }); 
            setDescricao(''); 
            setValor(''); 
            carregarServicos(); // Atualiza a lista após cadastrar 
        } catch (error) { 
            console.error("Erro ao cadastrar", error); 
        } 
    }; 
 
    return ( 
        <div> 
            <h2>Gestão de Serviços</h2> 
             
            <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}> 
                <h3>Novo Serviço</h3> 
                <input type="text" placeholder="Descrição do Serviço" value={descricao} 
onChange={(e) => setDescricao(e.target.value)} style={{ marginRight: '10px' }} /> 
                <input type="number" placeholder="Valor (Ex: 1000)" value={valor} 
onChange={(e) => setValor(e.target.value)} style={{ marginRight: '10px' }} /> 
                <button onClick={cadastrar}>Cadastrar</button> 
            </div> 
 
            <h3>Serviços Cadastrados</h3> 
            <ul> 
                {servicos.map(serv => ( 
                    <li key={serv.id}><strong>{serv.descricao}</strong> - Valor: R$ {serv.valor}</li> 
                ))} 
            </ul> 
        </div> 
    ); 
} 
