import { styled } from "..";

export const NavContainerStyle = styled("nav", {
  display: "flex",
  borderTop: "4px solid $orange",
  width: "60vw",
  ">div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    width: "100%",
    padding: "20px",
    ".contatc": {
      display: "flex",
      color: "$gray800",
      borderBottom: "1px solid $gray500",
      height: 42,
      justifyContent: "flex-start",
      alignItems: "center",
      gap: "10px",
    },

    ".search": {
      display: "flex",
      flex: 1,
      alignItems: "center",
    },
    ".assistance": {
      display: "flex",
      borderBottom: "1px solid $gray500",
      height: 42,
      color: "$gray800",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "10px",
      ">div": {
        display: "flex",
        gap: "10px",
      },
    },
    ".account": {
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px",
      ">div": {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        span: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "$sm",
          color: "$white",
          background: "$black",
          borderRadius: "100%",
          padding: "4px",
          height: "16px",
          width: "16px",
          position: "absolute",
          transform: "translate(25px, -15px)",
        },
      },
      svg: {
        color: "$orange",
      },
    },
  },

  svg: {
    color: "$gray800",
  },
  input: {
    height: 44,
    outline: "none",
    padding: 15,
    border: "1px solid $gray500",
    borderRadius: "22px",
    width: "100%",
  },
});
