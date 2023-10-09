import React from 'react';
import "../oldStyle/old_html/DevicePage.css"
import "../oldStyle/old_html/basket.css"
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useHistory} from "react-router-dom"
import {BASKET_ROUTE} from "../utils/consts";

const Cart = ({cart}) => {
    const history = useHistory()
    return (
    <div className="popup">
        <div className="popup__container" id="popup_container">
            <div className="popup__item">
                <h1 className="popup__title">Оформление заказа</h1>
            </div>
            <div className="popup__item" id="popup_product_list">
                <div className="popup__product">
                    <div className="popup__product-wrap">
                        <img
                            src="/img/iphone.jpg"
                            alt="Apple IPhone 14 Pro Max 256Gb"
                            className="popup__product-image"
                        />
                        <h2 className="popup__product-title">
                            Смартфон Apple IPhone 14 Pro Max 256Gb, золотой
                        </h2>
                    </div>
                    <div className="popup__product-wrap">
                        <div className="popup__product-price">135000</div>
                        <button className="popup__product-delete">&#10006;</button>
                    </div>
                </div>
            </div>
            <div className="popup__item">
                <div className="popup__cost">
                    <h2 className="popup__cost-title">Итого</h2>
                    <output className="popup__cost-value" id="popup_cost">0</output>
                </div>


            </div>
            <button className="popup__close" id="popup_close">&#10006;</button>
        </div>
    </div>
);
};