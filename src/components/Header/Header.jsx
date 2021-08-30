import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '../Container/Container';
import { ButtonDelete } from '../ButtonDelete/ButtonDelete';
import { ButtonClose } from '../ButtonClose/ButtonClose';
import iconBasket from '../../img/icons/icon-basket.png';
import iconSoybean from '../../img/icons/icon-soybean.svg';
import iconSesame from '../../img/icons/icon-sesame.svg';
import iconWheat from '../../img/icons/icon-wheat.svg';
import iconCorn from '../../img/icons/icon-corn.svg';
import PropTypes from 'prop-types';

const Header = ({ orders, totalOrders, totalWeightOrders, getTheRemovalOfOrder }) => {
    const menu = [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About Us',
            href: '/about-us'
        },
        {
            text: 'Contacts',
            href: '/contacts'
        },
        {
            text: 'Checkout',
            href: '/checkout'
        }
    ];

    const [isShownOrderDetails, setShownOrderDetails] = useState(false);
    const [isActiveMenu, setActiveMenu] = useState(false);

    return (
        <header className='header'>
            <div className="topHeader">
                <Container>
                    <div className='navigationTop dFlex alignItemsCenter jContentBetween'>
                        <NavLink
                            to='/'
                            exact
                            className='logo'
                        >
                            Cracker
                        </NavLink>
                        <div className='orderDetails dFlex jContentEnd'>
                            <NavLink
                                    to='/checkout'
                                    exact
                                    className='basket'
                                >
                                <img src={iconBasket} alt="Basket" />
                                <span className='basket__amount'>{totalOrders}</span>
                            </NavLink>
                            <div className='totalWeightOrders'>
                                Total: <span className="totalWeightOrders__number">{totalWeightOrders} kg</span>
                            </div>
                            <button 
                                type='button' 
                                className='btnDetailsOrders'
                                onMouseEnter={() => setShownOrderDetails(true)}
                            >
                                Details
                                <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                                    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 
                                    0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 
                                    0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                </svg>
                            </button>
                            <div className={`cartMini ${isShownOrderDetails ? 'show' : 'hidden'}`}>
                                <div className="cartMiniWrapper">
                                    <ButtonClose
                                        onClick={() => setShownOrderDetails(false)}
                                    />
                                    <table className='minitableOrders'>
                                        <thead>
                                            <tr className='minitableOrders__row minitableOrders__row_head'>
                                                <th>
                                                    <img src={iconSoybean} alt="Soybean"/>
                                                </th>
                                                <th>
                                                    <img src={iconSesame} alt="Sesame"/>
                                                </th>
                                                <th>
                                                    <img src={iconWheat} alt="Wheat"/>
                                                </th>
                                                <th>
                                                    <img src={iconCorn} alt="Corn"/>
                                                </th>
                                                <th>
                                                    Kg
                                                </th>
                                                <th>
                                                    Name Package 
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map(item => {
                                                return (
                                                    <tr key={item.id} className='minitableOrders__row'>
                                                        <td>
                                                            {item.soybean}%
                                                        </td>
                                                        <td>
                                                            {item.sesame}%
                                                        </td>
                                                        <td>
                                                            {item.wheat}%
                                                        </td>
                                                        <td>
                                                            {item.corn}%
                                                        </td>
                                                        <td>
                                                            {item.weight} kg
                                                        </td>
                                                        <td>
                                                            {item.package}
                                                        </td>
                                                        <td>
                                                            <ButtonDelete
                                                                onClick={() => getTheRemovalOfOrder(item.id)}
                                                            />
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                    <div className="cartMiniResult dFlex jContentEnd align-items-center">
                                        <div className="cartMiniResult__total">
                                            Total: <span className="cartMiniResult__totalNumber">{totalWeightOrders} kg</span>
                                        </div>
                                        <NavLink
                                            to='/checkout'
                                            exact
                                            className='cartMiniResult__btn btn btnSmall'
                                        >
                                            Checkout
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="bottomHeader">
                <Container>
                    <div className='navigationBottom dFlex jContentEnd alignItemsCenter'>
                        <nav className={`menu ${isActiveMenu ? 'isActive' : ''}`}>
                            <ul className='menu__list dFlex'>
                                {
                                    menu.map(({text, href}, index) => {
                                        return (
                                            <li 
                                                key={index}
                                                className='menu__item'
                                            >
                                                <NavLink
                                                    to={href}
                                                    exact
                                                    className='menu__link'
                                                >
                                                    {text}
                                                </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                        <button 
                            className={`btnMenu ${isActiveMenu ? 'isActive' : ''}`}
                            onClick={() => setActiveMenu(!isActiveMenu)}
                        >
                            <span></span>
                        </button>
                    </div>
            </Container>
            </div>
        </header>
    )
};

Header.propTypes = {
    orders: PropTypes.array,
    totalOrders: PropTypes.number,
    totalWeightOrders: PropTypes.number,
    getTheRemovalOfOrder: PropTypes.func
};

export { Header };