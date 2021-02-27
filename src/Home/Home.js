import React, {Component} from 'react'
import './Home.scss'
import Logo from './../assets/logo-meet.png'

export class Home extends Component {
    render () {
        return (
            <div className = "home">
                <img className="home-logo" src={Logo} alt='logo'/>
                <h2 className="title">FRIENDS</h2>
                <span>Find Some Friends!</span>
            </div>
        )
    }

}

export default Home