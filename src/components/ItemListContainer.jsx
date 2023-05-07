const ItemListContainer = (props) => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-8 text-center">
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2">{props.titulo}</h6>
                        <p className="card-text text-muted">{props.contenido}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer