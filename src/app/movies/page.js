import styles from "@/app/styles/movies.module.css";
import Link from "next/link";
const Card = ({id,title}) => {
  return(
    <div className={styles.card}>
      <h2><Link href={`/movies/${id}`}>{id}) {title}</Link></h2>
    </div>
  )
}
const Movies = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return(
    <div className={styles.container}>
      {data.map(obj => <Card key={obj.id} {...obj} />)}
    </div>
  )
}
export default Movies;