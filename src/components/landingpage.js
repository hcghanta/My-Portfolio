import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    //no need to constructor as this class is stateless
    render() {
        return(
            <div style={{width: '100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/hipster-beard-man-white-512.png" 
                            alt="avatar" 
                            className="avatar-img" />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>

                            <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

                            <div className="social-links">
                                <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-gitlab" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;