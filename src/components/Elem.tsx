import './Elem.css';
import type { AdatTipus } from "../adat";

interface ElemProps {
    adat: AdatTipus;
    index: number;
    kivalasztKezelo:(index:number)=>void;
}

export default function Elem({adat, index, kivalasztKezelo}:ElemProps){
    return(
        <>
            <button className="elem" onClick={() => kivalasztKezelo(index)}>{adat.jel}</button>
        </>
    )
}