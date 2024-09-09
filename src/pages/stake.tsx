import Head from 'next/head';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Stake = () => {
  const { t } = useTranslation();
 
  return (
    <div className='wrapper'>
      <Head>
        <title>Web3Exchange.eth | Secure, Decentralized Crypto Trading Platform</title>
        <meta
          content="Web3Exchange.eth | Secure, Decentralized Crypto Trading Platform"
          name="description"
        />
      </Head>
      <main className="container m-auto text-center h-screen w-screen">
        <h1 className='text-6xl text-black lg:mt-[60px] dark:text-white '>Stake</h1>
      </main>
        
    </div>
  );
};

export async function getStaticProps(context :any) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}

export default Stake;
 