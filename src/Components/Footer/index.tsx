import './footer.css';

import React from 'react';
import { Container } from 'reactstrap';

import { ReactComponent as Substract } from '../../Assets/Subtract.svg';

const Footer: React.FC = () => (
    <Container fluid className='footer'>
        <div><p>&copy; 2020 Delo <a href='#'>Terms of Service</a> <a href='#'>Privacy</a></p></div>
        <div className='text-center'><p>Powered by <Substract /> <strong>delo</strong></p></div>
        <div></div>
    </Container>
);

export default Footer;
