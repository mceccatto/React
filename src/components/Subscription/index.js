import './Subscription.css';

function onClick(data){
    alert(data);
}

function Subscription({ foto, nome, duracao, valor }) {
    return (
        <div className="col-sm-4">
            <div className="card">
                <img src={'/assets/images/' + foto} alt="img"></img>
                <div className="card-body">
                    <h5 className="card-title text-center">{nome}</h5>
                    <p className="card-text"><b>Duracao:</b> {duracao}<br /><b>R$:</b> {valor}</p>
                    <div className="text-center">
                        <button type="button" class="btn btn-success" onClick={() => onClick(nome)}>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subscription;