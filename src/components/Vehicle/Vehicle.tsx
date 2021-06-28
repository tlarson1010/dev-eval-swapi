import { VehicleType } from '../../types';
import {Card, Grid} from 'semantic-ui-react';


interface VehicleProps {
    vehicle: VehicleType
}

function Vehicle({ vehicle }: VehicleProps) {
    return <Grid.Column key={vehicle.name}>
                <Card>
                    <Card.Content>
                        <Card.Header>{vehicle.name}</Card.Header>
                        <Card.Description>
                            <strong>Model</strong>
                            <p>{vehicle.model}</p>
                            <strong>Manufacturer</strong>
                            <p>{vehicle.manufacturer}</p>
                            <strong>Max Atmosphering Speed</strong>
                            <p>{vehicle.max_atmosphering_speed}</p>
                            <strong>Pilots</strong>
                            <p>{vehicle.pilots}</p>
                        </Card.Description>
                    </Card.Content>
                </Card>
           </Grid.Column>
}

export default Vehicle