import { ProductContainerStyle } from "@/styles/components/product/ProductContainerStyle";
import Image from "next/image";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

interface ProductContainerProps {
  id: string;
  src: string;
  maxprice: string;
  minprice: string;
  title: string;
}

export default function ProductContainer({ id, src, maxprice, minprice, title }: ProductContainerProps) {
  id = id.split("/Product/")[1];
  return (
    <Link href={`/product/${id}`}>
      <ProductContainerStyle className="keen-slider__slide number-slide1">
        <div>
          <Image src={src} height={256} width={256} alt="" quality={100} />
          <div>
            <div className="description">
              <p>{title}</p>
            </div>
            <div>
              <p className="line">R$ {maxprice}</p>
              <p className="price">R$ {minprice}</p>
              <p>8x de R$ 265,00 sem juros ou R$ 2.014,00 à vista no boleto ou pix</p>
            </div>
          </div>
        </div>
        <button>
          <Icon icon="mdi:cart-outline" color="white" width="24" height="24" />
          Comprar
        </button>
      </ProductContainerStyle>
    </Link>
  );
}
