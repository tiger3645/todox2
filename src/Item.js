import React from "react";
import useStyles from "./useStyles";
import { Typography, ListItem, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const Item = props => {
  const classes = useStyles();
  return (
    <ListItem
      divider={true}
      className={classes.item}
      style={{ justifyContent: "space-between" }}
    >
      <Typography>{props.item.text}</Typography>
      <Button
        className={classes.button}
        onClick={e => {
          props.removeItem(props.item.id);
        }}
      >
        <DeleteIcon />
      </Button>
    </ListItem>
  );
};

export default Item;
