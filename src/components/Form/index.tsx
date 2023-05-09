import React, { useState, Dispatch } from "react";
import Button from "../Button";
import style from './Form.module.scss'
import { ITasks } from "../../types/Tasks";
import {v4 as uuidv4} from 'uuid'

interface ITasksProps {
    setTasks: Dispatch<React.SetStateAction<ITasks[] | []>>
}

const Form = ( props: ITasksProps ) => {
    const [textInput, setTextInput] = useState<string>('');
    const [timeInput, setTimeInput] = useState<string>('00:00:00');

    const adicionarTarefa = ( evento: any ) => {
        evento.preventDefault();
        props.setTasks( (oldTasks: ITasks[]) =>
             [...oldTasks, {tarefa: textInput, tempo: timeInput, selecionado: false, completado: false, id: uuidv4()
        }]);
        
        setTextInput('');
        setTimeInput('00:00:00');
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input 
                    type="text" 
                    name="tarefa" 
                    id="tarefa" 
                    placeholder="O que você gostaria de estudar?" 
                    value={textInput}
                    onChange={ (textChange) => setTextInput( textChange.target.value )}
                    required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="timer" >Tempo</label>
                    <input 
                        type="time" 
                        step="1" 
                        name="timer" 
                        id="timer" 
                        min="00:00:00" 
                        max="01:35:00" 
                        value={timeInput} 
                        onChange={ (timeChange) => setTimeInput( timeChange.target.value)}
                        required />
            </div>
            <Button type="submit">Adicionar</Button>
        </form>
    );
}

export default Form;