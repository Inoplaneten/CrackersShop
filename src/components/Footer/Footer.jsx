import React from 'react';
import { Container } from '../Container/Container';
import iconPhone from '../../img/icons/icon-phone.svg';
import iconMap from '../../img/icons/icon-map.svg';
import iconSocial from '../../img/icons/icon-share.svg';

const Footer = () => {
    const socialNetworks = [
        {
            name: 'pint',
            href: 'https://www.pinterest.com'
        },
        {
            name: 'fb',
            href: 'https://www.facebook.com'
        },
        {
            name: 'gplus',
            href: 'https://plus.google.com'
        }
    ];

    return (
        <footer className='footer'>
            <Container>
                <div className='footer-contacts d-flex j-content-between'>
                    <div className='footer-contacts__item footer-contacts__item_phone'>
                        <h3 className='footer-contacts__title'>
                            <img src={iconPhone} alt='Phone' className='footer-contacts__item-icon'/>
                            <span>Phone</span>
                        </h3>
                        <a href='tel:+439873456782' className='footer-contacts__phone-link'>
                            +43 (987) 345-6782
                        </a>
                    </div>
                    <div className='footer-contacts__item footer-contacts__item_address'>
                        <h3 className='footer-contacts__title'>
                            <img src={iconMap} alt='Address' className='footer-contacts__item-icon'/>
                            <span>Address</span>
                        </h3>
                        <address className='footer-contacts__address'>
                            Cracker Inc.<br/> 
                            10 Cloverfield Lane
                            Berlin, IL 10928
                            Germany
                        </address>
                    </div>
                    <div className='footer-contacts__item footer-contacts__item_social'>
                        <h3 className='footer-contacts__title'>
                            <img src={iconSocial} alt='Share us' className='footer-contacts__item-icon'/>
                            <span>Share us</span>
                        </h3>
                        <ul className='footer-contacts__social-list d-flex f-wrap'>
                            {socialNetworks.map(({name, href}, index) => (
                                <li className='footer-contacts__social-item' key={index}>
                                    <a 
                                        href={href}
                                        className={`footer-contacts__social-link footer-contacts__social-link_${name}`}
                                        target='_blank'
                                        rel='nofollow noopener noreferrer'
                                    >
                                        <span>{name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    )
};

export { Footer };