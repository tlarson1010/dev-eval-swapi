import React from 'react'
import {Grid} from 'semantic-ui-react'
import { fetchJson } from '../../api'
import { VehicleType } from '../../types'
import Vehicle from '../Vehicle'

function Vehicles() {
    const [vehicles, setVehicles] = React.useState<VehicleType[]>([])
    document.getElementById('searchResults')?.replaceWith('')
    React.useEffect(() => {
        fetchJson<{ results: VehicleType[] }>('vehicles')
        .then(vehiclesResponse => setVehicles(vehiclesResponse.results))
    }, [])

    return (
        <div>
            <Grid columns={3}>
                {vehicles.map(vehicle => <Vehicle key={vehicle.name} vehicle={vehicle} />)}
            </Grid>
        </div>
    )
}

export default Vehicles