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
            <h2 className='display-2'><strong>@</strong>abdellica</h2>
            <small className='text-muted'>React.js web development, Python data visualization & journalism</small>
        </ HeaderStyle >
    );
}

export default Header;