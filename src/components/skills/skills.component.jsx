import React from 'react';
import './skills.styles.scss';

class Skills extends React.Component {
    constructor() {
        super()

        this.state = {
            skills: [
                {
                    skill: 'HTML',
                    procent: '95%',
                },
                {
                    skill: 'CSS',
                    procent: '92%',
                },

                {
                    skill: 'JS',
                    procent: '90%',
                },
                {
                    skill: 'REACT',
                    procent: '88%',
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
                                <div className='bars'>
                                    <div className='info'>
                                        <span>{skill.skill}</span>
                                        <span>{skill.procent}</span>
                                    </div>
                                    <div className='line html'></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills;