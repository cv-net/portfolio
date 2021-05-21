import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import keys from './keys';
import ReactMarkdown from 'react-markdown';
import Card from './Card';
// import plasticbagpropsMarkdown from './plastic_bag_props.md'
import PlasticBagProps from './PlasticBagProps'

const FlexContainer = styled.div`
    display: flex;  
    justify-content: center;
    align-items: stretch;
    align-content: stretch;
    width: 100%;
    
    @media (max-width: 415px) {
        flex-flow: column nowrap;
        .panel {
            width: 100%;
            height: 33%;
        }
        .professional {
            order: -2;
        }
        .main-content {
            order: 1;
        }
        .toolbar {
            order: -1;
        }
        select {
            float: right;
            margin: auto 1em auto;
            padding: .5em;
        }
    }

    @media (min-width: 416px) {
        margin: 0;
        flex-flow: column no-wrap;
}
    

`;

const MCStyle = styled.div`
    padding: 2em;
    font-size: 1em;
`;

const markdown = `# Occupat anhelitus lege infelix parvam

## Et est omnis et ignarus e ad

Lorem markdownum *undis confusura hominis*. Mihi cum, Bacchum novum plus iecur
pompa num agros decrescunt inter me cavis. Det loci vix adspexit, supponat,
desideret si est et vobis. Que esse Amphion pavidae parabat, *est* iubet te
vituli.

> Senioribus pedibus. Contra tenuere; dicentem et curre Deucalioneas, Lichae
> quae abest.

Pennis Argolis Orchomenon urbem [Phoebes](http://ethospitio.io/rectorque.html),
velocis aquas saepes pennis. Sibi in diu oculi innumeris tenet vixque Capitolia
canenti medias nostro. Teneras spargit plaudenda in ingens habenas. *Venefica*
expersque Proca crinem, naides fronti memor nymphae, tantique cuspide velle
quinque inmurmurat est. Meosque venerantur Liber remollescit quoque torum
Parnasi ingemuit vincat decipienda [virtus
turpius](http://a-tum.com/quaequenostra)?

## Oppressumque mulcebat arvis anguigenae unde

Cur flebile, in nexis satos duo navita, est poenas est *modo* ubi? Viva et
memores squalentia voluptas init: fraxineam *hunc* pendere; qui ille nec, e
Iove, virginitate. Pater per saepe.

1. In qua est me Zephyro modo nihil
2. Placui quamquam carinas abiere praeceps
3. Proceres dixit

Has inque possint **mersurum quidem** nulloque movet pulcherrima belli praesens
caede. Ille quae; et et iussos admovet fata murice fata, et! Possent ille quae
Parnasia. Sonantem Athamanta glandiferam et auctor Nemeaeo gracili equinis,
media proculcat preme.

Manus et namque utque, senecta haec Ixion bubo **coactus**. In mores, fallaci
ita ultra decor efficient. Illa sensit dicebar pectore dicere vestibus Actaeona
**operire concipit metit** date hostem.`


function SiteColumns() {
    return(
        <Router>
        < FlexContainer >
            < Professional className='border border-5' />
            < Route exact path='/portfolio' component={PlasticBagProps} className='border border-5' />
            < Route exact path='/lorem' component={MainContent} className='border border-5' />
            < Route exact path='plasticbagprops' component={PlasticBagProps} className='border border-5' />
            < Toolbar className='border border-5' />
        </ FlexContainer >
        </ Router >
    );
}

export default SiteColumns;

function Professional(props) {
    const [ temperature, setTemp ] = useState();
    const [ iconUrl, setUrl ] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&units=imperial&appid=${keys.openweatherdata}`);
                setUrl(`https://openweathermap.org/img/w/${res.data.weather[0].icon}.png`);
                setTemp(parseInt(res.data.main.temp))
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])

    return(
        <nav className='panel flex-column border border-5 border-success p-4 professional'>
            <h5>Khalil Abdellah</h5><br></br>
            <i>Philadelphia, PA</i><br></br>
            <img src={iconUrl} alt='icon depicting current weather forecast'></img><h5>{temperature}&#176;</h5> <br></br>
            <h6><strong>Site under construction...</strong></h6>
            <ul>
                <li className='mute'>home</li>
                <li className='mute'>freq.ly used code</li>
                <li className='mute'>engineering portfolio</li>
                <li className='mute'>data journalism</li>
            </ul>
            {/* <Link className='nav-link active' to='/'>Home</Link>
            <Link className='nav-link active' to='/lorem'>freq.ly used code</Link>
            <Link className='nav-link active' to='#'>engineering portfolio</Link>
            <Link className='nav-link active' to='/plasticbagprops'>data journalism</Link> */}
        </nav>
    );
}

function MainContent() {
    return(
        <MCStyle  className='panel main-content flex-column border border-1 p-4'>
            <PlasticBagProps />
        </MCStyle>
    );
}

function Toolbar() {
    return(
        <>
            <nav className='panel toolbar flex-column border border-5 border-success p-4'>
                <h3 className='mute'>Pomodoro Timer</h3>
                <Card />
            </nav>
        </>
    );
}