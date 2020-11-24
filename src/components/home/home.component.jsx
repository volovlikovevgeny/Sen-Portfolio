import React from 'react';

import './home.styles.scss';

const Home = () => (
    <div
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
    >
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
    </div>

)

export default Home;
