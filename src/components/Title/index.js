import './Title.css';

function Title({titulo, texto}) {
  return (
    <div className="Title">
      <div className="px-4 py-1 my-1 text-center">
          <h1 className="display-5 fw-bold">{titulo}</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">{texto}</p>
          </div>
      </div>
    </div>
  );
}

export default Title;