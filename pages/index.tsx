import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar';
import BaseButton from '@/components/Button/BaseButton';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <button onClick={async () => await setLanguage('ja')}>
        {t('common:Japanese')}
      </button>
      <br />
      <button onClick={async () => await setLanguage('en')}>
        {t('common:English')}
      </button>
      <br />
      <button onClick={async () => await setLanguage('ko')}>
        {t('common:Korean')}
      </button>
      <h1 className={styles.title}>Hello world!</h1>
      <BaseButton />
    </div>
  );
};

export default Home;
