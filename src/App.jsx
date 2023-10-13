
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

return (
    <>
        <NavBar />
        <ItemListContainer greeting='Tienda de ropa online' />
    </>
    )
}

export default App