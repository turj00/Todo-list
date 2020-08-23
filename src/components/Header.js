import React from 'react'
import {Link} from 'react-router-dom' 
//for about and home page trasition 

function Header() {
    return (
        <div>
            <header style={headerStyle}>

                <h1> ToDO List</h1>
                <Link to="/" style={linkStyle}>Home</Link> || <Link to="/about" style= {linkStyle}>About</Link>


            </header>
            
        </div>
    )
}

const headerStyle = {

    background: 'black',
    textAlign: 'center',
    color: 'yellow',
    padding: '5px',
    borderRadius: '20px',
    fontSize:"20px"


}


const linkStyle = {

    color:'white',
    background:'purple',
    fontSize:'25px',
    
    


}
export default Header
