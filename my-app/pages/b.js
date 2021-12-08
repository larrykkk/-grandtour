import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Posts({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        {/* <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        論壇 
      </main>
    </div>
  )
}

export default Posts