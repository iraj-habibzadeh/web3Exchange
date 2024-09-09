import Head from "next/head";
import SwapBox from "../components/swapBox/swapBox";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// pages/index.js
const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="wrapper w-screen ">
      <Head>
        <title>
          Web3Exchange.eth | Secure, Decentralized Crypto Trading Platform
        </title>
        <meta 
          content="Web3Exchange.eth | Secure, Decentralized Crypto Trading Platform"
          name="description"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className="container m-auto text-center">
        <h1 className="text-6xl text-black lg:mt-[60px] dark:text-white ">
          {t("home-page.title-one")}
          <br className=""></br>
          {t("home-page.title-two")}
        </h1>
        <SwapBox />
      </main>
    </div>
  );
};

export async function getStaticProps(context: any) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default Home;
