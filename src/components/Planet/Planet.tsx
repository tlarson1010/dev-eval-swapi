import { PlanetType } from '../../types';
import {Card, Grid} from 'semantic-ui-react';


interface PlanetProps {
  planet: PlanetType
}
function Planet({ planet }: PlanetProps) {
    return <Grid.Column key={planet.id}>
                <Card>
                  <Card.Content>
                    <Card.Header>{planet.name}</Card.Header>
                    <Card.Description>
                      <strong>Diameter</strong>
                      <p>{planet.diameter}</p>
                      <strong>Population</strong>
                      <p>{planet.population}</p>
                      <strong>Climate</strong>
                      <p>{planet.climate}</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
         
}

export default Planet