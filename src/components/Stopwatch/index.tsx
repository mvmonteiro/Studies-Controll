import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITasks } from "../../types/Tasks";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss"

interface Props {
    selected: ITasks | undefined;
    finalizarTarefa: () => void;
}

const Stopwatch = ( { selected, finalizarTarefa }: Props ) => {
    const [tempo, setTempo] = useState<number>();

    useEffect( () => {
        if(selected?.tempo)
            setTempo(timeToSeconds(selected.tempo));
    }, [selected]);

    function regressive(contador: number = 0) {
        setTimeout( () => {
            if(contador > 0){
                setTempo(contador - 1);
                return regressive(contador - 1);
            }
            finalizarTarefa();

        }, 1000)
    }

    return (
        <div className={style.cronometro} >
            <p className={style.titulo} >Escolha um card e inicie o cronômetro.</p>
            <div className={style.relogioWrapper} >
                <Clock tempo={tempo}/>
            </div>
            <Button onClick={ () => regressive(tempo)}>
                Começar
            </Button>
            
        </div>
    );
}

export default Stopwatch;