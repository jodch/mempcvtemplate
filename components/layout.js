import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import Navbar from './navbar/navbar';

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Navbar/>
      <main className={styles.main}>{children}</main>
    </div>
  )
}