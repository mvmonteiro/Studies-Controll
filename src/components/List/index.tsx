import { ITasks } from '../../types/Tasks';
import Item from './Item';
import style from './List.module.scss'

interface Props {
    tasks: ITasks[];
    taskSelector: ( (tarefaSelecionada: ITasks) => void); 
}

const List = ( { tasks, taskSelector }: Props ) => {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia:</h2>
            <ul>
            {tasks.map( (task) => 
                <Item key={task.id} {...task} taskSelector={taskSelector} />
            )}
            </ul>
        </aside>
    );
}

export default List;