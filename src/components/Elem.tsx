import './Elem.css';
import type { AdatTipus } from "../adat";
import { useTicTacToeContext } from '../contexts/TicTacToeContext';

interface ElemProps {
    adat: AdatTipus;
    index: number;
}

function Elem({adat, index}:ElemProps){
    const { kivalasztKezelo } = useTicTacToeContext();

    return(
        <>
            <button className="elem" onClick={() => kivalasztKezelo(index)}>{adat.jel}</button>
        </>
    )
}

export default Elem;