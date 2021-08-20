import React from 'react';
import { Section } from '../../Body/Section/Section';
import { Container } from '../../Container/Container';
import FormAddProductContainer from '../../Body/Form/FormAddProductContainer';
import { compose } from 'redux';

const HomePage = () => {
    return (
        <Section className='sectionOrder'>
            <Container>
                <h2 className="section-title">
                    Cracker constructor
                </h2>
                <FormAddProductContainer/>
            </Container>
        </Section>
    )
};

export default compose()(HomePage);