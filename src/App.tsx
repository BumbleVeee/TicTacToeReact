import { useState } from 'react'
import './App.css'
import { ADATLISTA, type AdatTipus } from './adat'
import Jatekter from './components/Jatekter'

function nyertesKereso(lista: AdatTipus[]): string | null {
  const vonalak = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],   // sorok
    [0, 3, 6], [1, 4, 7], [2, 5, 8],   // oszlopok
    [0, 4, 8], [2, 4, 6]               // diagonal
  ]

  for (const [a, b, c] of vonalak) {
    if (lista[a].jel !== " " && lista[a].jel === lista[b].jel && lista[a].jel === lista[c].jel) {
      return lista[a].jel   // "X" vagy "O"
    }
  }
  return null   // nincs nyertes (még)
}

function App() {
  /* functions */
  const [lista, setLista] = useState<AdatTipus[]>(ADATLISTA)
  const [lepes, setLepes] = useState(0)

  const nyertes = nyertesKereso(lista)

  function kivalasztKezelo(index:number){
    console.log("kivalasztott index: ", index)
    if (nyertes || lista[index].jel !== " ") return

    const listaMasolat = [...lista]
    listaMasolat[index].jel = lepes % 2 ? "O" : "X"
    setLista(listaMasolat)
    setLepes(lepes + 1)
  }

  function ujJatek() {
    const ujLista: AdatTipus[] = []

    for (let i = 0; i < ADATLISTA.length; i++) {
        ujLista.push({ index: i, jel: " " })
    }

    setLista(ujLista)
    setLepes(0)
  }

  /*function ujJatek() {
    setLista(ADATLISTA.map(e => ({ ...e, jel: " " })))
    setLepes(0)
  }*/

  return (
    <>
      {/* react fragment */}
      <header>
        <h1>Tictactoe</h1>
      </header>
      <section>
        {nyertes && <p>Nyertes: {nyertes}</p>}
        {!nyertes && lepes === 9 && <p>Döntetlen!</p>}
      </section>
      <article>
        {/* ide kerül a jatek */}
        <Jatekter lista={lista} kivalasztKezelo={kivalasztKezelo}/>
      </article>
      <section>
        <button onClick={ujJatek}>Új játék</button>
      </section>
      <footer><p>Gubek Vera</p></footer>
    </>
  )
}

export default App