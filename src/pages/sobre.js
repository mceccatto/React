import React from 'react';
import Title from './../components/Title/index';

function Sobre() {
    return (
        <div className="px-4 py-1 my-1 text-center">
            <Title titulo="Sobre a Plataforma" texto="Conheca um pouco sobre nos" />
            <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src={'https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png'} alt="img" width="500"></img>
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
                        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Sobre;