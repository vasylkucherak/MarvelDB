import {Link, NavLink} from 'react-router-dom'; 
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/works/marvel_db/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li>
                        <NavLink
                            end
                            activeStyle={{'color': '#9f0013'}}
                            style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit'})}
                            to="/works/marvel_db/">
                            Characters
                        </NavLink> 
                    </li>
                    /
                    <li>
                        <NavLink
                            style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit'})}
                            to="/works/marvel_db/comics">
                            Comics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;