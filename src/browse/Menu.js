import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: 'transparent',
    // borderRadius: 3,
    // border: 0,
    color: 'white',
    fontSize: "14px",
    '&:hover': {
      textDecorationLine: 'underline',
    },    
    // height: 48,
    // padding: '0 30px',
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
  ,
  label: {
    textTransform: 'capitalize',
  },
});

export default function NestedMenu({menu}) {

  const menu_item_style = {
    fontSize: "12px",
    color: "#111"  
  }  

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <div>
      <Button
      aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} 
          classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label, // class name, e.g. `classes-nesting-label-x`
          }}
      >
          {menu}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem style={menu_item_style} onClick={handleClose}>All</MenuItem>
        <MenuItem style={menu_item_style} onClick={handleClose}>North</MenuItem>
        <MenuItem style={menu_item_style} onClick={handleClose}>Central</MenuItem>
        <MenuItem style={menu_item_style} onClick={handleClose}>South</MenuItem>
      </Menu>
    </div>
  );
}