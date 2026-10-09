import './Jatekter.css'
import Elem from "./Elem";
import { useTicTacToeContext} from "../contexts/TicTacToeContext";

function Jatekter(){
    const {lista} = useTicTacToeContext();

    return(
        <div className="jatekter">
            {
                lista.map((e,i)=>{
                    return <Elem adat={e} key={i} index={i}/>
                })
            }
        </div>
    )
}

export default Jatekter