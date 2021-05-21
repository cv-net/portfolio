import React from 'react';
import styled from 'styled-components';
import twitter from './img/twitter.png';
import linkedin from './img/linkedin.png';
import github from './img/github.png';

const HeaderStyle = styled.header`
    // font-family: sans-serif, 'Segoe-UI';
    background-color: #FFFFFC;
    text-align: center;
    padding: 1em;
    background-image: url('../public/ibnalrabin.png');
    .text-muted {
        padding-bottom: 1.5em;
    }

    @media (max-width: 391px) {
        height: 8%;
        img {
            width: 10%;
        }
    }
    @media (min-width: 392px) {
        padding: 2em;
        img {
            width: 2%;
            height: 2%;
        }
    }

`;

function Header() {
    return(
        < HeaderStyle className='header'>
            <h2 className='display-2'><strong>@</strong>abdellica</h2>
            <small className='text-muted'>React.js web development, Python data visualization & journalism</small><br />
            <div>
                <a href='https://twitter.com/abdellica' target='_blank' rel="noreferrer"><img src={twitter} alt="link to Khalil Abdellah's Twitter page"/></a>  <a href='https://linkedin.com/in/khalilabdellah' target='_blank' rel="noreferrer"><img src={linkedin} alt="link to Khalil Abdellah's LinkedIn page"/>  </a><a href='https://github.com/cv-net' target='_blank' rel="noreferrer"><img src={github} alt="link to Khalil Abdellah's GitHub page"/></a>
            </div>
        </ HeaderStyle >
    );
}

export default Header;