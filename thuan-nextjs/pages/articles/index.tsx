function Articles({response}) {
    return (
     <div className='container'>
      <h1>Article Page</h1>
      <h3>userId: {response.userId}</h3>
      <h3>Id: {response.id}</h3>
      <h3>Title: {response.title}</h3>
      <p>{response.body}</p>
     </div>
    )
  }

export async function getServerSideProps() {
    const request = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    const response = await request.json()
    console.log (response)
    return {props: { response }}
  }

export default Articles
  