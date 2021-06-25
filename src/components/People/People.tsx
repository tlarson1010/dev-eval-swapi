import React from 'react'
import {Grid} from 'semantic-ui-react'
import { fetchJson } from '../../api'
import { PersonType } from '../../types'
import Person from '../Person'
import { render } from '@testing-library/react'
import App from '../App'


function People() {
  const [people, setPeople] = React.useState<PersonType[]>([])
  let counter = 0
  let newId = ''
  //messy fix to prevent search results cards showing up on other pages
  document.getElementById('searchResults')?.replaceWith('')
  React.useEffect(() => {
    fetchJson<{ results: PersonType[] }>('people')
      .then(peopleResponse => setPeople(peopleResponse.results))
  }, [])

  createId(counter, newId, people)
  
  return (
    <div>
      <Grid columns={3}>
      {people.map(person => <Person key={person.id} person={person} />)}
      </Grid>
    </div>
  )
}

function createId(counter: number, newId: string, people: PersonType[]){
  
  while(counter < (people.length))
  {
    if(people[counter].url.length > 31){
      newId = people[counter].url.substr(-3).replace('/','')
    }
    else {
      newId = people[counter].url.substr(-3).replace('/','')
    }
    people[counter].id = parseInt(newId)
    counter++;
  }

  return people
}

export default People
