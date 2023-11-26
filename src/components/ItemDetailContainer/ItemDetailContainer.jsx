import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({})
    useParams()
    useEffect(()=>{
        mFetch(1)
        .then(resultado => setProduct(resultado))
        .catch(error => console.log(error))
    }, [])
    return (
        <div className="row">
            <div className="col-6 mt-5">
                <img src={product.imgUrl} alt="" className="img-fluid" />
            </div>
            <div className="col-6 text-center mt-5">

                    <p>Nombre: {product.name}</p>
                    <p>Categoria: {product.category}</p>
                    <p>Precio: {product.price}</p>

            </div>
        </div>
    )
}