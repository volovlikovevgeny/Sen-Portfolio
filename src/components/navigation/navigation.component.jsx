import React from 'react';
import './navigation.styles.scss';

import { Link } from 'react-scroll';

class Navigation extends React.Component {

    constructor() {
        super()

        this.state = {
            isHidden: true,
            navLinks: [
                {
                    id: 1,
                    link: 'home',
                    name: 'Home'
                },
                {
                    id: 2,
                    link: 'about',
                    name: 'About'
                },
                {
                    id: 3,
                    link: 'projects',
                    name: 'Projects'
                },
                {
                    id: 4,
                    link: 'skills',
                    name: 'Skills'
                },
                {
                    id: 5,
                    link: 'contact',
                    name: 'Contact'
                },
            ]
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
        const { isHidden } = this.state;
        return (
            <nav className='navbar'>
                <div className='navbar-items container'>
                    <div className='logo'><Link
                        to='home'
                        smooth={true}
                        offset={70}
                        duration={700}>Portfo<span>lio</span></Link></div>
                    <ul className='menu' style={isHidden ? null : { left: '0' }}>
                        {this.state.navLinks.map(item => (
                            <li key={item.id}>
                                <Link
                                    activeClass='active'
                                    to={item.link}
                                    spy={true}
                                    smooth={true}
                                    offset={70}
                                    duration={700}
                                    onClick={this.closeClick}>{item.name}
                                </Link>
                            </li>
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