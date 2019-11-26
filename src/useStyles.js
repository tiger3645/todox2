import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxHeight: "70vh"
  },
  list: {
    width: "100%",
    maxWidth: 360,
    position: "relative",
    overflow: "auto"
  },
  button: {
    margin: theme.spacing(1),
    alignSelf: "flex-end"
  },
  title: {
    maxHeight: "30vh",
    marginBottom: "1rem",
    color: "#51A4FB"
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
}));

export default useStyles;
