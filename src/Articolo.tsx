import type { Data } from "./type-data";

//definisci type degli elementi
const Articolo = ({title, body}:Data) => {
    
  return (
    <article>
      <div style={{position:"relative", height:"fit-content"}}>
        <h4>{title}</h4>
        <div className="underline"></div>
      </div>
      <p>{body}</p>
    </article>
  )
}

export default Articolo;