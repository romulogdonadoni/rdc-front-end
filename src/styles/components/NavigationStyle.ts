import { styled } from "..";

export const NavigationStyle = styled("ul", {
  display: "flex",
  margin: "20px 0px",
  height: "44px",
  width: "60vw",
  justifyContent: "space-between",
  listStyle: "none",
  "li:hover": {
    color: "$orange",
    transition: "all 0.2s ease-in-out",
  },
  ">ul": {
    display: "flex",
    cursor: "pointer",
    ">li": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      padding: "10px",
      borderRadius: "8px",
      transition: "all 0.2s ease-in-out",
    },
    ">ul": {
      visibility: "hidden",
      transform: "translate(0px, 44px)",
      background: "$white",
      boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.10)",
      borderRadius: "8px",
      padding: "10px",
      listStyle: "none",
      position: "absolute",
      transition: "all 0.2s ease-in-out",
      opacity: 0,
      ">li": {
        padding: "10px",
        borderRadius: "8px",
      },
    },
  },
  ">ul:hover ul": {
    transition: "all 0.2s ease-in-out",
    opacity: 1,
    visibility: "visible",
  },
});
