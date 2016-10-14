import React from 'react';

import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import $ from 'jquery';

import FlatButton from 'material-ui/RaisedButton';

import {yellowA700, orangeA700, cyan500} from 'material-ui/styles/colors';

let SAMPLE_DATA = [
  {
    avatarClassName: "fa fa-trophy",
    avatarSrc: null, // for photos
    title: "You've joined the Goodful network!",
    actionType: "Achievement",
    body: "Check out the menu",
    actionButtons: [
      { label: "Dismiss", action: 'dismiss'}
    ]
  },
  {
    avatarClassName: "",
    avatarSrc: "https://s3.amazonaws.com/goodful/Screen+Shot+2016-10-13+at+10.42.48+PM.png", // for photos
    title: "You're connectied with Agent Lilliana",
    actionType: "Notice",
    body: "If you'd like to communicate with your agent, you can opt-in in your Agent Settings. This can be turned off later",
    actionButtons: [
      { label: "Agent Settings", primary: true, route: "/settings" },
      { label: "Dismiss", action: 'dismiss'}
    ]
  }
];


class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  toggleDrawer = () => this.setState({open: !this.state.open});

  dismissById = (id) => {
    $('#' + id).fadeOut(200);
  };
  goToRoute = (route) => {
    document.location.hash = "#" + route;
  }
  render() { return (

    <div id="sc-home">
      <AppBar iconClassNameLeft="fa fa-bars"
              onLeftIconButtonTouchTap={this.toggleDrawer}
              title={<span className="interactive"><i className="fa fa-smile-o" aria-hidden="true"></i> Goodful</span>}
              iconElementRight={<div><i className="fa fa-bars"></i></div>}
      />
      <Drawer
        docked={false}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}
      >
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
      <div className="actionItems">
        <div className="actionItemsHeader"></div>
        <div className="actionItemsContainer">

          {SAMPLE_DATA.map( (item, k) => {
            return (
              <Card className="mui-card actionItem" key={k} id={"actionItem" + k}>
                <CardHeader
                  avatar={<Avatar className={item.avatarClassName} src={item.avatarSrc} backgroundColor={cyan500} />}
                  title={item.title}
                  subtitle={item.actionType}
                />
                {item.body && <CardText>{item.body}</CardText>}
                <CardActions>
                  {item.actionButtons.map((actionButton, m) => {
                    let action = () => null;
                    if(actionButton.action === 'dismiss') action = () => this.dismissById("actionItem" + k);
                    if(actionButton.route) action = () => this.goToRoute(actionButton.route);

                    return (
                      <FlatButton key={m}
                        primary={actionButton.primary}
                        label={actionButton.label}
                        onClick={action}
                      />
                    )
                  })}
                </CardActions>
              </Card>
            )
          })}
          <div className="actionItemsHeader"><h4>From your friends</h4></div>
        </div>
      </div>
    </div>
  )
  }

}

export default Home;