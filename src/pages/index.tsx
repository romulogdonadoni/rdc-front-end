import AdSlider from "@/components/AdSlider";
import ProductSlider from "@/components/product/ProductSlider";
import { GetStaticProps } from "next";
import { gql } from "@apollo/client";
import { client } from "@/lib/apollo";

const PRODUCTS_QUERY = gql`
  query {
    products(first: 10) {
      edges {
        node {
          id
          title
          updatedAt
          createdAt
          description
          images(first: 10) {
            nodes {
              src
              id
            }
          }
          priceRange {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
  
`;
export default function Home({ products }: any) {
  return (
    <>
      <AdSlider />
      <ProductSlider products={products} bgcolor="orange" description="ÚLTIMAS NOVIDADES REI DE CASA" />
      <ProductSlider products={products} description="QUARTO" />
      <ProductSlider products={products} description="SALA DE ESTAR" />
      <ProductSlider products={products} description="COZINHA" />
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: PRODUCTS_QUERY,
  });
  const products = data?.products?.edges || [];
  return { props: { products } };
};
