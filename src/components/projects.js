import React, { Component } from 'react';
import  CheckBox  from './checkbox';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            skillTags: [
                {id:  1, value: "HTML", isChecked: false},
                {id:  2, value: "CSS", isChecked: false},
                {id:  3, value: "React", isChecked: false},
                {id:  4, value: "JavaScript", isChecked: false},
                {id:  5, value: "Python", isChecked: false},
                {id:  6, value: "Django", isChecked: false},
                {id:  7, value: ".NET", isChecked: false},
                {id:  8, value: "C#", isChecked: false},
                {id:  9, value: "Bootstrap", isChecked: false},
                {id:  10, value: "AI", isChecked: false},
            ]
        }
    }

    render() {
        return (
            <div className="projects-component">
                <h1> Check and Uncheck All Example </h1>
                <input type="checkbox"  value="checkedall" /> Check / Uncheck All
                    <ul>
                    {
                    this.state.skillTags.map((skill) => {
                        return (<CheckBox {...skill} />)
                    })
                    }
                    </ul>
            </div>
        );
    }
}

export default Projects;