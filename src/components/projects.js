import React, { Component } from 'react';
import '../App.css';
import CheckBox from './Checkbox';
// import { Grid, Cell, Checkbox } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
          tags: [
            {id: 1, value: "Python", isChecked: false},
            {id: 2, value: "Django", isChecked: false},
            {id: 3, value: "C#", isChecked: false},
            {id: 4, value: ".NET", isChecked: false}
          ]
        }
      }
      
    handleAllChecked = (event) => {
        let tags = this.state.tags
        tags.forEach(tag => tag.isChecked = event.target.checked) 
        this.setState({tags: tags})
    }

    handleCheckChieldElement = (event) => {
        let tags = this.state.tags
        tags.forEach(tag => {
        if (tag.value === event.target.value)
            tag.isChecked =  event.target.checked
        })
        this.setState({tags: tags})
    }

    render() {
        return(
            <div className="Projects">
                <h1> Check and Uncheck All Example </h1>
                <input type="checkbox" onClick={this.handleAllChecked}  value="checkedall" /> Check / Uncheck All
                <ul>
                {
                    this.state.tags.map((tag) => {
                        return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...tag} />)
                    })
                }
                </ul>
            </div>
            // <div style={{width: '80%', margin: 'auto'}}>
            //     <Cell col={4}><Checkbox style={{margin: '20px'}} label="All" ripple defaultChecked /></Cell>
            //     <Cell col={4}><Checkbox label="" /></Cell>
            //     <Cell col={4}>4</Cell>

            //     <hr/>
            // </div>
        )
    }
}

export default Projects;
