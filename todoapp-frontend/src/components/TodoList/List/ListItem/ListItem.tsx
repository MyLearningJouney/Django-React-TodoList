import React, { SetStateAction, useEffect, useRef } from 'react';
import style from '../ListItem/ListItem.module.scss'
import { ActivityItem } from '../../../../types/ActivityItem';
import PendingListItem from './PendingListItem/PendingListItem';
import CompletedListItem from './CompletedListItem/CompletedListItem';
import EditingListItem from './EditingListItem/EditingListItem';
import { User } from '../../../../types/User';

interface Props {
    activityItem: ActivityItem,
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
    token:string
    user: User
}


function ListItem ({ activityItem, setActivitiesList,token,user}: Props){

    const showPendingListEffect = useRef< null | HTMLLIElement >(null);
    
    useEffect(() => {
        showPendingListEffect.current?.classList.add(`${style.show}`);
    })

    if (activityItem.status === "completed"){
        return (
            <li className={`${style.listItem} ${style.completedActivity}`}>
                <CompletedListItem activityItem={activityItem} setActivitiesList={setActivitiesList} token={token} user={user}></CompletedListItem>
            </li>
        )
    }
    else if (activityItem.status === "editing"){
        return (
            <li className={`${style.listItem} ${style.editing}`}>
                <EditingListItem activityItem={activityItem} setActivitiesList={setActivitiesList} token={token} user={user}></EditingListItem>
            </li>
        )
    }
    else {
        return (
            <li ref={showPendingListEffect} className={`${style.listItem}`}>
                <PendingListItem activityItem={activityItem} setActivitiesList={setActivitiesList} token={token} user={user}></PendingListItem>
            </li>
        )
    }
}

export default ListItem