import React, { SetStateAction } from 'react';
import { ActivityItem } from '../../../types/ActivityItem';
import { User } from '../../../types/User';
import style from '../List/List.module.scss'
import ListItem from './ListItem/ListItem';

interface Props{
    activitiesList: ActivityItem[]
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
    token: string
    user: User
}

function List ({ activitiesList, setActivitiesList, token, user }: Props){
    console.log(activitiesList)
    return (
        <ul className={style.todoList}>
        {  
            activitiesList.map(activityItem => (            
            <ListItem 
                key={activityItem.id}
                activityItem={activityItem}
                setActivitiesList = {setActivitiesList}
                token={token}
                user={user}
            />
            ))
        }
        </ul>
    )
}

export default List