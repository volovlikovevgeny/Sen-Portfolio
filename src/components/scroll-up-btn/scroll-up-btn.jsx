import React from 'react';
import './scroll-up-styles.scss';
import { Link } from 'react-scroll';

export default function ScrollBtn() {




    return (
        <Link
            className='scroll-up-btn'
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            offset={70}
            duration={700}
        >
            <i className='fas fa-angle-up'></i>
        </Link>
    )
}


