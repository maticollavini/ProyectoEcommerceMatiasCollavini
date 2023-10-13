import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'


function App() {
const [counter, setCounter] = useState(0)

const handleCounter = () => {
    setCounter(counter+1)
}
return (
    <>
        <NavBar />
        {/* home */}
        <ItemListContainer greeting='Tienda de ropa online' />
    </>
    )
}

export default App