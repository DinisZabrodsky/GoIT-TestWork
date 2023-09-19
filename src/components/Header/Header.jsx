import { Suspense } from "react"
import { NavLink, Outlet } from "react-router-dom"


function Header () {
    return <>
        <header>
            <nav className="conteiner">
                <NavLink to="/">Home</NavLink>
                <NavLink to='cars'>Cars</NavLink>
                <NavLink to='favorites'>Favorites</NavLink>
            </nav>
        </header>

        <main className="conteiner">
            <Suspense>
                <Outlet/>
            </Suspense>
        </main>
        
    </>
}

export default Header