import React, { useEffect, useState } from "react";
import List from "./List/List";
import Form from "./Form/Form";
import { ActivityItem } from "../../types/ActivityItem";
import style from "../TodoList/TodoList.module.scss";
import TodoAppDataService from "../../services/TodoAppDataService";
import { User } from "../../types/User";

interface Props {
    token: string 
    user: User;
}

function TodoList({ token, user }: Props) {
    const [activitiesList, setActivitiesList] = useState<ActivityItem[]>([]);
    useEffect(() => {
        retrieveTodos();
    }, [token]);

    const retrieveTodos = () => {
        TodoAppDataService.getAll(token)
        .then((response) => {
            setActivitiesList(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
    };

  return (
    <div className="TodoList">
      <section>
        <div><p>Userid = {user?.userid}</p></div>
        <div className={style.todoListWrapper}>
          <List
            activitiesList={activitiesList}
            setActivitiesList={setActivitiesList}
          />
        </div>
        <div className={style.inputFormWrapper}>
          <Form setActivities={setActivitiesList} token={token} user={user} />
        </div>
      </section>
    </div>
  );
}

export default TodoList;
