import React from 'react';
import './about.styles.scss';

export default function About() {
    return (
        <section className='about' id='about'>
            <div className='container'>
                <h2 className='title'>About me</h2>
                <div className='about-content'>
                    <div className='column left'>
                        <img src="https://i.ibb.co/LpK8b3f/portfolio.jpg" alt="About" />
                    </div>
                    <div className='column right'>
                        <div className='text'>I`m Jenya and I`m <span>Web Developer</span></div>
                        <p>I am a Web Developer with enthusiasm and focus on Frontend Development and Scripting. I am passionate about building scalable software, creating effective solutions, and learning every day to grow professionally in the IT field.

                            Feel free to contact me or email at any time</p>
                        <a href="#">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
