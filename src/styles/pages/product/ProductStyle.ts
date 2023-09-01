import { styled } from "@/styles";

export const ProductStyle = styled("main", {
  display: "flex",
  flexDirection: "column",
  padding: "0px 380px",
  gap: "40px",
  ".path": {
    padding: "20px",
    border: "1px solid $gray500",
  },
  ".title": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  ".display": {
    display: "flex",
    gap: "40px",
    justifyContent: "space-between",
    ">div": {
      img: {
        border: "1px solid $gray500",
      },
    },
  },
  ".slider-product-options": {
    display: "flex",
    flexDirection: "column",
  },
  ".side": {
    display: "flex",
    width: 356,
    flexDirection: "column",
    justifyContent: "space-between",
    ".colors": {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      ">div": {
        display: "flex",
        gap: "10px"
      },
    },
    ".buy": {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      ">div": {
        "p:nth-child(1)": {
          fontSize: "16px",
          textDecoration: "line-through",
        },
        "p:nth-child(2)": {
          fontSize: "20px",
          fontWeight: "bold",
        },
      },
      button: {
        border: "none",
        width: "100%",
        height: "42px",
        background: "$orange",
        color: "$white",
        cursor: "pointer",
      },
    },
    ">div": {
      height: "100%",
      border: "1px solid $gray500",
      padding: "20px",
    },
  },
  ".caption": {
    padding: "20px",
    border: "1px solid $gray500",
  },
});
