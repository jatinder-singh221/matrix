import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../../../components/Navbar";
import styles from "../../../styles/Icons.1.0.0.module.css";
import data from "../../../data/icons/1.0.0";
import Footer from "../../../components/Footer";

export default function index() {
  const [IconsSet, setIconsSet] = useState(
    data.sort((a, b) => a.name.localeCompare(b.name))
  );

  const [message, setmessage] = useState()
  const [filter, setfilter] = useState('All')
  const [value, setvalue] = useState()

  const CopyToClipBoard = (type, data, name) => {
    switch (type) {
      case 'Svg':
        navigator.clipboard.writeText(data)
        break;
      case 'React Jsx':
        const jsx = `
          import React from 'react'
          export default function ${name}() {
            <div>
              ${data}
            </div>
          }
        `
        navigator.clipboard.writeText(jsx)
        break;
      case 'Native Jsx':
        const Njsx = `
          import { View } from 'react-native'
          import Svg, { Path } from "react-native-svg";
          export default function ${name}() {
            <View>
              ${data}
            </View>
          }
        `
        navigator.clipboard.writeText(Njsx)
        break;
      default:
        break;
    }
    setmessage(`${type} is copied`)
    setTimeout(() => {
      setmessage()
    }, 2000);
  }

  const Filter = (type) => {
    switch (type) {
      case 'All':
        setIconsSet(data.sort((a, b) => a.name.localeCompare(b.name)))
        break;
      case 'Solid':
        const iconsolid = data.filter(el => el.name.includes('Solid'))
        setIconsSet(iconsolid)
        break;
      case 'Outline':
        const iconoutline = data.filter(el => el.name.includes('Outline'))
        setIconsSet(iconoutline)
        break;
      default:
        break;
    }
    setfilter(type)
  }

  const search = (text) => {
    if (text) {
      const SearchedItems = data.filter(el => el.name.toLowerCase().includes(text))
      setIconsSet(SearchedItems)
    }
    else {
      setIconsSet(data.sort((a, b) => a.name.localeCompare(b.name)))
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <p className={styles.heroHeading}>
          Impeccably designed and handcrafted icons, showcasing craftsmanship.
        </p>
        <ul className={styles.assests}>
          <li>225 Icons</li>
          <li>MIT License</li>
          <li>React/Native</li>
        </ul>
        <form className={styles.heroForm}>
          <label htmlFor="search" className={styles.label}>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search icons here"
              className={styles.input}
              value={value}
              onChange={(e) => search(e.target.value)}
            />
          </label>
        </form>
        <section className={styles.Links}>
            <a href={"https://www.figma.com/community/file/1268549087432176509/matrix-icons"} className={styles.Anchors} target="_blank" rel="noopener noreferrer">
                <Image src="/figma.svg" width={30} height={30} alt="figma" />
                <p>Get Figma File</p>
            </a>
          <a href={"https://github.com/jatinder-singh221/matrix-icons-react"} className={styles.Anchors} target="_blank" rel="noopener noreferrer">
            <Image src="/github.svg" width={30} height={30} alt="github" />
            <p>React Docs</p>
          </a>
          <Link href={"https://github.com/jatinder-singh221/matrix-icons-react-native"} className={styles.Anchors} target="_blank" rel="noopener noreferrer">
            <Image src="/github.svg" width={30} height={30} alt="nativegithub" />
            <p>React-native Docs</p>
          </Link>
        </section>
        {!message ? <section className={styles.fixedLink}>
          <button className={styles.buttons} aria-current={filter === 'All'} onClick={() => Filter('All')}>All</button>
          <button className={styles.buttons} aria-current={filter === 'Solid'} onClick={() => Filter('Solid')}>Solid</button>
          <button className={styles.buttons} aria-current={filter === 'Outline'} onClick={() => Filter('Outline')}>Outline</button>
        </section> :
          <div className={styles.copy} >{message}</div>}
        <ul className={styles.grid}>
          {IconsSet.map((item, index) => {
            return (
              <li key={index}>
                <div dangerouslySetInnerHTML={{ __html: item.svg }} />
                <p>{item.name}</p>
                <section className={styles.hover}>
                  <button onClick={() => CopyToClipBoard('Svg', item.svg)}>Copy Svg</button>
                  <button onClick={() => CopyToClipBoard('React Jsx', item.svg, item.name)}>Copy React jsx</button>
                  <button onClick={() => CopyToClipBoard('Native Jsx', item.svg, item.name)}>Copy Native jsx</button>
                </section>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
}
