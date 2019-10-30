import { makeStyles } from "@material-ui/core/styles";

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

export default useStyles;
