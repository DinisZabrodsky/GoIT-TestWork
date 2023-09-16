import { Suspense } from "react"
import { NavLink, Outlet } from "react-router-dom"


function Header () {
    return <>
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to='cars'>Cars</NavLink>
            </nav>
        </header>

        <Suspense>
            <Outlet/>
        </Suspense>
    </>
}

export default Header