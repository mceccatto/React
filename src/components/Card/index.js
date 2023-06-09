import './Card.css';

function Status({ assistido }) {
  if (assistido) {
    return "Assistido";
  } else {
    return "Nao assistido";
  }
}

function onClick(data) {
  alert(data);
}

function Card({ tipo, foto, nome, duracao, ano, assistido, valor }) {
  return (
    (() => {
      if (tipo === 'filme') {
        return (
          <div className="col-sm-4" >
            <div className="card">
              <img src={'/assets/images/' + foto} alt="img"></img>
              <div className="card-body">
                <h5 className="card-title text-center">{nome}</h5>
                <p className="card-text">
                  <b>Duracao:</b> {duracao}<br />
                  <b>Ano:</b> {ano}<br />
                  <b>Assistido:</b> <Status assistido={assistido} />
                </p>
                <div className="text-center">
                  <a className="btn btn-primary" href={`/detalhes/${nome}`}>Detalhes</a>
                </div>
              </div>
            </div>
          </div >
        )
      } else {
        return (
          <div className="col-sm-4" >
            <div className="card">
              <img src={'/assets/images/' + foto} alt="img"></img>
              <div className="card-body">
                <h5 className="card-title text-center">{nome}</h5>
                <p className="card-text">
                  <b>Duracao:</b> {duracao}<br />
                  <b>Valor:</b> {valor}<br />
                </p>
                <div className="text-center">
                  <button type="button" class="btn btn-success" onClick={() => onClick(nome)}>Comprar</button>
                </div>
              </div>
            </div>
          </div >
        )
      }
    })()
  );
}

export default Card;