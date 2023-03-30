import React from 'react';
import Title from './../components/Title/index';
import Section from './../components/Section/index';

function Sobre() {
    return (
        <div className="px-4 py-1 my-1 text-center">
            <Title titulo="Sobre" texto="NOSSA HISTÓRIA" />
            <Section titulo="Responsive left-aligned hero with image" texto="Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins." imagem="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png" />
        </div>
    )
}

export default Sobre;