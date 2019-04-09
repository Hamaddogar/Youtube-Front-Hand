import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {Link}    from 'react-router-dom';



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
   width:'90vw',
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class  Home extends  React.Component {
    
vedioes=[
    {id:'Fjo20qYsXqc',discription:'vedio1'},
    {id:'kexuG-YcQFA',discription:'vedio2'},
    {id:'vWLcyFtni6U',discription:'vedio3'},
    {id:'Fjo20qYsXqc',discription:'vedio4'},
    {id:'m3iMU6q-zBc',discription:'vedio5'},
    {id:'kexuG-YcQFA',discription:'vedio6'},
    {id:'kexuG-YcQFA',discription:'vedio7'},
    
    

    
    

 ]
  getThumb(vedio)
  {
      return  'http://img.youtube.com/vi/'+vedio+'/0.jpg';
  }
    render(){
        const { classes } = this.props;
  

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
    
        {this.vedioes.map(tile => (
          <GridListTile key={tile.img} cols={0.5}>
           
          <Link to={'/player/'+tile.id}>
          <img src={this.getThumb(tile.id)} alt={tile.title} />
              <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.discription}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
            </Link>
          </GridListTile>
        
        ))}
      </GridList>
    </div>
  );
}
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
