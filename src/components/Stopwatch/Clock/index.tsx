import React from "react";
import style from "./Clock.module.scss"

interface Props {
    tempo: number | undefined;
}

const Clock = ( { tempo = 0 }: Props ) => {
    const minutes = Math.floor( tempo/ 60 );
    const seconds = (tempo % 60);
    const [minutesDezena, minutesUnit] = String(minutes).padStart(2, '0'); 
    const [secondDezena, secondUnit] = String(seconds).padStart(2, '0');

    return (
        <>                                      
            <span className={style.relogioNumero} >{minutesDezena}</span>
            <span className={style.relogioNumero} >{minutesUnit}</span>
            <span className={style.relogioDivisao} >:</span>
            <span className={style.relogioNumero} >{secondDezena}</span>
            <span className={style.relogioNumero} >{secondUnit}</span>
        </>
    );
}

export default Clock;