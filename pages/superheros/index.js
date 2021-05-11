import styles from '../../styles/Superheros.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://akabab.github.io/superhero-api/api/all.json');
    const data = await res.json();
    return {
      props: { supes: data }
    }
}

const SuperHeros = ({supes}) => {
    return (
        <div>
            <h1>All Superheros</h1>
            {supes.map(supe => (
            <Link href={'/superheros/' + supe.id} key={supe.id}>
            <a className={styles.single}>
              <h3>{supe.name }</h3>
            </a>
          </Link>
      ))}
        </div>
    )
}

export default SuperHeros