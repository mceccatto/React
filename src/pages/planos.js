import React from 'react';
import Title from './../components/Title/index';
import Card from './../components/Card/index';

const planos = [
    {
        "nome": "PLANO A",
        "duracao": "1 mes",
        "foto": "PlanoA.jpg",
        "valor": "35,00"
    },
    {
        "nome": "PLANO B",
        "duracao": "3 meses",
        "foto": "PlanoB.jpg",
        "valor": "50,00"
    },
    {
        "nome": "PLANO C",
        "duracao": "6 meses",
        "foto": "PlanoC.jpg",
        "valor": "75,00"
    }
]

function Planos() {
    return (
        <div className="px-4 py-1 my-1 text-center">
            <Title titulo="Nossos Planos" texto="Planos disponiveis" />
            <div className="Card">
                <div className="container">
                    <div className="row mt-5">
                        {planos.map((plano, ind) => (
                            <Card tipo="plano" foto={plano.foto} nome={plano.nome} duracao={plano.duracao} ano="" assistido="" valor={plano.valor} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Planos;
