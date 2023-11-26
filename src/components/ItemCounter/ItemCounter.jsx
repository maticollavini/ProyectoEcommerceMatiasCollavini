import { useCounter } from "../Hooks/useCounter"


export const ItemCounter = ({initial=1, stock=5, onAdd}) => {
    const {count, handleSuma, handleResta} = useCounter(initial, stock)

    const handleOnAdd = () => {
        onAdd(count)
    }



    return (
    <>
        <div>
            <p>{count}</p>
        </div>
        <div>
            <button onClick={handleSuma}>+</button>
            <button onClick={handleResta}>-</button>
            <button onClick={handleOnAdd}>Agregar al carrito</button>
        </div>
    </>
    )
}