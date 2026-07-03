import React from 'react'; 
 
export default function Menu({ setPagina }) { 
    return ( 
        <nav style={{ 
            padding: '15px 20px', 
            background: '#0f172a', 
            marginBottom: '20px', 
            borderRadius: '8px', 
            border: '1px solid #334155',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}> 
            <div 
                onClick={() => setPagina('inicio')} 
                style={{ 
                    cursor: 'pointer', 
                    fontSize: '1.2rem', 
                    fontWeight: 'bold', 
                    color: '#38bdf8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}
            >
                💎 Mineradora
            </div>
            
            <div style={{ display: 'flex', gap: '5px' }}>
                <button onClick={() => setPagina('equipamentos')}>Equipamentos</button> 
                <button onClick={() => setPagina('cidades')}>Cidades</button> 
                <button onClick={() => setPagina('funcionarios')}>Funcionários</button> 
                <button onClick={() => setPagina('servicos')}>Serviços</button> 
            </div>
        </nav> 
    ); 
}
