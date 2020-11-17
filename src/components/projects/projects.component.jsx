import React from 'react';
import './projects.styles.scss';


class Projects extends React.Component {

    constructor() {
        super()

        this.state = {
            projects: [
                {
                    id: 1,
                    dev: 'Frontend Developing',
                    text: 'Frontend application in order to create I`ve used React and Sass thinking about optimizing, adding Backend',
                    url: 'https://volovlikovevgeny.github.io/Sen-Portfolio/',
                    img: 'https://i.ibb.co/k8Sw1KL/img-1.png',
                    code: 'https://github.com/volovlikovevgeny/Sen-Portfolio',
                    live: 'https://volovlikovevgeny.github.io/Sen-Portfolio/'
                },
                {
                    id: 2,
                    dev: 'Full-stack',
                    text: 'E-commerce website that was made with React, react-router, redux, reselect, sass, firebase, stripe api, hooks, styled-components.',
                    url: 'https://drgn.netlify.app/',
                    img: 'https://i.ibb.co/R9RPvvL/img-2.png',
                    code: 'https://github.com/volovlikovevgeny/e-commerce',
                    live: 'https://drgn.netlify.app/'

                },
                {
                    id: 3,
                    dev: 'Full-Stack',
                    text: 'Frontend application in order to create I`ve used React and firebase, also thanks to the intellegance of api to create application',
                    url: 'https://sbmr.netlify.app/',
                    img: 'https://i.ibb.co/HtjPr6s/37.png',
                    code: 'https://github.com/volovlikovevgeny/SmartBrain-Front-Firebase',
                    live: 'https://sbmr.netlify.app/'
                },
                {
                    id: 4,
                    dev: 'Frontend Developing',
                    text: 'Frontend SPA web-site, In order to create I`ve used React framework, It`s fully reponsible and simple to use',
                    url: 'https://mavicpro.netlify.app/',
                    img: 'https://i.ibb.co/z4kS3vd/Mavic.png',
                    code: 'https://github.com/volovlikovevgeny/Mavic-Pro',
                    live: 'https://mavicpro.netlify.app/'
                },
            ]
        }
    }

    render() {
        return (


            <section className='projects' id='projects'>
                <div className='container'>
                    <h2 className='title'>Projects</h2>
                    <div className='serv-content'>
                        {
                            this.state.projects.map(item => (
                                <div key={item.id} className='card' style={{ height: '430px' }}>
                                    <div className='box' style={{ height: '360px' }} >
                                        <i className='fas fa-code'></i>
                                        <div className='text'>{item.dev}</div>
                                        <p>{item.text}</p>
                                        <a href={item.url} >
                                            <img src={item.img} alt="img" />
                                        </a>
                                        <div className='box-btn'>
                                            <a href={item.code}>Code</a>
                                            <a href={item.live}>Live </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;
