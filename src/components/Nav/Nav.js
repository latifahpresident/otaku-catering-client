import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, famobilealt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLinksWrapper, CateringDropdownWrapper,  } from './nav-styles';
import '../../App.css';

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropDownOpen: false
        }
    }


    toggleDropdown = () => {
        this.setState({
            dropDownOpen: !this.state.dropDownOpen
        })
    }

    openDropdown = () => {
        this.setState({
          dropDownOpen: true
        });
        console.log('toggling')
    };

    closeDropdown = () => {
        this.setState({
            dropDownOpen: false
          });
    }

    render () {
        console.log(this.state)
    return (

        <div>
        <NavLinksWrapper>
            {/* <LinksWrapper> */}
            
            <NavLink
                to='/home'
                activeClassName='active'
                className='nav-link'
            >
                Home
            </NavLink>
            <NavLink
                to='/menu'
                activeClassName='active'
                className='nav-link'
            >
                Menu
            </NavLink>

            
            <NavLink
                to='/catering-services'
                activeClassName='active'
                className='nav-link'
            >
                Catering Services
                <FontAwesomeIcon onClick={this.toggleDropdown}  className= 'font-icon' icon={faChevronDown} /> 
            </NavLink>
            <div className={this.state.dropDownOpen ? 'open' : 'close'}>
                <Dropdown />
            </div>
            
           
            <NavLink
                to='/about'
                activeClassName='active'
                className='nav-link'
            >
                About
            </NavLink>

            <NavLink
                to='/contact'
                activeClassName='active'
                className='nav-link'
            >
                Contact
            </NavLink>
            <div>
            <FontAwesomeIcon onClick={this.openDropdown} className='phone-icon' icon={faMobileAlt} /> 
            <a href="tel:1-707-590-5355" className='nav-link '>707-590-5355</a>
            </div>
            <NavLink
                to='/add-new-dish'
                activeClassName='active'
                className='nav-link'
            >
                Add New Dish
            </NavLink>
           {/* </LinksWrapper> */}
        </NavLinksWrapper>
        
        </div>
    )}
};

export default Nav