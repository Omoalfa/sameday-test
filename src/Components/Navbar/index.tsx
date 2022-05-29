import './navbar.css'

import React from "react";
import { Container } from "reactstrap";

import { ReactComponent as Logo } from '../../Assets/Vector.svg'
import { ReactComponent as Clock } from '../../Assets/Clock.svg'
import { ReactComponent as Edit } from '../../Assets/icon.svg'
import { ReactComponent as Cart } from '../../Assets/Cart.svg'


const NavBar: React.FC = () => {
    return (
        <Container fluid className="nav-bar">
            <div className="logo">
                <Logo /> Wok & Wakis
            </div>
            <div className='right-nav'>
                <div className="toggler">
                    <button className="toggle de">Delivery</button>
                    <button className="toggle pu">Pickup</button>
                </div>
                <div className="time">
                    <Clock /> <p>ASAP - Ready in 25 - 40 mins</p> <Edit />
                </div>
                <button className="cart-btn"> <Cart /> 3 </button>
            </div>
        </Container>
    )
}

export default NavBar;
