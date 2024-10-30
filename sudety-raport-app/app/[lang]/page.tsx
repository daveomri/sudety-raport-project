// import Image from "next/image";
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
    <main><h1>{ intl.some_text }</h1></main>
  );
}
