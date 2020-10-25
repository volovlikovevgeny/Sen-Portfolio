import React from 'react';
import emailjs from 'emailjs-com';

import './contact.styles.scss';

class Contacts extends React.Component {
    sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_imiolg3', e.target, 'user_iI1ucHAVW8QB1TXw91Inv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    render() {
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
                                        <div className='sub-title'>Rechnoy vokzal, 19</div>
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
                            <form className='form' onSubmit={this.sendEmail} >
                                <div className='fields'>

                                    <div className='field name'>
                                        <input type="text" name='name' placeholder='Name' required />
                                    </div>
                                    <div className='field email'>
                                        <input type="email" name='email' placeholder='Email' required />
                                    </div>

                                </div>
                                <div className='field textarea'>
                                    <textarea cols="30" rows="10" name='message' placeholder='Describe project...' required />
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
}

export default Contacts;