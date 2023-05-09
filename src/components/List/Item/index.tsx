import { ITasks } from '../../../types/Tasks';
import style from './Item.module.scss'

interface Props extends ITasks{
    taskSelector: ( (tarefaSelecionada: ITasks) => void); 
}

const Item = ( {tarefa, tempo, selecionado, completado, id, taskSelector}: Props ) => {
    return (
        <li 
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} 
            onClick={ () => !completado && taskSelector({
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label="tarefa completada" ></span>}
        </li>
    );
}

export default Item