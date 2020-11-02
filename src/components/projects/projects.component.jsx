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
                    img: 'https://i.ibb.co/k8Sw1KL/img-1.png'
                },
                {
                    id: 2,
                    dev: 'Full-stack',
                    text: 'E-commerce website that was made with React, react-router, redux, reselect, sass, firebase, stripe api, hooks, styled-components.',
                    url: 'https://drgn.netlify.app/',
                    img: 'https://i.ibb.co/R9RPvvL/img-2.png',

                },
                {
                    id: 3,
                    dev: 'Full-Stack',
                    text: 'Frontend application in order to create I`ve used React and firebase, also thanks to the intellegance of api to create application',
                    url: 'https://sbmr.netlify.app/',
                    img: 'https://i.ibb.co/HtjPr6s/37.png'
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
                                <div key={item.id} className='card'>
                                    <div className='box'>
                                        <i className='fas fa-code'></i>
                                        <div className='text'>{item.dev}</div>
                                        <p>{item.text}</p>
                                        <a href={item.url} >
                                            <img src={item.img} alt="img" />
                                        </a>
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
