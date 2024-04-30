const SingleMovie = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const {id,title,body} = await res.json();
    return(
      <div className="box">
          <h1>{id}) {title}</h1>
          <p>{body}</p>
      </div>
    )
}
export default SingleMovie;