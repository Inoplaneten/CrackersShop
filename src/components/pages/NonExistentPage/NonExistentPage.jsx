import React from 'react';
import { Section } from '../../Body/Section/Section';
import { Container } from '../../Container/Container';
import { compose } from 'redux';

const NonExistentPage = () => {
    return (
        <Section>
            <Container>
                <h2>
                    Not found page
                </h2>
            </Container>
        </Section>
    )
};

export default compose()(NonExistentPage);