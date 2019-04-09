import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Reply from '@material-ui/icons/Reply';
import Apps from '@material-ui/icons/Apps';
import Videocam from '@material-ui/icons/Videocam';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MoreIcon from '@material-ui/icons/MoreVert';

import { youtubelogo } from '../images/youtube-logo-png-transparent-image-5.png';
import '../css/add.css';
import Navbar from '../js/Navbar';
const styles = theme => ({
  list: {
    width: 250,
},
fullList: {
    width: 'auto',
},
  root: {
    width: '100%',

  },
  appbarcolor: {
    backgroundColor: 'white',
  },
  inputborderStyle: {
    boderColor: "red"
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  search: {
    position: 'relative',
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.Gray, 0.15),

    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 30,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'stroke',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'Black',
    width: '100%',
  },

  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 500,
    },
  },
  searchcolor: {
    color: "Gray",

  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {

    },
  },
});

class Header extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
};

toggleDrawer = (side, open) => () => {
    this.setState({
        [side]: open,
    });
};

  render() {
    const { classes } = this.props;

    const sideList = (
        <div className={classes.list}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const fullList = (
        <div className={classes.fullList}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const { anchorEl, mobileMoreAnchorEl } = this.state;
    // const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="silver">

            <Videocam />

          </IconButton>
          <p>Videocam</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="silver">

            <Apps />

          </IconButton>
          <p>Apps</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="silver">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="silver">

            <Reply />

          </IconButton>
          <p>Reply</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="silver">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="
        
        " className={classes.appbarcolor}>
          <Toolbar>
            <IconButton className={classes.menuButton} onClick={this.toggleDrawer('left', true)} color="silver" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>

            <img src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png" height="60" />
            <div className={classes.moviiy}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon className={classes.searchcolor} />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,

                  }}
                  className="boderstyle"
                />
              </div>
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>

              <IconButton color="silver">

                <Videocam />

              </IconButton>
              <IconButton color="silver">

                <Apps />

              </IconButton>
              <p>Apps</p>

              <IconButton color="silver">

                <NotificationsIcon />

              </IconButton>

              <IconButton color="silver">

                <Reply />

              </IconButton>


              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="silver"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="darkgray">
              <MoreIcon/>
                
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
                <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('top', false)}
                        onKeyDown={this.toggleDrawer('top', false)}
                    >
                        {fullList}
                    </div>
                </Drawer>
                <Drawer
                    anchor="bottom"
                    open={this.state.bottom}
                    onClose={this.toggleDrawer('bottom', false)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('bottom', false)}
                        onKeyDown={this.toggleDrawer('bottom', false)}
                    >
                        {fullList}
                    </div>
                </Drawer>
                <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('right', false)}
                        onKeyDown={this.toggleDrawer('right', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
      </div >
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
