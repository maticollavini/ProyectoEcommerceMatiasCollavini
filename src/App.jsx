import { useState } from 'react'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

return (
    <>
        <NavBar />
        {/* home */}
        <ItemListContainer greeting='Tienda de ropa online' />
    </>
    )
}

export default App