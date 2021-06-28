import { FilmType } from '../../types';
import {Card, Grid} from 'semantic-ui-react';

interface FilmProps {
    film: FilmType
}

function Film({ film }: FilmProps) {
    return <Grid.Column key={film.id}>
              <Card>
                <Card.Content>
                  <Card.Header>{film.title}</Card.Header>
                  <Card.Description>
                    <strong>Release Date</strong>
                    <p>{film.release_date}</p>
                    <strong>Opening Crawl</strong>
                    <p>{film.opening_crawl}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
  
}

export default Film