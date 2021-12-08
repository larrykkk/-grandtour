import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

function ActiveLink({ children, href }) {
  const router = useRouter()
  const style = {
    marginLeft: 10,
    marginRight: 10,
    color: router.asPath === href ? '#0070f3' : 'black',
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      <b>{children}</b>
    </a>
  )
}

// export default ActiveLink

export default function Layout() {
  const style = {
    display: 'flex',
    'justify-content': 'center'
  }
  return (
    <div className={styles.container} style={style}>
      <div>
        <img src="https://fakeimg.pl/1980x300/" width="100%" height="300px"/>
        <div style={style}>
          <ActiveLink href="/">
            首頁
          </ActiveLink>
          | 
          <ActiveLink href="/a">
            課程資訊
          </ActiveLink> 
          | 
          <ActiveLink href="/b">
            論壇
          </ActiveLink>
        </div>
        
      </div>
    </div>
  )
}