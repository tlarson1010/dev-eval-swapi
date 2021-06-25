import { PersonType } from '../../types';
import {Card, Grid} from 'semantic-ui-react';
import Films from '../Films'


interface PersonProps {
  person: PersonType
}


//I'm returning 10 grids instead of 10 cards inside of one grid.
function Person({ person }: PersonProps) {
   return <Grid.Column key={person.id}>
            {console.log(person.id)}
            <Card>
              <Card.Content>
              <Card.Header>{person.name}</Card.Header>
              <Card.Description>
                <strong>Height</strong>
                <p>{person.height}</p>
                <strong>Mass</strong>
                <p>{person.mass}</p>
                <strong>Hair Color</strong>
                <p>{person.hair_color}</p>
                <strong>Films</strong>
                <p>{pullFilmName(person.films)}</p>
                <strong>Species</strong>
                <p>{person.species}</p> 
                </Card.Description>
              </Card.Content>
          </Card>
          </Grid.Column>
          
} 

//messy way to return the film title within the people card.
function pullFilmName(films:Array<string>)
{
  let counter = 0
  console.log(films[0])
  while(counter < films.length)
  {
    if(films[counter] === 'https://swapi.dev/api/films/1/')
    {
      films[counter] = "A New Hope. "
    }
    else if (films[counter] === 'https://swapi.dev/api/films/2/')
    {
      films[counter] = "The Empire Strikes Back. "
    }
    else if (films[counter] === 'https://swapi.dev/api/films/3/')
    {
      films[counter] = "Return of the Jedi. "
    }
    else if (films[counter] === 'https://swapi.dev/api/films/4/')
    {
      films[counter] = "The Phantom Menance. "
    }
    else if (films[counter] === 'https://swapi.dev/api/films/5/')
    {
      films[counter] = "Attack of the Clones. "
    }
    else if (films[counter] === 'https://swapi.dev/api/films/6/')
    {
      films[counter] = "Revenge of the Sith. "
    }
    counter++
  }
  return films
  
}


  

         


export default Person
