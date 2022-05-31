import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgb(36, 36, 36);
    box-shadow: 0px -1px 10vh rgba(0, 0, 0, 0.7);
    padding: 5vw;

    a{
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    span{
        color: rgba(255, 255, 255);
        opacity: 0.7;
    }

    a:hover{
        border-bottom: 1px solid #dbdbdb;
        span{
            opacity: 1; 
        }
    }

    @media (max-width: 768px){
        height: 75vh;
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 425px){
        span{
            font-size: 12px;
        }
    }
`;