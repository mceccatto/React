import './Detail.css';

function onClick(){
    window.history.back();
}

function Detail({ foto, descricao, genero, nota }) {
    return (
        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
            <div className="col d-flex flex-column align-items-center gap-2">
                <img src={'/assets/images/' + foto} alt="img" height="400"></img>
            </div>
            <div className="col">
                <div className="row row-cols-1 row-cols-sm-1 g-4">
                    <div className="col d-flex flex-column gap-2">
                        <p><b>DESCRIÇÃO:</b> {descricao}</p>
                        <p><b>GÊNERO:</b> {genero}</p>
                        <p><b>AVALIAÇÃO:</b> {nota}</p>
                        <button type="button" class="btn btn-success" onClick={() => onClick()}>Voltar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;