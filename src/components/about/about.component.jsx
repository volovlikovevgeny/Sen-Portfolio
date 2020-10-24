import React from 'react';
import './about.styles.scss';

export default function About() {
    return (
        <section className='about'>
            <div className='container'>
                <h2 className='title'>About me</h2>
                <div className='about-content'>
                    <div className='column left'>
                        <img src="https://i.ibb.co/LpK8b3f/portfolio.jpg" alt="About" />
                    </div>
                    <div className='column right'>
                        <div className='text'>I`m Jenya and I`m <span>Web Developer</span></div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium eveniet labore pariatur natus, ipsam tempore velit! Neque, error pariatur? Exercitationem quisquam et, voluptatum aliquid distinctio alias, saepe nam assumenda libero consequatur a. Consequuntur voluptates sed provident et dolorem cumque magnam totam blanditiis fugit quae natus, reiciendis minima nihil. Illo voluptatum aperiam ut fuga dicta aspernatur accusamus facere hic ducimus ullam.</p>
                        <a href="#">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
