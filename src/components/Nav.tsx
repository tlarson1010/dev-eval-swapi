import { Link } from 'react-router-dom';
import { Menu} from 'semantic-ui-react';


function Nav()
{
    return(
        <Menu inverted>
            
                <Link to="/">
                <Menu.Item name="Home"></Menu.Item>
                </Link>
                <Link to= "/People">
                <Menu.Item name="People"></Menu.Item>
                </Link>
                <Link to="/Films">
                <Menu.Item name="Films"></Menu.Item>
                </Link>
                <Link to="/Planets">
                <Menu.Item name="Planets"></Menu.Item>
                </Link>
                <Link to="/Starships">
                <Menu.Item name="Starships"></Menu.Item>
                </Link>
                <Link to="/Vehicles">
                <Menu.Item name= "Vehicles"></Menu.Item>
                </Link>
                <Link to="Species">
                <Menu.Item name= "Species"></Menu.Item>
                </Link>
        </Menu>
    );
}

export default Nav;