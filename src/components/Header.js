import React from 'react'
import {Navbar} from 'react-bootstrap'



 const Header = () => {
  
    return (
      <Navbar className="navbar">
        <h1>{this.props.title}</h1>
      </Navbar>
    )
}

export default Header