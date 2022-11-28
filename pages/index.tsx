import type { NextPage } from 'next';
import { GlobalHead } from '../libs/core/global-head/global-head';
import { HomePage } from '../libs/home/home';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <GlobalHead
        title="Home"
        description="Portfolio site for Brad King - Software Engineer."
      />
      <HomePage />
    </div>
  );
};

export default Home;
