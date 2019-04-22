import React from 'react'
import { NavLink } from 'react-router-dom';
import { CateringDropdown } from './nav-styles';

class Dropdown extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
   
    return (
        <CateringDropdown>
            <NavLink
                to='/wedding'
                activeClassName='active'
                className='dropdown-link'
            >
                Wedding
            </NavLink>

            <NavLink
                to='/wedding'
                activeClassName='active'
                className='dropdown-link'
            >
               Hor 'd'oeuvres
            </NavLink>

            <NavLink
                to='/wedding'
                activeClassName='active'
                className='dropdown-link'
            >
                Plated
            </NavLink>
        </CateringDropdown>
    )
    
}
};

export default Dropdown