import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import { HomePage } from '../libs/home/home'
import { GlobalHead } from '../libs/core/global-head/global-head'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <GlobalHead title='Home' description='Portfolio site for Brad King - Software Engineer.' />
      <HomePage />
      </div>
  )
}

export default Home
