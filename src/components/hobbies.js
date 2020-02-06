import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';

class Hobbies extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="hobbies-grid">
                    <Card shadow={5} style={{minWidth:'400px', margin:'auto'}}>
                        <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://gra-afch.com/content/uploads/GUS_1041.jpg) center / cover'}}>
                            Arduino Project #1
                        </CardTitle>
                        <CardText>
                            Reverse sensors
                        </CardText>
                        <CardActions border style={{textAlign: 'center'}}>
                            <Button colored>GitHub</Button>
                            <Button colored>Demo</Button>
                            <Button colored>Setup</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth:'400px', margin:'auto'}}>
                        <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://gra-afch.com/content/uploads/GUS_1041.jpg) center / cover'}}>
                            Arduino Project #2
                        </CardTitle>
                        <CardText>
                            Reverse sensors
                        </CardText>
                        <CardActions border style={{textAlign: 'center'}}>
                            <Button colored>GitHub</Button>
                            <Button colored>Demo</Button>
                            <Button colored>Setup</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth:'400px', margin:'auto'}}>
                        <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://gra-afch.com/content/uploads/GUS_1041.jpg) center / cover'}}>
                            Arduino Project #3
                        </CardTitle>
                        <CardText>
                            Reverse sensors
                        </CardText>
                        <CardActions border style={{textAlign: 'center'}}>
                            <Button colored>GitHub</Button>
                            <Button colored>Demo</Button>
                            <Button colored>Setup</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
            </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div><h1 style={{color: '#F2E51C'}}>In Progress!</h1></div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div><h1 style={{color: '#F2E51C'}}>In Progress!</h1></div>
            )
        }
    }

    

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>UNO R3</Tab>
                    <Tab>Drone-captures</Tab>
                    <Tab>Outdoor-Activities</Tab>
                </Tabs>
                
                <section>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Hobbies;