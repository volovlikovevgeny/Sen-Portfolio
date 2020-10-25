import React from 'react';
import './contact.styles.scss';



export default function Contacts() {
    return (
        <section className='contact' id='contacts'>
            <div className='container'>
                <h2 className='title'>Contact me</h2>
                <div className='contact-content'>
                    <div className='column left'>
                        <div className='text'>Get in Touch</div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti cumque sit provident rerum laboriosam asperiores consequuntur tempore nesciunt necessitatibus deserunt!</p>

                        <div className='icons'>

                            <a className='row'>
                                <i className='fas fa-user'></i>
                                <div className='info'>
                                    <div className='head'>Name</div>
                                    <div className='sub-title'>Volovlikov Evgeny</div>
                                </div>
                            </a>

                            <div className='row'>
                                <i className="fas fa-map-marker-alt"></i>
                                <div className='info'>
                                    <div className='head'>Address</div>
                                    <div className='sub-title'>Rechnoy vokzal,19</div>
                                </div>
                            </div>

                            <div className='row'>
                                <i className="fas fa-envelope"></i>
                                <div className='info'>
                                    <div className='head'>Email</div>
                                    <div className='sub-title'>Volovlikov97@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='column right'>
                        <div className='text'>Message me</div>
                        <form className='form' action="#">
                            <div className='fields'>

                                <div className='field name'>
                                    <input type="text" placeholder='Name' required />
                                </div>
                                <div className='field email'>
                                    <input type="email" placeholder='Email' required />
                                </div>

                            </div>
                            <div className='field textarea'>
                                <textarea cols="30" rows="10" placeholder='Describe project...' required />
                            </div>

                            <div className='button'>
                                <button type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
