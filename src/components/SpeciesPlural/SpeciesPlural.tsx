import React from 'react'
import {Grid} from 'semantic-ui-react'
import { fetchJson } from '../../api'
import { SpeciesType} from '../../types'
import SpeciesSingular from '../SpeciesSingular'

function SpeciesPlural() {
    const [speciesP, setSpecies] = React.useState<SpeciesType[]>([])

    document.getElementById('searchResults')?.replaceWith('')

    React.useEffect(() => {
        fetchJson<{ results: SpeciesType[]}>('species')
        .then(speciesResponse => setSpecies(speciesResponse.results))
    }, [])
    return (
        <div>
            <Grid columns={3}>
            {speciesP.map(speciesS => <SpeciesSingular key={speciesS.name} speciesS={speciesS}/>)}
            </Grid>
        </div>
    )
    
}

export default SpeciesPlural