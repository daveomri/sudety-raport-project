// import Image from "next/image";
import { Header } from './components/Header';
import { Locale, getDictionary } from './dictionaries';
import './globals.css';

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function Home({ params }: Readonly<Props>) {
  // in client side use React.use()
  const { lang } = await params;
  const intl = await getDictionary(lang);

  return (
    <>
      <Header />
      <main>
        <h1>{ intl.some_text }</h1>
      </main>
    </>
  );
}
