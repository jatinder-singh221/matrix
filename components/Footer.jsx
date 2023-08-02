import Image from "next/image"
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.flex}>
            <Image src='/Matrix.svg' width={60} height={60} alt='logo' />
            <p className={styles.name}>MatrixIcons</p>
        </div>
        <p style={{ fontSize:'18px' }}>Made with Love by Jatinder singh</p>
    </footer>
  )
}
