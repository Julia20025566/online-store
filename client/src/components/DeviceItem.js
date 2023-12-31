import React, {useEffect, useState} from 'react';
import "../oldStyle/old_html/DevicePage.css"
import "../oldStyle/old_html/basket.css"
import {Card, Col} from "react-bootstrap";
import {useHistory, useParams} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";
import {addToBasket, fetchOneDevice} from "../http/deviceAPI";

const DeviceItem = ({device}) => {
    const add = () => {
        const formData = new FormData()
        formData.append('deviceId', device.id)
        addToBasket(formData).then(response => alert(`Товар ` + device.name + ` был добавлен в вашу корзину!`))
    }
    const history = useHistory()
    return (
        <Col md={4} className={"mt-3"} >
            <div className="cards">
                <div className="card">
                    <div className="card__top">
                        <a href="#" className="card__image">
                            <img
                                src={process.env.REACT_APP_API_URL + device.img}
                                alt={device.name}
                            />
                        </a>

                    </div>
                    <div className="card__bottom">
                        <div className="card__prices">

                            <div className="card__price card__price--common">{device.price}</div>
                        </div>
                        <a href="#" className="card__title" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
                            {device.name}
                        </a>
                        <button className="card__add" onClick={add}>В корзину</button>
                    </div>
                </div>
            </div>

        </Col>

    );

};

export default DeviceItem;
