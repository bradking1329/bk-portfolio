import type { NextPage } from 'next'
import Head from "next/head"
import { FortnitePage } from '../../../libs/projects/fortnite/fortnite'

const Projects: NextPage = () => {
    return (
      <div>
        <Head>
          <title>Brad King</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <FortnitePage />
        </div>
    )
  }
  
  export default Projects