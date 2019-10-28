import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Container,
  TextField,
  List,
  ListItem,
  Button
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  list: {
    width: "100%",
    maxWidth: 360,
    position: "relative",
    overflow: "auto",
    maxHeight: "50vh"
  },
  button: {
    margin: theme.spacing(1),
    alignSelf: "flex-end"
  },
  title: {
    maxHeight: "30vh",
    marginBottom: "1rem"
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
}));

function App() {
  const classes = useStyles();
  const [items, setItems] = useState(itemsArray);

  const newId = () => {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };

  const addItem = text => {
    setItems([
      ...items,
      {
        id: newId(),
        text
      }
    ]);
  };

  const removeItem = id => {
    setItems(items.filter(item => item.id != id));
  };

  localStorage.setItem("items", JSON.stringify(items));

  return (
    <Container>
      <Typography variant="h1" align="center" className={classes.title}>
        ToDoX2
      </Typography>
      <Container className={classes.container}>
        <TextField
          type="text"
          placeholder="New Item"
          onKeyPress={e => {
            if (e.charCode === 13) {
              e.preventDefault();
              addItem(e.target.value);
              e.target.value = "";
            }
          }}
        />
        <List className={classes.list}>
          {items.map(item => (
            <ListItem key={item.id} divider={true} className={classes.item}>
              <Typography>{item.text}</Typography>
              <Button
                className={classes.button}
                onClick={e => {
                  removeItem(item.id);
                }}
              >
                <DeleteIcon />
              </Button>
            </ListItem>
          ))}
        </List>
      </Container>
    </Container>
  );
}

export default App;
