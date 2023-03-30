import './Detail.css';
import Comments from '../Comments';

function onClick() {
    window.history.back();
}

function Detail({ foto, descricao, genero, nota, comentarios }) {
    return (
        <div className="container">
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
            <div className="row">
                <div className="col-12">
                    <div class="form-floating mb-2">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Comments</label>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button">Enviar</button>
                    </div>
                </div>
            </div>
            <hr />
            <Comments comentarios={comentarios} />
        </div >
    );
}

export default Detail;