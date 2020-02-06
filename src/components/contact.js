import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import picture from '../images/profile-pic.jpg';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Hemachandra Ghanta</h2>
                        <img src={picture}
                            alt="avatar"
                            style={{height: '250px'}}/>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            I am an enthusiastic meh......
                        </p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                                     (234) 567-0882
                                </ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                     ghemachandra94@gmail.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"></i>
                                     Tobe updated ..
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;