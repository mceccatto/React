import React from 'react';
import Title from './../components/Title/index';
import Card from './../components/Card/index';

const filmes = [
    {
        "nome": "FÚRIA INCONTROLÁVEL",
        "duracao": "01:30H",
        "foto": "001.jpg",
        "ano": 2020,
        "assistido": true
    },
    {
        "nome": "VÍCIO PERFEITO",
        "duracao": "01:37H",
        "foto": "002.jpg",
        "ano": 2023,
        "assistido": true
    },
    {
        "nome": "DOM",
        "duracao": "3H",
        "foto": "003.jpg",
        "ano": 2023,
        "assistido": false
    }
]

function Home() {
    return (
        <div className="Card">
            <Title titulo="Catalogo de Filmes" texto="Filmes disponiveis" />
            <div className="container">
                <div className="row mt-5">
                    {filmes.map((filme, ind) => (
                        <Card tipo="filme" foto={filme.foto} nome={filme.nome} duracao={filme.duracao} ano={filme.ano} assistido={filme.assistido} valor="" />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Home;
