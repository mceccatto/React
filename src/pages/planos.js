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
        <div className="Card">
            <Title titulo="Planos" texto="NOSSOS PLANOS" />
            <div className="container">
                <div className="row mt-5">
                    {planos.map((plano, ind) => (
                        <Card tipo="plano" foto={plano.foto} nome={plano.nome} duracao={plano.duracao} ano="" assistido="" valor={plano.valor} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Planos;
