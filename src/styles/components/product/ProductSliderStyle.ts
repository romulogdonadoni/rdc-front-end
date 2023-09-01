import { styled } from "@/styles";

export const ProductSliderStyle = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px 40px",
  gap: "40px",
  width: "60vw",
  variants: {
    color: {
      orange: {
        backgroundImage: "url(https://reidecasa.com.br/loja/estilos/estilo_imgs/571/img08.jpg)",
        backgroundAttachment: "fixed",
        h1: { color: "$white" },
      },
      none: { backgroundColor: "none" },
    },
  },
  ">div": {
    minWidth: "1084px",
    padding: "20px 0px",
  },
});
