import React, {useContext} from 'react';
import "../oldStyle/old_html/DevicePage.css"
import "../oldStyle/old_html/basket.css"
import {Context} from "../index";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


const Footer = observer(() => {
    const {user} = useContext(Context)
    const {device} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon color='secondary' icon='gem' className='me-3' />
                                Online-Store
                            </h6>
                            <p>
                                Онлайн магазин бытовой техники и электроники
                            </p>
                        </MDBCol>

                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>О компании</h6>
                            <p>
                                <a href='#!' className='text-reset' to={SHOP_ROUTE}>
                                    Главная
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset' onClick={() => history.push(BASKET_ROUTE)}>
                                    Корзина
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Политика приватности
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Категории</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Settings
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Help
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Контакты</h6>
                            <p>
                                <MDBIcon color='secondary' icon='home' className='me-2' />
                                Белгород, Попова 15
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                online-store@ya.com
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 7 910 324 55 32
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='print' className='me-3' /> + 7 980 883 49 66
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Online-Store
            </div>
        </MDBFooter>
    );
});

export default Footer;
