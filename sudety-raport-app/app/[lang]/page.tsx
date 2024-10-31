// import Image from "next/image";
import { Header } from './components/Header';
import { Locale, getDictionary } from './dictionaries';
import './globals.css';

type Props = {
  params: Promise<{ lang: Locale }>;
};

const navBar = [
  { key: "rap_weekly" },
  { key: "rap_tale" },
  { key: "playlists" },
  { key: "bestof"},
  { key: "about_us"}
];

const translateNavBar = (translator: {[key: string]: string}) => {
  return navBar.map((item) => {
    return {...item, value: translator[item.key]};
  });
};


export default async function Home({ params }: Readonly<Props>) {
  // in client side use React.use()
  const { lang } = await params;
  const intl = await getDictionary(lang);

  return (
    <>
      <Header navBar={translateNavBar(intl)} />
      <main>
        <h1>{ intl.some_text }</h1>
      </main>
    </>
  );
}
