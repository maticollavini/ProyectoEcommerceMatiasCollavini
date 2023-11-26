import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import { ItemList } from "../ItemList/ItemList"

const ItemListContainer = ({greeting = "saludando por defecto"}) => {
    const [ products, setProducts] = useState([])
    const [ loading, setLoading] = useState(true)

    useEffect(()=>{
        mFetch()
        .then(resultado => setProducts(resultado))
        .catch(error => console.log(error))
        .finally(()=> setLoading(!loading))
    }, [])

    return (
        <>
        <div className="text-center">
            <h1>{greeting}</h1>    
        </div>
        {   loading ? <h2>Cargando...</h2> 
            :
            <div className="row">
                <ItemList products={products}/>
            </div>
        }
        </>
    
    )
}

export default ItemListContainer
