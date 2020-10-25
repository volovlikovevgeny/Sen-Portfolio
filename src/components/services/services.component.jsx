import React from 'react';
import './services.styles.scss';


export default function Services() {
    return (
        <section className='services'>
            <div className='container'>
                <h2 className='title'>Projects</h2>
                <div className='serv-content'>
                    <div className='card'>
                        <div className='box'>
                            <i className='fas fa-code'></i>
                            <div className='text'>Web Design</div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam deserunt pariatur ipsa aut, dicta nostrum.</p>
                            <img src="https://i.ibb.co/k8Sw1KL/img-1.png" alt="" />
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
                            <img src="https://i.ibb.co/0qnhtsp/img-3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
