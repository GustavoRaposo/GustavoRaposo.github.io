import React, { useState } from 'react'
import { Nav, NavLink, Bars, NavMenu } from './NavBarElements'

const Navbar = (props) => {

    const [open, setOpen] = useState(false);

    function updateMenuState() {
        setOpen(!open)
    }
    
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h2>&#123;GustavoRaposo&#125;</h2>
                </NavLink>
                <Bars open={open} onClick={updateMenuState}/>
                <NavMenu open={open} onClick={updateMenuState}>
                    <NavLink  to="/">
                        <span>Inicio</span>
                    </NavLink>
                    <NavLink  to="/sobre">
                        <span>Sobre</span>
                    </NavLink>
                    <NavLink to="/competencias">
                        <span>competências</span>
                    </NavLink>
                    <NavLink to="/experiencia">
                        <span>experiência</span>
                    </NavLink>
                    <NavLink  to="/projetos">
                        <span>Projetos</span>
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;