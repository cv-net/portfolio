import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
    // font-family: sans-serif, 'Segoe-UI';
    background-color: #FFFFFC;
    text-align: center;
    padding: 2em;
    background-image: url('../public/ibnalrabin.png');
`;

function Header() {
    return(
        < HeaderStyle className='header'>
            <h2 className='display-2'><strong>a</strong>bdellica</h2>
            <small className='text-muted'>React.js web development, tools for learning, Python data visualization</small>
        </ HeaderStyle >
    );
}

export default Header;