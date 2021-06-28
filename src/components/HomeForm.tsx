import { fetchSearchJson } from '../api'
import React from 'react'
import {useForm} from 'react-hook-form'
import  {PersonType, FilmType, PlanetType, StarshipType, SpeciesType, VehicleType, FormValues } from '../types'
import Person from './Person'
import Film from './Film'
import Planet from './Planet'
import Starship from './Starship'
import SpeciesSingular from './SpeciesSingular'
import Vehicle from './Vehicle'
import {Grid} from 'semantic-ui-react'
import { render } from '@testing-library/react'



let search = 'hello there'
let type = 'people'
let sArray = ['', '']



function HomeForm(){
const { register, handleSubmit } = useForm<FormValues>();
document.title = 'Star Wars API Search'
    const element = <div>
                      <h1>Home Page</h1>
                      <h3>Welcome! On this page you can search the Star Wars Universe.</h3>
                      <p> Select a category from the dropdown menu, type in your search in the text box and hit submit to learn more about Star Wars!</p>
                      <form onSubmit={handleSubmit((data) => {
                        document.getElementById('searchResults')?.replaceWith('')
                        search = data.query
                        type = data.searchType
                        sArray[0] = search
                        sArray[1] = type
                        render(<Search queryType={sArray}/>)
                      })}>
                        <select {...register("searchType")} id="searchType">
                          <option value="people">People</option>
                          <option value="films">Films</option>
                          <option value="planets">Planets</option>
                          <option value="starships">Starships</option>
                          <option value="species">Species</option>
                          <option value="vehicles">Vehicles</option>
                        </select>
                        <input {...register("query")} id="query"/>
                        <input type="submit"/>
                      </form>
                    </div> 
               
    return (

      <div id="HomeForm">
          {element}
          <br></br>
        </div>
        
     
    )
  }

  interface FormProps {
    queryType: Array<string>
}

  function Search({queryType}:FormProps){
    const [people, setPeople] = React.useState<PersonType[]>([])
    const [films, setFilms] = React.useState<FilmType[]>([])
    const [planets, setPlanets] = React.useState<PlanetType[]>([])
    const [starships, setStarships] = React.useState<StarshipType[]>([])
    const [speciesPlural, setSpeciesPlural] = React.useState<SpeciesType[]>([])
    const [vehicles, setVehicles] = React.useState<VehicleType[]>([])

    const empty = <div id="searchResults">
                    <p>No results found.</p>;
                  </div>

    let query = queryType[0]
    let searchType = queryType[1]
    
    let searchResults = people.map(person => <Person key={person.id} person={person} />)
    React.useEffect(() => {
      if (searchType === 'people'){
        fetchSearchJson<{ results: PersonType[] }>(searchType, query)
        .then(peopleResponse => setPeople(peopleResponse.results))
      }
      else if(searchType === 'films'){
        fetchSearchJson<{ results: FilmType[] }>(searchType, query)
        .then(filmsResponse => setFilms(filmsResponse.results))

      }
      else if(searchType === 'planets'){
        fetchSearchJson<{ results: PlanetType[] }>(searchType, query)
        .then(planetsResponse => setPlanets(planetsResponse.results))
      }
      else if(searchType === 'starships'){
        fetchSearchJson<{ results: StarshipType[]}>(searchType, query)
        .then(starshipsResponse => setStarships(starshipsResponse.results))
      }
      else if(searchType === 'species'){
        fetchSearchJson<{ results: SpeciesType[]}>(searchType, query)
        .then(speciesResponse => setSpeciesPlural(speciesResponse.results))
      }
      else if(searchType === 'vehicles'){
        fetchSearchJson<{ results: VehicleType[]}>(searchType, query)
        .then(vehiclesResponse => setVehicles(vehiclesResponse.results))
      }
    },[])

    if (searchType === 'people'){
      searchResults = people.map(person => <Person key={person.name} person={person} />)
    }
    else if(searchType === 'films')
    {
      searchResults = films.map(films => <Film key={films.title} film={films} />)
    } 
    else if(searchType === 'planets')
    {
      searchResults = planets.map(planets => <Planet key={planets.name} planet={planets}/>)
    }
    else if(searchType === 'starships')
    {
      searchResults = starships.map(starships => <Starship key={starships.name} starship={starships}/>)
    }
    else if(searchType === 'species')
    {
      searchResults = speciesPlural.map(speciesS => <SpeciesSingular key={speciesS.name} speciesS={speciesS}/>)
    }
    else if(searchType === 'vehicles')
    {
      searchResults = vehicles.map(vehicle => <Vehicle key={vehicle.name} vehicle={vehicle}/>)
    }

    if(searchResults.length === 0)
    {
      return empty
    }

    return(
      <Grid id="searchResults" columns={3}>
        {searchResults}
      </Grid>
    )
    
  }
  
export default HomeForm