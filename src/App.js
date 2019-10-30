import React, { useState } from "react";
import { Typography, Container, TextField, List } from "@material-ui/core";
import Item from "./Item";
import useStyles from "./useStyles";

let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

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
    setItems(items.filter(item => item.id !== id));
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
            <Item item={item} removeItem={removeItem} key={item.id} />
          ))}
        </List>
      </Container>
    </Container>
  );
}

export default App;
