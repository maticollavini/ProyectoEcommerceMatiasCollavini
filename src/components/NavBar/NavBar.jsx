import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
    <nav>
            <ul>
                <li>Home</li>
                <li>Remeras</li>
                <li>Pantalones</li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar