import React from 'react';
import './skills.styles.scss';

class Skills extends React.Component {
    constructor() {
        super()

        this.state = {
            skills: [
                {
                    id: 1,
                    skill: 'HTML',
                    procent: '95%',
                    className: 'html'
                },
                {
                    id: 2,
                    skill: 'CSS/SASS',
                    procent: '92%',
                    className: 'css'
                },

                {
                    id: 3,
                    skill: 'JS',
                    procent: '90%',
                    className: 'js'
                },
                {
                    id: 4,
                    skill: 'REACT',
                    procent: '88%',
                    className: 'react'
                },
                {
                    id: 5,
                    skill: 'REDUX/RESELECT',
                    procent: '85%',
                    className: 'redux'
                },
                {
                    id: 6,
                    skill: 'NODE/EXPRESS',
                    procent: '77%',
                    className: 'node'
                },
                {
                    id: 6,
                    skill: 'POSTGRES/SQL',
                    procent: '70%',
                    className: 'postgres'
                },
                {
                    id: 7,
                    skill: 'GIT',
                    procent: '93%',
                    className: 'git'
                },
            ]
        }
    }

    render() {
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
                        </div>
                        <div className='column right'>
                            {this.state.skills.map((skill) => (
                                <div className='bars' key={skill.id} >
                                    <div className='info'>
                                        <span>{skill.skill}</span>
                                        <span>{skill.procent}</span>
                                    </div>
                                    <div className={`line ${skill.className}`}   ></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default Skills;