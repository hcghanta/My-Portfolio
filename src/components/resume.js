import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://www.shareicon.net/data/128x128/2016/08/18/813775_man_512x512.png"
                                alt="avatar"
                                style={{height: '200px'}}
                                />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Hemachandra Ghanta</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>iafvyucebg8funaiusodfcwuebcfhin
                            sudbgvsiudfgbuysbufbsidhfbidusgfniusdbyisnifv
                            gsudfgnuksgdbtfugnsidlfukdgnfishdfyugdnfhgudni
                            sdfuobgrufn</p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                            <h5> Address</h5>
                            <p>1 Hacker Way Menlo Park, 345544</p>
                            <h5>Phone</h5>
                            <p>(234) 567-0882</p>
                            <h5>EMail</h5>
                            <p>ghemachandra94@gmail.com</p>
                            <h5>Web</h5>
                            <p>mywebsite.com</p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        <Education
                            startYear={2011}
                            endYear={2015}
                            schoolName="Gandhi Institute of Technology and Management"
                            schoolDescription="Deemed university with all thops in the college!"
                        />
                        <Education
                            startYear={2017}
                            endYear={2019}
                            schoolName="University of Nebraska Omaha"
                            schoolDescription="Another thop university!!!"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience
                            startYear={2015}
                            endYear={2017}
                            jobName="Application Developer"
                            jobDescription="using thop knowledge to become more thop and thops!!!!:D"
                        />
                        <Experience
                            startYear={208}
                            endYear={2018}
                            jobName="Research Assistant"
                            jobDescription="Catia AutoCAD blah blah..."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Skills</h2>
                        <Skills
                            skill="JavaScript"
                            progress={100}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={50}
                        />
                        <Skills
                            skill="React"
                            progress={40}
                        />
                        <Skills
                            skill="Python"
                            progress={30}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;