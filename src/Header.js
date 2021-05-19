import React from 'react';
import styled from 'styled-components';
import twitter from './img/twitter.png';
import linkedin from './img/linkedin.png';
import github from './img/github.png';

const HeaderStyle = styled.header`
    // font-family: sans-serif, 'Segoe-UI';
    background-color: #FFFFFC;
    text-align: center;
    padding: 2em;
    background-image: url('../public/ibnalrabin.png');
    img {
        width: 2%;
        height: 2%;
    }
`;

function Header() {
    return(
        < HeaderStyle className='header'>
            <h2 className='display-2'><strong>@</strong>abdellica</h2>
            <small className='text-muted'>React.js web development, Python data visualization & journalism</small><br />
            <div>
                <a href='https://twitter.com/abdellica' target='_blank'><img src={twitter}/></a>  <a href='https://linkedin.com/in/khalilabdellah' target='_blank'><img src={linkedin}/>  </a><a href='https://github.com/cv-net' target='_blank'><img src={github}/></a>
            </div>
        </ HeaderStyle >
    );
}

export default Header;