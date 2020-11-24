import React from 'react';
import { connect } from 'react-redux';
import './projects.styles.scss';

const Projects = ({ projects }) => {
    return (
        <section className='projects' id='projects'>
            <div className='container'>
                <h2 className='title'>Projects</h2>
                <div className='serv-content'>
                    {
                        projects.map(item => (
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

const mapStateToProps = state => {
    console.log('Project:Iam being called');
    return (
        {
            projects: state.projects.projects
        }
    )
}

export default connect(mapStateToProps)(Projects);
