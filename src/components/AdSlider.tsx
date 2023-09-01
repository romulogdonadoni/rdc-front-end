import Image from "next/image";
import megasaldao from "@/assets/ad/megasaldao.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AdSliderStyle } from "@/styles/components/AdSliderStyle";

export default function AdSlider() {
  return (
    <AdSliderStyle>
      <Image src={megasaldao.src} width={1920} height={430} quality={100} alt="" />
      <div>
        <div>
          <Icon icon="tabler:truck-delivery" color="#f2af02" width="32" height="32" />
          <p className="title">Entrega imediata</p>
          <p className="sub-title">Receba em sua casa</p>
        </div>
        <div>
          <Icon icon="ci:house-01" color="#f2af02" width="32" height="32" />
          <p className="title">Tudo Para a Sua Casa</p>
          <p className="sub-title">Produtos de qualidade</p>
        </div>
        <div>
          <Icon icon="mdi:security-account-outline" color="#f2af02" width="32" height="32" />
          <p className="title">Compre Com Segurança</p>
          <p className="sub-title">Seus Dados Protegidos</p>
        </div>
        <div>
          <Icon icon="tabler:credit-card" color="#f2af02" width="32" height="32" />
          <p className="title">12x Sem Juros</p>
          <p className="sub-title">Em Todos Os Cartões</p>
        </div>
      </div>
    </AdSliderStyle>
  );
}
