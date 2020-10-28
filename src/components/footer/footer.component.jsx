import React from 'react';
import './footer.styles.scss';

import { Link } from 'react-scroll';

export default function Footer() {
    return (
        <footer className='footer' id='footer'>
            <span>Created By <Link
                to='home'
                spy={true}
                smooth={true}
                offset={70}
                duration={700} >Jenya</Link> | <span className='far fa-copyright'></span>2020 All rights reserved. </span>
        </footer>
    )
}
