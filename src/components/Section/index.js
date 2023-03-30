function Section({ titulo, texto, imagem }) {
    return (
        <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src={imagem} alt="img" width="500"></img>
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">{titulo}</h1>
                    <p class="lead">{texto}</p>
                </div>
            </div>
        </div>
    );
}

export default Section;