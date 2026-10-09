import './App.css'
import Jatekter from './components/Jatekter'
import { useTicTacToeContext } from './contexts/TicTacToeContext';


function App() {
  /* functions */
  const {nyertes, lepes, ujJatek} = useTicTacToeContext();

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
        <Jatekter />
      </article>
      <section>
        <button onClick={ujJatek}>Új játék</button>
      </section>
      <footer><p>Gubek Vera</p></footer>
    </>
  )
}

export default App