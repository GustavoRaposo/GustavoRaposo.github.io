import styled from 'styled-components'
import heroImage from '../../assets/hero.jpg'

export const Container = styled.div`
    width: 100%;
    height: 92vh;
    overflow: hidden;
    background: linear-gradient(rgba(0,0,0, 0.9), rgba(0,0,00, 0.9)), url(${heroImage}) no-repeat center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 10vh rgba(0, 0, 0, 0.7);
`;

export const Content = styled.div`
    h1{
        border: 5px solid rgba(240, 100, 60);
        padding: 3px;
        color: rgba(240, 100, 60);
        font-size: 2rem;
    }

    span{
        font-family: monospace;
        color: rgba(240, 100, 60);
    }
`;