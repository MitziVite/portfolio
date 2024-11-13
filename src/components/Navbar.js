import { Component } from 'react';
import mitziImage from '../../src/images/Mitzi.png';
import "./NavbarStyles.css"
import '@fortawesome/fontawesome-free/css/all.min.css';


class Navbar extends Component{
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
    return(
        <>
        <nav>
            <a href="index.html">
                <img src={mitziImage} alt='Mitzi'></img>
            </a>
            <div>
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                    <li><a className="active" href="index.html">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="index.html">Portfolio</a></li>
                    <li><a href="index.html">Contact</a></li>
                </ul>
            </div>

            <div id='mobile' onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>


        </nav>
        </>
    )
}
}

export default Navbar;