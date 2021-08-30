import React from 'react';
import { Section } from '../../Body/Section/Section';
import { Container } from '../../Container/Container';
import { compose } from 'redux';

const ContactsPage = () => {
    return (
        <Section>
            <Container>
                <h1 className='sectionTitle'>
                    Contacts
                </h1>
            </Container>
        </Section>
    )
};

export default compose()(ContactsPage);