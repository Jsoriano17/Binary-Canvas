import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
    return (
        <Container>
            <Link to="/art">
                <button>take me to the canvas board</button>
            </Link>
        </Container>
    )
}

export default Home

const Container = styled.div`
    background: brown;
`
