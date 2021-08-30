import React from 'react';
import { Section } from '../../Body/Section/Section';
import { Container } from '../../Container/Container';
import FormAddProductContainer from '../../Body/Form/FormAddProductContainer';
import { compose } from 'redux';

const HomePage = () => {
    return (
        <Section className='sectionOrder'>
            <Container>
                <h1 className="sectionTitle">
                    Cracker constructor
                </h1>
                <FormAddProductContainer/>
            </Container>
        </Section>
    )
};

export default compose()(HomePage);