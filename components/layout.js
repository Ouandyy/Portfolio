import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <>
    <Head>
      <title>Andy Ou</title>
    </Head>
    <Nav />
      <main>{children}</main>
    <Footer />
    </>
  )
}

export default Layout