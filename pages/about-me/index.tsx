import type { NextPage } from 'next'
import Head from "next/head"
import { AboutMe } from "../../libs/about-me/about-me"

const AboutMePage: NextPage = () => {
    return (
      <div>
        <Head>
          <title>Brad King</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <AboutMe seeMoreVisible={false} />
        </div>
    )
  }
  
  export default AboutMePage