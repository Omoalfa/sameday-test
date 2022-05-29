import './nav.css'

import React from 'react';

import { ReactComponent as Hambuger } from '../../../Assets/hamburger.svg'

const ContentNav: React.FC = () => (
    <div className='content-nav'>
        <Hambuger />
        <ul>
            <li className='active'>Popular Items</li>
            <li>Wings & Tenders</li>
            <li>Popcorn Chicken</li>
            <li>Mix & Match Combos</li>
            <li>Fish & Shrimps</li>
            <li>Sandwiches</li>
            <li>Drinks</li>
            <li>Party Trays</li>
            <li>Kid's Menu</li>
            <li>Sides</li>
        </ul>
    </div>
);

export default ContentNav;
