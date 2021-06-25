import React from 'react'
import {Grid} from 'semantic-ui-react';
import { fetchJson } from '../../api'
import { FilmType } from '../../types'
import Film from '../Film'

function Films(){
    const [films, setFilms] = React.useState<FilmType[]>([])
    let counter = 0
    let newId = ''
    //messy fix to prevent search results cards showing up on other pages
    document.getElementById('searchResults')?.replaceWith('')
    React.useEffect(() => {
        fetchJson<{ results: FilmType[] }>('films')
          .then(filmsResponse => setFilms(filmsResponse.results))
      }, [])

      createId(counter, newId, films)

      return (
        <div>
          <Grid columns= {3}>
          {films.map(films => <Film key={films.id} film={films} />)}
          </Grid>
        </div>
      )
}

function createId(counter: number, newId: string, films: FilmType[])
{
  while(counter < (films.length))
  {
    if(films[counter].url.length > 31){
      newId = films[counter].url.substr(-3).replace('/','')
    }
    else {
      newId = films[counter].url.substr(-3).replace('/','')
    }
    films[counter].id = parseInt(newId)
    console.log(films[counter].id)
    counter++;
  }

  return films
}




export default Films