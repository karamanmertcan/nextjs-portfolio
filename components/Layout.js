import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { format } from 'date-fns';
import Copyright from './Copyright';

export default function Layout({ title, keywords, description, children }) {
  const todayDate = format(new Date(), 'dd LLLL yyyy');

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div>{children}</div>

      <Footer />
      <Copyright todayDate={todayDate} />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Mertcankaraman.com',
  keywords: 'development,coding,programming,mertcan,karaman,MERTCAN,Karaman,engineering,computer',
  description: 'Full Stack Developer and Engineer'
};
