import React from 'react';
import { Container, Content } from './Styles';
import Typical from 'react-typical'

function Hero(props) {
    return (
        <Container>
            <Content>
                <h1>{props.title}</h1>
                <Typical
                    loop={Infinity}
                    wrapper="span"
                    steps={[
                        'Em construção', 250,
                        'Em construção.', 250,
                        'Em construção..', 250,
                        'Em construção...', 250
                    ]}
                />
            </Content>
        </Container>
    );
}

export default Hero;