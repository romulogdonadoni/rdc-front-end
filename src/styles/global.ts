import { globalCss } from ".";

export const globalStyle = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Maven Pro, sans-serif",
  },
  a: {
    textDecoration: "none",
  },
  "a:visited":{
    textDecoration: "none",
    color: "$black"

  },
  body: {
    color: "$black",
    backgroundColor: "$white",
    overflowX: "hidden", 
  },
});
