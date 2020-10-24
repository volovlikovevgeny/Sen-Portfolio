import React from 'react';
import './skills.styles.scss';


export default function Skills() {
    return (
        <section className='skills'>
            <div className='container'>
                <h2 className='title'>My Skills</h2>
                <div className='skills-content'>
                    <div className='column left'>
                        <div className='text'>My creative skills and  experience</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa architecto, odio ea cumque impedit iste debitis consequatur adipisci corrupti qui officiis sed consequuntur! Omnis at, dignissimos voluptas temporibus facilis aliquid eum a repella</p>
                        <a href="#">Read more</a>
                    </div>
                    <div className='column right'>
                        <div className='bars'>
                            <div className='info'>
                                <span>HTML</span>
                                <span>90%</span>
                            </div>
                            <div className='line html'></div>
                        </div>

                        <div className='bars'>
                            <div className='info'>
                                <span>CSS</span>
                                <span>85%</span>
                            </div>
                            <div className='line css'></div>
                        </div>

                        <div className='bars'>
                            <div className='info'>
                                <span>JS</span>
                                <span>67%</span>
                            </div>
                            <div className='line js'></div>
                        </div>

                        <div className='bars'>
                            <div className='info'>
                                <span>React</span>
                                <span>83%</span>
                            </div>
                            <div className='line js'></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
