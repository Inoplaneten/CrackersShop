import React from 'react';
import { Section } from '../../Body/Section/Section';
import { Container } from '../../Container/Container';
import { compose } from 'redux';

const AboutUsPage = () => {
    return (
        <Section>
            <Container>
                <h1 className='sectionTitle'>
                    About Us
                </h1>
            </Container>
        </Section>
    )
};

export default compose()(AboutUsPage);