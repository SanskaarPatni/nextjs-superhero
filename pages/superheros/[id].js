export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
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
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { supe: data }
    }
  }
  
  const Details = ({ supe }) => {
    return (
      <div>
        <h1>{ supe.name }</h1>
        <p>{ supe.email }</p>
        <p>{ supe.website }</p>
        <p>{ supe.address.city }</p>
      </div>
    );
  }
  
  export default Details;