import React from 'react'; 
 
export default function Menu({ setPagina }) { 
    return ( 
        <nav style={{ padding: '10px', background: '#1e1e1e', marginBottom: '20px', borderRadius: '8px', border: '1px solid #444' }}> 
            <button onClick={() => setPagina('inicio')} style={{ marginRight: '10px' }}>Início</button> 
            <button onClick={() => setPagina('equipamentos')} style={{ marginRight: '10px' }}>Equipamentos</button> 
            <button onClick={() => setPagina('cidades')} style={{ marginRight: '10px' }}>Cidades</button> 
            <button onClick={() => setPagina('funcionarios')} style={{ marginRight: '10px' }}>Funcionários</button> 
            <button onClick={() => setPagina('servicos')}>Serviços</button> 
        </nav> 
    ); 
}
