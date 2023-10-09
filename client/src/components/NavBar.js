import React, {useContext, useEffect} from 'react';
import "../oldStyle/old_html/DevicePage.css"
import "../oldStyle/old_html/basket.css"
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'

import  logo from "../oldStyle/img/logo.svg"
import  cart from "../oldStyle/img/cart.png"
import {getBasket} from "../http/deviceAPI";
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    const {device} = useContext(Context)

    useEffect(() => {
        getBasket().then(data => device.setBaskets(data))
    }, [])

    const count = () => device.basket.length;


    return (
        <Navbar className="log">
            <Container className="main-nav-b  d-flex justify-content-around bd-highlight mb-2">
                <NavLink className="brand" to={SHOP_ROUTE}><img src={logo} alt="brand" /></NavLink>
                {user.isAuth ?
                    <Nav className="main-nav-b " >
                        {user.isAdmin ?
                            <Button
                                className="main-nav-d"
                                variant={"outline-light"}
                                onClick={() => history.push(ADMIN_ROUTE)}
                            >
                                Админ панель
                            </Button>
                            :
                            <div></div>
                        }
                        <Button
                            className="main-nav-d"
                            variant={"outline-light"}
                            onClick={() => history.push(SHOP_ROUTE)}
                        >
                            Главная
                        </Button>
                        <Button
                            className="main-nav-d"
                            variant={"outline-light"}
                            onClick={() => logOut()}
                        >
                            Выйти
                        </Button>
                        <Button className="cart" id="cart"
                                variant={"outline-light"}
                            onClick={() => history.push(BASKET_ROUTE)}
                            >
                            <img className="cart__image" src={cart} alt="Cart" />
                            <div className="cart__num" id="cart_num">{count()}</div>
                        </Button>
                    </Nav>
                    :
                    <Nav className="main-nav-b">
                        <Button
                            className="main-nav-c"
                            variant={"outline-light"}
                            onClick={() => history.push(LOGIN_ROUTE)}>
                            Авторизация
                        </Button>
                    </Nav>
                }

            </Container>
        </Navbar>

    );
});

export default NavBar;
