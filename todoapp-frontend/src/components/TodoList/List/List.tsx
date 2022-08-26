import React, { SetStateAction } from 'react';
import { ActivityItem } from '../../../types/ActivityItem';
import style from '../List/List.module.scss'
import ListItem from './ListItem/ListItem';

interface Props{
    activitiesList: ActivityItem[]
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
}

function List ({ activitiesList, setActivitiesList }: Props){

    return (
        <ul className={style.todoList}>
        {  
            activitiesList.map(activityItem => (            
            <ListItem 
                key={activityItem.id}
                activityItem={activityItem}
                setActivitiesList = {setActivitiesList}
            />
            ))
        }
        </ul>
    )
}

export default List