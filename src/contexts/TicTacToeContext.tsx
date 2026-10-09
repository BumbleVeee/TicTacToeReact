import { createContext, useContext, useState, type ReactNode } from "react";
import { ADATLISTA, type AdatTipus } from "../adat";


interface FeladatokContextValue{
    lista: AdatTipus[];
    lepes: number;
    nyertes: string | null;
    kivalasztKezelo: (index: number) => void;
    ujJatek(): void;
}

export const TicTacToeContext = createContext<FeladatokContextValue | undefined>(undefined);

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

interface TicTacToeProviderProps{
    children: ReactNode;
}

export function TicTacToeProvider({children}: TicTacToeProviderProps){
    const [lista, setLista] = useState<AdatTipus[]>(ADATLISTA);
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

    return(
        <TicTacToeContext.Provider value={{lista, lepes, nyertes, kivalasztKezelo, ujJatek}}>
            {children}
        </TicTacToeContext.Provider>
    )
}

export function useTicTacToeContext(){
    const context=useContext(TicTacToeContext)
    if(context===undefined){
        throw new Error("Az app csak provideren belül használható");
    }
    return context;
}