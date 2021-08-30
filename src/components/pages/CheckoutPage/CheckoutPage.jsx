import React from 'react';
import { Section } from '../../Body/Section/Section';
import { Container } from '../../Container/Container';
import { compose } from 'redux';

const CheckoutPage = () => {
    return (
        <Section>
            <Container>
                <h1 className='sectionTitle'>
                    Checkout
                </h1>
            </Container>
        </Section>
    )
};

export default compose()(CheckoutPage);