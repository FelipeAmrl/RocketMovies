/* eslint-disable react/no-unescaped-entities */
import { Container } from './styles';

import { FiClock } from 'react-icons/fi';

import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Rating } from '../../components/Rating';
import { Description } from '../../components/Description';
import { ReturnButton } from '../../components/ReturnButton';

export function Preview()
{
    return (
        <Container>
            <Header />

            <div className="wrapper">
                <div className='button-wrapper'>
                    <ReturnButton title='Return' href="/"/>
                </div>
            </div>

            <main>    
                    <div className='title'>
                        <h1>Interestelar</h1>
                        <Rating rating={4}/>
                    </div>

                    <div className='date'>
                        <FiClock size={20} />
                        <span>23/05/22 às 08:00</span>
                    </div>

                    <div className='tag-wrapper'>
                        <Tag title='Sci-fi'/>
                        <Tag title='Drama'/>
                        <Tag title='Family'/>
                    </div>
                    
                    <Description 
                        content="In 2067, humanity is facing global extinction following a global famine, and has abandoned scientific pursuits such as space exploration. The ex-NASA pilot Joseph Cooperis forced to work as a farmer.
                        
                        Cooper experiences a gravitational anomaly in his daughter Murph's bedroom. He deduces it to be a pattern of GPS coordinates and arrives at a secret NASA facility headed byProfessor Brand. Brand explains to Cooper that they are trying to find an exoplanet capable of supporting life, and that he is working on a gravity equation to provide a way to transport large numbers of people there. He enlists Cooper to pilot an exploratoryspacecraft, the Endurance, with a crew of three scientists: Romilly, Doyle, and Brand’s daughter Amelia. This is humanity's last chance; there are no more resources to mount another expedition. A wormhole has been found near Saturn, enabling the ship to passthrough to another galaxy to search for a new home. On the other side, they investigate three planets orbiting a supermassive black hole, Gargantua, each one previously checked by a NASA scientist-explorer.
                    
                        The first planet is an ocean world of shallow water. Romilly remains in orbit while the others take a probe to the surface. The NASA explorer is found dead, and Doyle is swept away by a tidal wave generated by Gargantua's gravity. The tide floods the probe's engines, but they dry out enough for liftoff before the probe is destroyed. They return to the Endurance after only an hour, but 23 years have passed due to the time dilation caused by Gargantua's gravity."
                    />
            </main>
        </Container>
    );
}