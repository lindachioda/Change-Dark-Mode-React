import { useState, useEffect } from 'react'
import data from './data'
import './App.css'
import Articolo from './Articolo';

//TIPIZZA THEME!!!!!
type Theme = "light-mode" | "dark-mode"


//Funzione che se presente 'Theme' nel localStorage ritorna il suo valore o di default return 'light-mode'
const getLocalStorage =(): Theme =>{
  if (localStorage.getItem("theme") === "dark-mode"){
    return "dark-mode"
  }else{
    return "light-mode"
  }
}


function App() {
  //useState che definisce il tema:
  const[theme, setTheme] = useState(getLocalStorage())

  //funzione per cambiare tema:
  const cambiaTema = () => {
    if(theme === "light-mode"){
      setTheme ("dark-mode")
    }else{
      setTheme ("light-mode")
    }
  }
  console.log(theme)

  //useEffect per CAMBIARE CLASSNAME al mio html del documento!!
  //quando cambio il theme con il click della funzione "cambiaTema" allora cambia anche il mode
  //i CLASSNAME vengono presi dal mio css!!
  useEffect(()=>{
    document.documentElement.className = theme
    //per salvarre valore nel localStorage
    localStorage.setItem("theme",theme)
    //useEffect viene avviato quando cambia "theme" = [theme]
  }, [theme])

  return (
    <section className="section-center">
      <div className="container">
        <button className="btn" onClick={cambiaTema}>cambia mode</button>
        <section className="article-section">
          {data.map(el=> <Articolo key={el.id} {...el}/>)}
        </section>
      </div>
    </section>
  )
}

export default App
