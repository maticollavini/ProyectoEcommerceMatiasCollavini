
const ItemListContainer = ({greeting = "saludando por defecto"}) => {
    return (
        <div className="text-center">
            {greeting}
        </div>
    )
}

export default ItemListContainer
