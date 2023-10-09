import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '..';
import {addToBasket, delFromBasket, getBasket} from '../http/deviceAPI';

import {Button, Card, CardGroup, Col, Container, Row} from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import {useParams} from "react-router-dom";

const Basket = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        getBasket().then(data => device.setBaskets(data))
    }, [])

    let prices = 0;
    {device.basket.map(price =>
        prices += Number(price.device.price)
    )}
    const del = (device) => {
        const formData = new FormData()
        formData.append('deviceId', device.id)
        console.log(device.id)
        console.log(device.name)
        delFromBasket(formData).then(response => alert(`Товар ` + device.name + ` был удален из корзины!`))
    }

    return (
        <Container
            className="d-flex flex-sm-column justify-content-center align-items-center mt-3"
        >
            <h1 className="pb-2">Корзина</h1>
        <CardGroup className="d-flex flex-wrap mt-3" md={9}>
            {device.basket.map(product =>
                <Col md={4} className={"mt-3"} >
                <Card style={{ width: '18rem' }} >
                    <Card.Img style={{ height: '15rem' }} variant="top"  src={process.env.REACT_APP_API_URL + product.device.img} alt={process.env.REACT_APP_API_URL + product.device.img}/>
                    <Card.Body>
                        <Card.Title>{product.device.name}</Card.Title>
                        <Card.Text>
                            <h2 className="font-weight-light">{product.device.price} рублей</h2>
                        </Card.Text>
                        <Button variant="primary" style={{ backgroundImage: 'linear-gradient(315deg,#0cbaba 0,#380036 74%)' }} onClick={()=>del(product.device)}>Удалить из корзины</Button>
                    </Card.Body>
                </Card>
                    </Col>

            )}
        </CardGroup>
            <div className="d-flex flex-row  p-2 justify-content-between align-items-center mb-2">
                <h1 className="pr-10 p-2">Итого:</h1>
                <h1 className="pl-2 pr-10">{prices}<span className="pl-10">рублей</span></h1>
            </div>
            <Button size="lg" variant="primary" style={{ backgroundImage: 'linear-gradient(315deg,#0cbaba 0,#380036 74%)' }}>Оформить заказ</Button>
        </Container>

    )

});

export default Basket;