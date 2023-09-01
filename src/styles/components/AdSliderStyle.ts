import { styled } from "..";

export const AdSliderStyle = styled("div", {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  img: {
    width: "100%",
    objectFit: "cover",
  },
  ">div": {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    borderBottom: "1px solid $gray500",
    borderTop: "4px solid $orange",
    width: "60vw",

    ">div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px",
      ".title": {
        fontSize: "16px",
      },
      ".sub-title": {
        fontSize: "12px",
      },
    },
  },
});
