import React from 'react';

import './home.styles.scss';

const Home = () => (
    <section className='home' id='home'>

        <div className='container'>
            <div className='home-content'>
                <div className='text-1'>Hello my name is </div>
                <div className='text-2'>Volovlikov Evgeny</div>
                <div className='text-3'>And I`m <span>a Web Developer</span></div>
                <a href="tel:89772850461">Hire me</a>
            </div>
        </div>
    </section>
)

export default Home;
