import React from 'react';
import './services.styles.scss';


export default function Services() {
    return (
        <section className='services' id='services'>
            <div className='container'>
                <h2 className='title'>Projects</h2>
                <div className='serv-content'>
                    <div className='card'>
                        <div className='box'>
                            <i className='fas fa-code'></i>
                            <div className='text'>Frontend Developing</div>
                            <p>Frontend application in order to create I`ve used React and Sass thinking about optimizing, adding Backend  </p>
                            <a href="https://portsenfol-live.herokuapp.com/">
                                <img src="https://i.ibb.co/k8Sw1KL/img-1.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                            <i className='fas fa-code'></i>
                            <div className='text'>Web Developing</div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam deserunt pariatur ipsa aut, dicta nostrum.</p>
                            <img src="https://i.ibb.co/R9RPvvL/img-2.png" alt="" />
                        </div>

                    </div>
                    <div className='card'>
                        <div className='box'>
                            <i className='fas fa-code'></i>
                            <div className='text'>Web</div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam deserunt pariatur ipsa aut, dicta nostrum.</p>
                            <img src="https://i.ibb.co/k8Sw1KL/img-1.png" alt="" />
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                            <i className='fas fa-code'></i>
                            <div className='text'>Web Developing</div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam deserunt pariatur ipsa aut, dicta nostrum.</p>
                            <img src="https://i.ibb.co/k8Sw1KL/img-1.png" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
