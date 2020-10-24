import React from 'react';

import './navigation.styles.scss';

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


    render() {
        const { isHidden } = this.state;
        console.log(isHidden);
        return (
            <nav className='navbar'>
                <div className='navbar-items container'>
                    <div className='logo'><a href="#">Portfo<span>lio</span></a></div>
                    <ul className='menu' style={isHidden ? null : { left: '0' }}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contacts</a></li>
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