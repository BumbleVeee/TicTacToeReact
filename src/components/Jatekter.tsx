import './Jatekter.css'
import type { AdatTipus } from "../adat";
import Elem from "./Elem";

interface JatekterProps{
    lista: AdatTipus[];
    kivalasztKezelo:(index:number)=>void;
}

function Jatekter({lista, kivalasztKezelo}:JatekterProps){
    return(
        <div className="jatekter">
            {
                lista.map((e,i)=>{
                    return <Elem adat={e} key={i} index={i} kivalasztKezelo={kivalasztKezelo}/>
                })
            }
        </div>
    )
}

export default Jatekter