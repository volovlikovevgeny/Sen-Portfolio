import React from 'react';
import { connect } from 'react-redux';
import { selectSkillItem } from '../../redux/skills/skills.selectors';
import './skills.styles.scss';


const Skills = ({ mySkills }) => {
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
                        {mySkills.map((skill) => (
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


const mapStateToProps = state => {
    console.log('Skills:I am being called');
    return {
        mySkills: selectSkillItem(state)
    }
}

export default connect(mapStateToProps)(Skills);