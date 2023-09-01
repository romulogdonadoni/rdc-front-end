import ProductSlider from "@/components/product/ProductSlider";
import { ProductStyle } from "@/styles/pages/product/ProductStyle";
import Image from "next/image";

export default function Product() {
  return (
    <>
      <ProductStyle>
        <div className="path">
          <p>Home - Sala de Estar - Home - Home Equilibrio Friso JCM Movelaria</p>
        </div>
        <div className="title">
          <h2>Home Equilíbrio Friso JCM Movelaria</h2>
        </div>
        <div className="display">
          <div className="slider-product-options">
            <Image src={"https://reidecasa.com.br/uploads/produto_fotos/3_20230331151407_rackspazionaturalleoff.jpg"} width={80} height={80} alt="" />
            <Image src={"https://reidecasa.com.br/uploads/produto_fotos/3_20230331151407_rackspazionaturalleoff.jpg"} width={80} height={80} alt="" />
            <Image src={"https://reidecasa.com.br/uploads/produto_fotos/3_20230331151407_rackspazionaturalleoff.jpg"} width={80} height={80} alt="" />
          </div>
          <div>
            <Image
              src={"https://reidecasa.com.br/uploads/produto_fotos/20230331151407_rackspazionaturalleplatinum.jpg"}
              width={512}
              height={512}
              alt=""
            />
          </div>
          <div className="side">
            <div>
              <p>Marca: JCM Movelaria</p>
              <p>Código no site: 1448878</p>
              <p>SKU: 1</p>
            </div>
            <div>
              <p>Cor:</p>
              <Image
                src={"https://reidecasa.com.br/uploads/produto_fotos/3_20230331151407_rackspazionaturalleoff.jpg"}
                width={80}
                height={80}
                alt=""
              />
              <Image
                src={"https://reidecasa.com.br/uploads/produto_fotos/3_20230331151407_rackspazionaturalleoff.jpg"}
                width={80}
                height={80}
                alt=""
              />
              <Image
                src={"https://reidecasa.com.br/uploads/produto_fotos/3_20230331151407_rackspazionaturalleoff.jpg"}
                width={80}
                height={80}
                alt=""
              />
            </div>
            <div>
              <p>R$ 1.200,00</p>
              <p>R$ 840,00</p>
              <p>8x de R$ 105,00 sem juros ou R$ 798,00 à vista no boleto ou pix</p>
              <button>Comprar</button>
            </div>
            <div>content</div>
            <div>
              <p>à vista R$ 840,00</p>
              <p>2x de R$ 420,00 sem juros</p>
              <p>3x de R$ 280,00 sem juros</p>
              <p>4x de R$ 210,00 sem juros</p>
              <p>5x de R$ 168,00 sem juros</p>
              <p>6x de R$ 140,00 sem juros</p>
              <p>7x de R$ 120,00 sem juros</p>
              <p>8x de R$ 105,00 sem juros</p>
            </div>
          </div>
        </div>
        <div className="caption">
          <p>Estante Home para TV até 65 Polegadas Equilíbrio Liso</p>
          <p>Dimensões:</p>
          <p>Altura: 190 cm</p>
          <p>Largura: 200 cm</p>
          <p>Profundidade: 42 cm</p>
          <p>Características:</p>
          <p>ATENÇÃO PRODUTO EM MDP:</p>
          <p>Portas Com Dobradiça De Preção:</p>
          <p>Possui Molduras e Telas Decorativas: Sim Nas Portas</p>
          <p>Possui Pé Metálico Em Detalhe: Sim</p>
          <p>Possui Espaço Para TV: 1600mm x 1090mm (LXA), Para TV de Até 65 Polegadas</p>
          <p>Acompanha Suporte Para TV: Sim</p>
          <p>Necessita de Montagem: Sim</p>
        </div>
        <div className="caption">
          <p>Estante Home para TV até 65 Polegadas Equilíbrio Liso</p>
          <p>Dimensões:</p>
          <p>Altura: 190 cm</p>
          <p>Largura: 200 cm</p>
          <p>Profundidade: 42 cm</p>
          <p>Características:</p>
          <p>ATENÇÃO PRODUTO EM MDP:</p>
          <p>Portas Com Dobradiça De Preção:</p>
          <p>Possui Molduras e Telas Decorativas: Sim Nas Portas</p>
          <p>Possui Pé Metálico Em Detalhe: Sim</p>
          <p>Possui Espaço Para TV: 1600mm x 1090mm (LXA), Para TV de Até 65 Polegadas</p>
          <p>Acompanha Suporte Para TV: Sim</p>
          <p>Necessita de Montagem: Sim</p>
        </div>
        <div className="caption">
          <p>Estante Home para TV até 65 Polegadas Equilíbrio Liso</p>
          <p>Dimensões:</p>
          <p>Altura: 190 cm</p>
          <p>Largura: 200 cm</p>
          <p>Profundidade: 42 cm</p>
          <p>Características:</p>
          <p>ATENÇÃO PRODUTO EM MDP:</p>
          <p>Portas Com Dobradiça De Preção:</p>
          <p>Possui Molduras e Telas Decorativas: Sim Nas Portas</p>
          <p>Possui Pé Metálico Em Detalhe: Sim</p>
          <p>Possui Espaço Para TV: 1600mm x 1090mm (LXA), Para TV de Até 65 Polegadas</p>
          <p>Acompanha Suporte Para TV: Sim</p>
          <p>Necessita de Montagem: Sim</p>
        </div>
      </ProductStyle>
      <ProductSlider />
    </>
  );
}
