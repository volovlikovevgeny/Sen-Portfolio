import React from 'react';
import './navigation.styles.scss';

import { Link } from 'react-scroll';

class Navigation extends React.Component {

    constructor() {
        super()

        this.state = {
            isHidden: true,
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
                    <div className='logo'><a href="/home">Portfo<span>lio</span></a></div>
                    <ul className='menu' style={isHidden ? null : { left: '0' }}>
                        <li><Link
                            activeClass='active'
                            to='home'
                            spy={true}
                            smooth={true}
                            offset={70}
                            duration={700}
                            onClick={this.closeClick}
                        >Home</Link></li>
                        <li><Link
                            activeClass='active'
                            to='about'
                            spy={true}
                            smooth={true}
                            offset={70}
                            duration={700}
                            onClick={this.closeClick}
                        >About</Link></li>
                        <li><Link
                            activeClass='active'
                            to='services'
                            spy={true}
                            smooth={true}
                            offset={70}
                            duration={700}
                            onClick={this.closeClick}
                        >Projects</Link></li>
                        <li><Link
                            activeClass='active'
                            to='skills'
                            spy={true}
                            smooth={true}
                            offset={70}
                            duration={700}
                            onClick={this.closeClick}
                        >Skills</Link></li>

                        <li><Link
                            activeClass='active'
                            to='contacts'
                            spy={true}
                            smooth={true}
                            offset={70}
                            duration={700}
                            onClick={this.closeClick}
                        >About</Link></li>
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