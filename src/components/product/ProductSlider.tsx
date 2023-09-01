import ProductContainer from "./ProductContainer";
import { ProductSliderStyle } from "@/styles/components/product/ProductSliderStyle";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface ProductSliderProps {
  description?: string;
  bgcolor?: string;
  products?: any;
}

export default function ProductSlider({ products, description, bgcolor }: ProductSliderProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: "auto",
      spacing: 20,
    },
    loop: true,
  });
  return (
    <ProductSliderStyle color={bgcolor == "orange" ? "orange" : "none"}>
      <h1>{description}</h1>
      <div ref={sliderRef} className="keen-slider">
        {products?.map(
          ({ node }: any) =>
            node.images.nodes[0]?.src && (
              <ProductContainer
                id={node.id}
                src={node.images.nodes[0].src}
                maxprice={node.priceRange.maxVariantPrice.amount}
                minprice={node.priceRange.minVariantPrice.amount}
                title={node.title}
                key={node.id}
              />
            )
        )}
      </div>
    </ProductSliderStyle>
  );
}
