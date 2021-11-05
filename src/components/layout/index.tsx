import React, {  ReactElement } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
    background-color: rgb(195, 146, 0);
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    `
const NavWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    grid-column: 2 / 3;
    align-items: center;
    font-size: 1.1rem;`

const StyledH1 = styled.h1`
    padding: 0 0.5em;`

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.2s ease-in-out;
    &:visited {
        color: white-space;
    }
    &:hover {
        color: #380dd4;
    }`
    

const NavBar = (  { children } : any ): ReactElement => {
    return (
        <div>
        <HeaderWrapper>
            <StyledH1>Physio-Tracker</StyledH1>
            <NavWrapper>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/profile'>Profile</StyledLink>
            </NavWrapper>
        </HeaderWrapper>
        <main>
            {children}
        </main>
        </div>
    )
}

export default NavBar
