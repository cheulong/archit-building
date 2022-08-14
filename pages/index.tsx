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
    </div>
  );
};

export default Home;
