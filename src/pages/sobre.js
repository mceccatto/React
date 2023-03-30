import React from 'react';
import Title from './../components/Title/index';
import Section from './../components/Section/index';

function Sobre() {
    return (
        <div className="px-4 py-1 my-1 text-center">
            <Title titulo="Sobre a Plataforma" texto="Conheca um pouco sobre nos" />
            <Section titulo="Lorem Ipsum" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." imagem="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png" />
        </div>
    )
}

export default Sobre;