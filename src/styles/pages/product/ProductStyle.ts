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
    justifyContent: "space-between",
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
    ">div": {
      height: "100%",
      border: "1px solid $gray500",
      padding: "20px"
    },
  },
  ".caption": {
    padding: "20px",
    border: "1px solid $gray500",
  },
});
