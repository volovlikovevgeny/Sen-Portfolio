import React from 'react';
import { connect } from 'react-redux';
import { navLinkAction } from '../../redux/navigation/nav.action';
import { selectNavLinksItems } from '../../redux/navigation/navigation.selectors';


import './navigation.styles.scss';

import { Link } from 'react-scroll';

class Navigation extends React.Component {
    render() {
        const { navLinks, isHiddenBtn, toggleCartHidden, } = this.props;

        return (
            <nav className='navbar'>
                <div className='navbar-items container'>
                    <div className='logo'><Link
                        to='home'
                        smooth={true}
                        offset={70}
                        duration={700}>Portfo<span>lio</span></Link></div>
                    <ul className='menu' style={isHiddenBtn ? null : { left: '0' }}>
                        {navLinks.map(item => (
                            <li key={item.id}>
                                <Link
                                    activeClass='active'
                                    to={item.link}
                                    spy={true}
                                    smooth={true}
                                    offset={70}
                                    duration={700}
                                    onClick={() => toggleCartHidden()}>{item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='menu-btn' onClick={() => toggleCartHidden()} >
                        {
                            isHiddenBtn
                                ? < i className='fa fa-bars'></i>
                                : <i className="fas fa-times"></i>
                        }
                    </div>
                </div>
            </nav >
        )
    }
}

const mapStateToProps = state => {
    console.log('Navigation:I am being called');
    return (
        {
            navLinks: selectNavLinksItems(state),
            isHiddenBtn: state.navLinks.isHidden,
        }
    )
}

const mapDispatchToProps = dispatch => (
    {
        toggleCartHidden: () => dispatch(navLinkAction())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);