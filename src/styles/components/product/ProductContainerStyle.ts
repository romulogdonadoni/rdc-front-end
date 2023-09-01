import { styled } from "@/styles";

export const ProductContainerStyle = styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent: "space-between",
  maxWidth: 256,
  minWidth: 256,
  height: 520,
  borderRadius: 16,
  boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.10)",
  cursor: "pointer",
  background: "$white",
  img: {
    objectFit: "contain",
    borderRadius: 16,
  },

  ">div >div": {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    alignItems: "center",
    gap: "20px",
    p: {
      textAlign: "center",
    },
    ".description": {
      color: "$gray700",
    },

    ".line": {
      textDecoration: "line-through",
    },
    ".price": {
      fontSize: "$lg",
      fontWeight: "bold",
    },
  },

  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    background: "$orange",
    border: "none",
    width: "100%",
    height: "60px",
    color: "$white",
    fontSize: "$mg",
    visibility: "hidden",
    transform: "translate(0px, 60px)",
    opacity: 0,
    cursor: "pointer",
    transition: "all 0.2s ease-out",
  },
  "button:hover": {
    filter: "brightness(1.1)",
  },
  "&:hover button": {
    visibility: "visible",
    transform: "translate(0px, 0px)",
    opacity: 100,
    transition: "all 0.2s ease-out",
  },
});
