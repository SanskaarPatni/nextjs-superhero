import styles from '../../styles/Superheros.module.css'
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
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
            <div key={supe.id}>
            <a className={styles.single}>
                <h3>{ supe.name }</h3>
            </a>
        </div>
      ))}
        </div>
    )
}

export default SuperHeros