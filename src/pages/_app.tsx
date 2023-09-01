import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import NavContainer from "@/components/NavContainer";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { globalStyle } from "@/styles/global";
import { AppContainerStyle } from "@/styles/AppContainer";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "@/lib/apollo";
globalStyle();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Rei De Casa Móveis e Decoração</title>
      </Head>
      <AppContainerStyle>
        <NavContainer />
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </AppContainerStyle>
    </ApolloProvider>
  );
}

export default MyApp;
