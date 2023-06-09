import React from 'react';
import Title from './../components/Title/index'
import Detail from './../components/Detail/index';
import { useParams } from 'react-router-dom';

const filmes = [
    {
        "nome": "FÚRIA INCONTROLÁVEL",
        "foto": "001.jpg",
        "genero": "Suspence - Ação",
        "descricao": "Depois de uma briga de trânsito, um homem que não está em seus melhores dias vai muito além e passa a perseguir uma mulher e seu filho numa jornada de vingança, violência e suspense.",
        "nota": 10,
        "comentarios": [
            {
                "mensagem": "Esse filme é bom d+.",
                "data": "30/03/2023 às 20:04"
            },
            {
                "mensagem": "Adorei o filme.",
                "data": "29/03/2023 às 20:04"
            },
            {
                "mensagem": "Expetacular!!!",
                "data": "28/03/2023 às 20:04"
            }
        ]
    },
    {
        "nome": "VÍCIO PERFEITO",
        "foto": "002.jpg",
        "genero": "Esportes - Drama - Romance - Ação",
        "descricao": "A treinadora de sucesso de MMA Sienna Lane (Kiana Madeira) descobre que seu namorado Jax (Matthew Noszka), o atual campeão de luta de MMA clandestino, a está traindo com sua própria irmã. Sienna decide se vingar treinando o único homem capaz de vencê-lo: seu arqui-inimigo Kayden (Ross Butler).",
        "nota": 6,
        "comentarios": [
            {
                "mensagem": "Esse filme é bom d+.",
                "data": "27/03/2023 às 20:04"
            },
            {
                "mensagem": "Adorei o filme.",
                "data": "26/03/2023 às 20:04"
            },
            {
                "mensagem": "Expetacular!!!",
                "data": "25/03/2023 às 20:04"
            }
        ]
    },
    {
        "nome": "DOM",
        "foto": "003.jpg",
        "genero": "Drama",
        "descricao": "Inspirado em uma história real. Estampando manchetes de jornais, Dom se torna o criminoso mais procurado do Rio. A polícia fecha o cerco e ele precisa planejar uma fuga. Victor entra em guerra com o lado podre da polícia e para se proteger se infiltra na floresta amazônica. O crime está por todos os lados. Viver pode ser fatal",
        "nota": 8,
        "comentarios": [
            {
                "mensagem": "Esse filme é bom d+.",
                "data": "24/03/2023 às 20:04"
            },
            {
                "mensagem": "Adorei o filme.",
                "data": "23/03/2023 às 20:04"
            },
            {
                "mensagem": "Expetacular!!!",
                "data": "22/03/2023 às 20:04"
            }
        ]
    }
]

function Detalhes() {
    const { filme } = useParams();

    return (
        <div className='container'>
            <Title titulo={filme} texto="INFORMAÇÕES DETALHADAS" />
            <main>
                <div className="container px-4 py-5">
                    {
                        (() => {
                            if (filme === 'FÚRIA INCONTROLÁVEL') {
                                return (
                                    <Detail foto={filmes[0].foto} descricao={filmes[0].descricao} genero={filmes[0].genero} nota={filmes[0].nota} comentarios={filmes[0].comentarios} />
                                )
                            } else if (filme === 'VÍCIO PERFEITO') {
                                return (
                                    <Detail foto={filmes[1].foto} descricao={filmes[1].descricao} genero={filmes[1].genero} nota={filmes[1].nota} comentarios={filmes[1].comentarios} />
                                )
                            } else {
                                return (
                                    <Detail foto={filmes[2].foto} descricao={filmes[2].descricao} genero={filmes[2].genero} nota={filmes[2].nota} comentarios={filmes[2].comentarios} />
                                )
                            }
                        })()
                    }
                </div>
            </main>
        </div >
    )
}

export default Detalhes;