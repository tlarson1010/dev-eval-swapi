import React from 'react'
import {Grid} from 'semantic-ui-react';
import { fetchJson } from '../../api'
import { StarshipType } from '../../types'
import Starship from '../Starship'

function Starships() {
  const [starship, setStarships] = React.useState<StarshipType[]>([])
  //messy fix to prevent search results cards showing up on other pages
  document.getElementById('searchResults')?.replaceWith('')
  React.useEffect(() => {
    fetchJson<{ results: StarshipType[] }>('starships')
      .then(starshipResponse => setStarships(starshipResponse.results))
  }, [])

  return (
    <div>
      <Grid columns={3}>
      {starship.map(starship => <Starship key={starship.name} starship={starship} />)}
      </Grid>
    </div>
  )
}

export default Starships;