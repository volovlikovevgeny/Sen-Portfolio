import React from 'react';
import './navigation.styles.scss';

import { Link } from 'react-scroll';

class Navigation extends React.Component {

    constructor() {
        super()

        this.state = {
            isHidden: true,
            linksNav: ['Home', 'About', 'Services', 'Skills', 'Contacts']
        }
    }

    toggleClick = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    closeClick = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        const { isHidden, linksNav } = this.state;
        return (
            <nav className='navbar'>
                <div className='navbar-items container'>
                    <div className='logo'><a href="/home">Portfo<span>lio</span></a></div>
                    <ul className='menu' style={isHidden ? null : { left: '0' }}>
                        {linksNav.map(item => (
                            <li><Link activeClass='active'
                                key={Math.floor(Math.random) * 20}
                                to={item}
                                spy={true}
                                smooth={true}
                                offset={70}
                                duration={700}
                                onClick={this.closeClick}>{item}</Link></li>
                        ))}
                    </ul>
                    <div className='menu-btn' onClick={this.toggleClick} >
                        {
                            isHidden
                                ?
                                < i className='fa fa-bars'></i>
                                : <i className="fas fa-times"></i>
                        }
                    </div>
                </div>
            </nav >
        )
    }
}


export default Navigation;