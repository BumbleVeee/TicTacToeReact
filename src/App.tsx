import { useState } from 'react'
import './App.css'
import { ADATLISTA, type AdatTipus } from './adat'
import Jatekter from './components/Jatekter'

function App() {
  /* functions */
  const [lista, setLista] = useState<AdatTipus[]>(ADATLISTA)
  const [lepes, setLepes] = useState(0)

  function kivalasztKezelo(index:number){
    console.log("kivalasztott index: ", index)
    setLepes(lepes + 1)

    const listaMasolat = [...lista]
    lepes % 2 ? listaMasolat[index].jel = "X" : listaMasolat[index].jel = "O"
    setLista(listaMasolat)
  }

  return (
    <>
      {/* react fragment */}
      <header>
        <h1>Tictactoe</h1>
      </header>
      <section>
        
      </section>
      <article>
        {/* ide kerül a jatek */}
        <Jatekter lista={lista} kivalasztKezelo={kivalasztKezelo}/>
      </article>
      <footer><p>Gubek Vera</p></footer>
    </>
  )
}

export default App