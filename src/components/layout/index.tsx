import React, {  ReactElement } from 'react'
import { Link } from 'react-router-dom'

const NavBar = (  { children } : any ): ReactElement => {
    return (
        <div>
        <header>
                <Link to='/'>Home</Link>
                <Link to='/profile'>Profile</Link>
        </header>
        <main>
            {children}
        </main>
        </div>
    )
}

export default NavBar
