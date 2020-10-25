import React from 'react';
import './skills.styles.scss';

export default function Skills() {
    return (
        <section className='skills' id='skills'>
            <div className='container'>
                <h2 className='title'>My Skills</h2>
                <div className='skills-content'>
                    <div className='column left'>
                        <div className='text'>My creative skills and  experience</div>
                        <p>Excellent knowledge of English, knowledge of Chinese at a high level.
                        Higher education of a translator (IV grade).
                        The desire to speak and work with people, an active life position, There are personal projects. Experience in problem solving and finding effective solutions.</p>
                        <a href="#">Read more</a>
                    </div>
                    <div className='column right'>
                        <div className='bars'>
                            <div className='info'>
                                <span>HTML</span>
                                <span>95%</span>
                            </div>
                            <div className='line html'></div>
                        </div>

                        <div className='bars'>
                            <div className='info'>
                                <span>CSS</span>
                                <span>92%</span>
                            </div>
                            <div className='line css'></div>
                        </div>

                        <div className='bars'>
                            <div className='info'>
                                <span>JS</span>
                                <span>90%</span>
                            </div>
                            <div className='line js'></div>
                        </div>

                        <div className='bars'>
                            <div className='info'>
                                <span>React</span>
                                <span>88%</span>
                            </div>
                            <div className='line js'></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
