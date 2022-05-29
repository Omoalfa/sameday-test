import './hero.css';

import React from "react";
import { Badge, Container } from "reactstrap";

const Hero: React.FC = () => {
    return (
        <Container fluid className="hero">
            <div className="hero-card">
                <h3>Kings Family Restaurant - Butler</h3>
                <p>1322 Lazy Alley, Philadelphia, CA 30203, USA <a href="#">More info</a></p>
                <p className="desc">Bakery - Breakfast & Brunch - Cafe - Coffees</p>
                <p className="time">Open Hours: 8:30 AM - 7:00 PM <Badge color="info">Open</Badge></p> 
            </div>
        </Container>
    )
}

export default Hero;
