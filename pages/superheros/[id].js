/*export const getStaticPaths = async () => {
    //const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const res= await fetch('https://akabab.github.io/superhero-api/api/all.json')
  
    const data = await res.json();
    // map data to an array of path objects with params (id)
    const paths = data.map(supe => {
      return {
        params: { id: supe.id.toString() }
      }
    })
    return {
      paths,
      fallback: false
    }
  }
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`);
    const data = await res.json();
  
    return {
      props: { supe: data }
    }
  }*/

  export async function getServerSideProps(context) {
    const id = context.params.id;
    const res = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {supe: data}, // will be passed to the page component as props
    }
  }
  
  const Details = ({ supe }) => {
    return (
      <div>
        <h1>{ supe.name }</h1>
        <p>{ supe.appearance.gender }</p>
      </div>
    );
  }
  
  export default Details;