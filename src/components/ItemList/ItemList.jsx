import { Link } from "react-router-dom"

export const ItemList = ({products}) => {
    return (

        <>
            {
    products.map(product => 
                                        <div className="card w-25">
                                        <img className="card-img-top" src={product.imgUrl}/>
                                        <div className="card-body">
                                            <p>Nombre : {product.name}</p>
                                            <p>Categoria : {product.category}</p>
                                            <p>Precio : {product.price}</p>
                                        </div>
                                        <div className="card-footer">
                                            <Link to={`/detail/${product.id}`}>
                                            <button className="btn btn-outline-dark w-100">detalle</button>
                                            </Link>
                                        </div>
                                        </div>
                                    
        )
    }
    </>
)}
