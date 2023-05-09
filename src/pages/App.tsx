import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss'
import Stopwatch from '../components/Stopwatch';
import { ITasks } from '../types/Tasks';

function App() {
  const [tasks, setTasks] = useState<ITasks[] | []>([]);
  const [selected, setSelected] = useState<ITasks>();

  function taskSelector (tarefaSelecionada: ITasks) {
      setSelected(tarefaSelecionada);
      setTasks( (oldTasks => oldTasks.map( (task) => ({
          ...task, selecionado: task.id === tarefaSelecionada.id ? true : false
      }))))
  }

  function finalizarTarefa() {
      if(selected) {
        setSelected(undefined);
        setTasks( (oldTasks) => 
          oldTasks.map( (task) => {
            if(task.id === selected.id){
              return {
                ...task, selecionado: false, completado: true
              }
            }
            return task;
          })
        )
      }
  }

  return (
    <div className={style.AppStyle}>
        <Form setTasks={setTasks} />
        <List tasks={tasks} taskSelector={taskSelector} />
        <Stopwatch 
          selected={selected} 
          finalizarTarefa={finalizarTarefa}
          />
    </div>
  );
}

export default App;
