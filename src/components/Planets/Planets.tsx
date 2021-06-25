import React from 'react'
import {Grid} from 'semantic-ui-react';
import { fetchJson } from '../../api'
import { PlanetType } from '../../types'
import Planet from '../Planet'

function Planets() {
  const [planets, setPlanets] = React.useState<PlanetType[]>([])
  let counter = 0
  let newId = ''
  //messy fix to prevent search results cards showing up on other pages
  document.getElementById('searchResults')?.replaceWith('')
  React.useEffect(() => {
    fetchJson<{ results: PlanetType[] }>('planets')
      .then(planetResponse => setPlanets(planetResponse.results))
  }, [])

  createId(counter, newId, planets)

  return (
    <div>
      <Grid columns={3}>
      {planets.map(planet => <Planet key= {planet.id} planet={planet} />)}
      </Grid>
    </div>
  )
}

function createId(counter: number, newId: string, planets: PlanetType[])
{
  while(counter < (planets.length))
  {
    if(planets[counter].url.length > 31){
      newId = planets[counter].url.substr(-3).replace('/','')
    }
    else {
      newId = planets[counter].url.substr(-3).replace('/','')
    }
    planets[counter].id = parseInt(newId)
    console.log(planets[counter].id)
    counter++;
  }

  return planets
}

export default Planets;