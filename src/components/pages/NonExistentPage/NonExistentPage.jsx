import React from 'react';
import { Section } from '../../Body/Section/Section';
import { Container } from '../../Container/Container';
import { compose } from 'redux';

const NonExistentPage = () => {
    return (
        <Section>
            <Container>
                <h1 className='sectionTitle'>
                    Not found page
                </h1>
            </Container>
        </Section>
    )
};

export default compose()(NonExistentPage);