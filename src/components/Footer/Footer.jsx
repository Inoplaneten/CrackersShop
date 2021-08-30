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
            name: 'gPlus',
            href: 'https://plus.google.com'
        }
    ];

    return (
        <footer className='footer'>
            <Container>
                <div className='footerContacts dFlex jContentBetween'>
                    <div className='footerContacts__item footerContacts__item_phone'>
                        <p className='footerContacts__title'>
                            <img src={iconPhone} alt='Phone' className='footerContacts__itemIcon'/>
                            <span>Phone</span>
                        </p>
                        <a href='tel:+439873456782' className='footerContacts__phoneLink'>
                            +43 (987) 345-6782
                        </a>
                    </div>
                    <div className='footerContacts__item footerContacts__item_address'>
                        <p className='footerContacts__title'>
                            <img src={iconMap} alt='Address' className='footerContacts__itemIcon'/>
                            <span>Address</span>
                        </p>
                        <address className='footerContacts__address'>
                            Cracker Inc.<br/> 
                            10 Cloverfield Lane
                            Berlin, IL 10928
                            Germany
                        </address>
                    </div>
                    <div className='footerContacts__item footerContacts__item_social'>
                        <p className='footerContacts__title'>
                            <img src={iconSocial} alt='Share us' className='footerContacts__itemIcon'/>
                            <span>Share us</span>
                        </p>
                        <ul className='footerContacts__socialList dFlex fWrap'>
                            {socialNetworks.map(({name, href}, index) => (
                                <li className='footerContacts__socialItem' key={index}>
                                    <a 
                                        href={href}
                                        className={`footerContacts__socialLink footerContacts__socialLink_${name}`}
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