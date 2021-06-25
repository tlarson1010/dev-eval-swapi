import { StarshipType } from '../../types';
import {Grid, Card} from 'semantic-ui-react';

interface StarshipProps {
  starship: StarshipType
}

function Starship({ starship }: StarshipProps) {
  return <Grid.Column key={starship.name}>
          <Card>
                  <Card.Content>
                    <Card.Header>{starship.name}</Card.Header>
                    <Card.Description>
                      <strong>Model</strong>
                      <p>{starship.model}</p>
                      <strong>Crew</strong>
                      <p>{starship.crew}</p>
                      <strong>Films</strong>
                      <p>{starship.films}</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
         </Grid.Column>
         
}

export default Starship