import React, { useState } from 'react';
import List from './List/List'
import Form from './Form/Form'
import { ActivityItem } from '../../types/ActivityItem';
import style from '../TodoList/TodoList.module.scss'


function TodoList() {
  const [activitiesList, setActivitiesList] = useState<ActivityItem[]>([]);

  return (
    <div className="TodoList">
      <section>
        <div className={style.todoListWrapper}>
          <List 
            activitiesList={activitiesList}
            setActivitiesList={setActivitiesList}/>
        </div>
        <div className={style.inputFormWrapper}>
          <Form setActivities={setActivitiesList}/>
        </div>
      </section>
    </div>
  );
}

export default TodoList;
