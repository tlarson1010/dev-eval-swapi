import { SpeciesType } from '../../types';
import {Card, Grid} from 'semantic-ui-react';


interface SpeciesSProps {
    speciesS: SpeciesType
}

function SpeciesSingular({ speciesS }: SpeciesSProps){
    return <Grid.Column key={speciesS.name}>
                <Card>
                    <Card.Content>
                        <Card.Header>{speciesS.name}</Card.Header>
                        <Card.Description>
                            <strong>Homeworld</strong>
                            <p>{speciesS.homeworld}</p>
                            <strong>Language</strong>
                            <p>{speciesS.language}</p>
                            <strong>Average Height</strong>
                            <p>{speciesS.average_height}</p>
                            <strong>Average Lifespan</strong>
                            <p>{speciesS.average_lifespan}</p>
                        </Card.Description>
                    </Card.Content>
                </Card>
           </Grid.Column>
}

export default SpeciesSingular