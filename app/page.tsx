import Image from 'next/image'
import styles from './page.module.css'
import luffy from '../public/Luffy Child.jpeg';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={luffy} priority loading="eager" alt={'Luffy'}/>
      <Link style={{marginTop: "10px"}} href="/route1">To route1</Link>
    </main>
  )
}
