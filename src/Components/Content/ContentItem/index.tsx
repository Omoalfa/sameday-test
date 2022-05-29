import './content.css';

import React from 'react';
import { Card, CardFooter, CardImg, CardSubtitle, CardTitle, Col, Container, Row } from 'reactstrap';

import { ItemType } from '../../../Iterfaces';

import { ReactComponent as Plus } from '../../../Assets/Plus.svg';

const Item = (props: { data: ItemType[], title: string, subtitle: string }) => (
    <Container fluid className='item'>
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
        <Row>
            {
                props.data.map((value, index) => (
                    <Col md='4' className='card-item' key={index}>
                        <Card>
                            <Row>
                                <Col md='8'>
                                    <CardTitle>{value.title} <Plus /></CardTitle>
                                    <CardSubtitle>{value.description}</CardSubtitle>
                                    <CardFooter>${value.price}</CardFooter>
                                </Col>
                                <Col md='4'>
                                    <CardImg src={value.img ? value.img : './images/plain.png'} />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    </Container>
);

export default Item;
