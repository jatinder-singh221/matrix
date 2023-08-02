import Image from 'next/image'
import { Context } from '../pages/_app'
import { useContext } from 'react'
import styles from  '../styles/Navbar.module.css'

export default function Navbar() {
    const data = useContext(Context)
  return (
    <nav className={styles.nav}>
        <div className={styles.flex}>
            <Image src='/Matrix.svg' width={60} height={60} alt='logo' />
            <p className={styles.name}>MatrixIcons</p>
        </div>
        <select name="version" id="version" className={styles.select}>
            {data.icons.map((version, index) => {
                return <option key={index} value={version}>{version}</option>
            })}
        </select>
    </nav>
  )
}
