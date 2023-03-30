function Comments({ comentarios }) {
    return (
        < div className="row" >
            <div className="col-12">
                {
                    comentarios.map((comentario, ind) => (
                        <div>{comentario.mensagem}<br /><small><i>{comentario.data}</i></small><br />-----------------------------------------------<br /></div>
                    ))
                }
            </div>
        </div >
    );
}

export default Comments;