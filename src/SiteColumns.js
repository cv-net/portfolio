import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import keys from './keys';
import ReactMarkdown from 'react-markdown'
import Card from './Card';
// import plasticbagpropsMarkdown from './plastic_bag_props.md'
import PlasticBagProps from './PlasticBagProps'

const FlexContainer = styled.div`
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: stretch;
    align-content: stretch;
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

const markdownPlastic = `### Plastic Bag Props and Political Trickery\n
        \n*Khalil Abdellah*
        
        \n[cv-net/plastic-bag-props](https://github.com/cv-net/plastic-bag-props)
        \nThis project is the product of an introductory course to data journalism, [First Python Notebook](https://www.firstpythonnotebook.org/about/index.html). First Python Notebook used data from the [California Civic Data Coalition (CCDC)](https://www.californiacivicdata.org/), which cleans and organizes publicly available political campaign finance data from the state of California (CAL-ACCESS). The course focused on data from California's 2016 Ballot Propositions, interviewing the data and visualizing it with Python Jupyter Notebook, emphasizing the journalistic knowledge and sense needed to interpret the data responsibly. 
        
        \nFor example, the data provided by [CAL-ACCESS](http://cal-access.ss.ca.gov/) only reports campaign contributions greater than $100. The course only provided half of the complete contribution data, as the other half were early contributions from 2013-14, likely not necessary for the aims of the introductory course. 
        
        \nEven with missing data, the visualization for Proposition 67's contributions (Figure 1) may perhaps be considered representative of the many, small donations made to the proposition. I was able to acquire and clean the missing data from Proposition 65, and all of it is reflected in Figure 2.
        
        \nThe visualizations below were created in Tableau, after geocoding the data based on the ZIP codes provided in the CCDC dataset.
        
        \n---
        
        \nIn California, there were twin propositions on the 2016 ballot, Propositions 65 and 67. Proposition 67 represented a vote on Senate Bill 270, which was a ban on single-use plastic carryout bags in grocery stores. Under SB-270, single-use plastic bags would be replaced with re-usable bags, which would be for sale to grocery store customers. 
        
        \nProposition 65 presented as a more sustainable version of Proposition 67 in its ballot narrative. In actuality, both propositions were only on the ballot because Prop. 65 challenged to veto SB-270 altogether
        
        \nIt may have seemed, to an uninformed voter, that the main difference between Propositions 65 and 67 was about where the revenue from selling re-usable bags would go. 
        
        \nProposition 67 was a vote on the ban itself, and said that the revenue would go back to grocery store owners, to cover their costs for manufacturing and procuring the bags, and educating customers on sustainable shopping. 
        
        \nInterviewing the campaign finance data provided by CCDC and reading the official ballot narratives made it clear that Proposition 65 and its plastic-producing backers had clandestine (however obvious) motivations.
        
        \nProposition 65 said that the revenue from re-usable bag sales would go to an Environmental Protection and Enhancement Fund (EPEF). 
        
        \n*"The Wildlife Conservation Board would have utilized the fund for environmental protection and grants to environmental conservation organizations. Grants could have been used for drought mitigation; clean drinking water supplies; recycling; litter removal; wildlife habitat restoration; beach cleanup; and state, regional, and local parks." - Ballotpedia.com*
        
        \nThough the EPEF seems a worthwhile cause, environmentalist support [largely fell with Proposition 67](https://ballotpedia.org/California_Proposition_67,_Plastic_Bag_Ban_Veto_Referendum_(2016)#Support_for_.22yes.22_vote). That's a hint into the story of the twin propositions, which the campaign finance data will begin to clarify. 
        
        \nThis is a first look at the campaign finance data, provided by the California Civic Data Coalition. It immediately stuck out that the same 5 contributors that supported Proposition 65, opposed Proposition 67. This was because all of the contributions for Proposition 65 were registered in direct opposition to Proposition 67. 
        
        \n![Figure 1](/plastic_bag_props/fig.1.jpg)
        
        \n**Figure 1**, a screenshot from the Python notebook for the project. Available on Github.
        
        \nThese 5 companies contributed to the one committee sponsoring the proposition, the American Progressive Bag Alliance.
        
        \nProposition 65 didn't have any contributions against it, probably because it wouldn't have been worth taking focus away from Proposition 67.
        
        \n![The American Progressive Bag Alliance's logo](/plastic_bag_props/fig.7.jpg)
        
        \n### Prop. 65 - CARRY-OUT BAGS. CHARGES. INITIATIVE STATUTE
        
        \n![Figure 2](/plastic_bag_props/fig.2.jpg)
        
        \n**Figure 2**, available on [Tableau Public.](https://public.tableau.com/profile/khalil6901#!/vizhome/Prop65sSupportingCommitteesandContributions/Sheet1)
        
        \n- Contributions supporting Prop. 65 averaged $99,311.60 (27 contributions) which is, on average, over 300x higher than those supporting Prop. 67.
        
        \n### "STOP THE SWEETHEART BAG TAX DEAL. HELP THE ENVIRONMENT"
        
        \nThe official ballot argument for Proposition 65 that was presented to voters claimed that grocery stores would profit from selling paper bags in place of plastic bags. Prop. 65's redirection of funds from grocery stores to the EPEF claimed to prevent profiteering, to keep the environmentalist effort pure. 
        
        \nThe opposing argument was that the revenue from selling paper bags would have covered the grocery stores' costs for buying the bags and providing environmentally educational material to customers, which Prop. 67 mandated.
        
        \n*Prop. 65 official ballot narrative, presented to voters in the booth*
        
        \n**"DON'T BE FOOLED BY PROP 67.** 
        \nIt is a $300 million per year HIDDEN TAX INCREASE on California consumers who will be forced to pay a minimum 10 cents for every paper and thick plastic grocery bag they are given at the checkout.
        \nAnd not one penny goes to the environment. Instead, the Legislature gave all $300 million in new tax revenue to grocers as extra profit.
        \nStop the sweetheart special interest deal... **VOTE NO ON PROP 67. "**
        
        \nProposition 67 had many small contributors, largely from California residents. 
        
        \n### Prop. 67 - REFERENDUM TO OVERTURN BAN ON SINGLE-USE PLASTIC BAGS.
        
        \n![Figure 3](/plastic_bag_props/fig.3.jpg)
        
        \n**Figure 3**, available on [Tableau Public.](https://public.tableau.com/profile/khalil6901#!/vizhome/Prop67Contributions/Sheet1)
        
        \n- 6,252 in support out of 6,279 total contributions, 99%
        \n- Average contribution of $286.17
        
        \n![Figure 4](/plastic_bag_props/fig.4.jpg)
        
        \n**Figure 4**, from [Money in Politics : An Analysis of 2016 California Ballot Propositions Contributions by Serigne Mourtallah M'backe Faye, 2021](https://github.com/mourtallah/CA-Ballot-Props) 
        
        \nWhen looking at all the California ballot propositions in 2016, Prop. 67 was on the higher end with 6,000+ contributors, as opposed to Prop. 65's five contributors.
        
        \n![Figure 5](/plastic_bag_props/fig.5.jpg)
        
        \n**Figure 5,** Screenshot from the Python notebook for the project, available on Github.
        
        \n- Prop. 67 raised only about 2/3 of what Prop. 65 raised, which was largely done by the four plastics producers.
        
        \n### 67 vs. 65
        
        \nWe find a story about the two propositions, and narratives about contributor motives on [Ballotpedia](https://ballotpedia.org/California_Proposition_65,_Dedication_of_Revenue_from_Disposable_Bag_Sales_to_Wildlife_Conservation_Fund_(2016)).
        
        \n![Figure 6](../public/plastic_bag_props/fig.6.jpg)
        
        \n**Figure 6**, from [Ballotpedia](https://ballotpedia.org/California_Proposition_65,_Dedication_of_Revenue_from_Disposable_Bag_Sales_to_Wildlife_Conservation_Fund_(2016)): 
        
        \nProp. 65 would have only succeeded in its surface aims if it both props won, and 65 succeeded with a greater margin than67's winning margin. 
        
        \nThere was a quirk in Section 6(a) of Prop. 65 that meant that if Prop. 67 failed while Prop. 65 passed, then there would be no plastic bag ban in the first place. 
        
        \nThe opposing argument presented on the ballot accused Proposition 65 and its supporters of trying to confuse voters into voting against the plastic bag ban altogether. This is supported when we look at who contributed: four plastics companies, against the citizens of California. 
        
        \n*Prop. 67 official ballot narrative, presented to voters in the booth.*
        
        \n"**YES on 67 to REDUCE LITTER, PROTECT OUR OCEAN and WILDLIFE, and REDUCE CLEAN-UP COSTS.**
        \nSingle-use plastic shopping bags create some of the most visible litter that blows into our parks, trees and neighborhoods, and washes into our rivers, lakes and ocean. A YES vote will help keep discarded plastic bags out of our mountains, valleys, beaches and communities, and keep them beautiful. The law also will save our state and local  communities tens of millions of dollars in litter clean-up costs.
        
        \n**OUT-OF-STATE PLASTIC BAG COMPANIES ARE OPPOSING CALIFORNIA'S PROGRESS**
        \nOpposition to this law is funded by four large out-of-state state plastic bag companies. They don't want California to take leadership on plastic bag waste, and are trying to defeat this measure to protect their profits.
        \nDon't believe their false claims. We should give California's plastic bag law a chance to work, especially with so much success already at the local level."
        
        \n### Political Trickery
        
        \nIn this story, a few plastic bag companies making up the APBA put their money together and created a misleading proposition to sabotage the Prop. 67 plastic bag ban. That Prop. 65 was listed in opposition to Prop. 67, and that Prop. 65 was sponsored by plastic bag companies, says that 65 suggest was disingenuous in its framing. The APBA's proposition 65 claimed to be even more environmentalist than the initial plastic bag ban. In fact, Prop. 65 was as profit-driven and environmentally destructive as it accused Prop. 67 of being. The APBA was the real 'sweetheart', trying to meet its own needs at the public's expense. 
        
        \nThe story of Propositions 67 and 65 is important because it's an example of political tricks at the state level. Politicians use disingenuous narratives and [use policies as bargaining chips](https://www.theverge.com/2020/12/29/22204976/section-230-senate-deal-stimulus-talks-checks) for partisan aims. 
        
        \n### Citations:
        
        \n- [Money in Politics : An Analysis of 2016 California Ballot Propositions Contributions by Serigne Mourtallah M'backe Faye, 2021](https://github.com/mourtallah/CA-Ballot-Props)
        \n- [California Proposition 65, Dedication of Revenue from Disposable Bag Sales to Wildlife Conservation Fund (2016)](https://ballotpedia.org/California_Proposition_65,_Dedication_of_Revenue_from_Disposable_Bag_Sales_to_Wildlife_Conservation_Fund_(2016))
        \n- [Data provided by the California Civic Data Coalition via First Python Notebook (Ben Welsh, 2020)](https://www.firstpythonnotebook.org/)
        \n- [California governor signs phase-out of plastic bags by Patrick McGreevy (2014)](https://www.chicagotribune.com/nation-world/chi-california-governor-plastic-bag-ban-20140930-story.html)
    `

function SiteColumns() {
    return(
        <Router>
        < FlexContainer >
            < Professional className='border border-5' />
            < Route exact path='/' component={MainContent} className='border border-5' />
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
        <nav className='panel flex-column border border-5 border-success p-4'>
            <h5>Khalil Abdellah</h5><br></br>
            <i>Philadelphia, PA</i><br></br>
            <img src={iconUrl} alt='icon depicting current weather forecast'></img><h5>{temperature}&#176;</h5> <br></br>
            <h6><strong>Site under construction...</strong></h6>
            <ul>
                <li class='mute'>home</li>
                <li class='mute'>freq.ly used code</li>
                <li class='mute'>engineering portfolio</li>
                <li class='mute'>data journalism</li>
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
            < ReactMarkdown children={markdownPlastic} />
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