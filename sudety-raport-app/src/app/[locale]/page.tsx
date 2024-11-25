// import Image from "next/image";
import './globals.css';
import { useTranslations } from 'next-intl';
// import { Link } from '@/i18n/routing';

export default function Home() {
  // in client side use React.use()
  const t = useTranslations("HomePage");

  return (
    <main className="pt-2 min-h-screen mx-8 my-2">
      <h1>{ t('title') }</h1>
    </main>
  );
}
