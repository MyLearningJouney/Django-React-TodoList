import React, { SetStateAction } from 'react';
import style from '../ListItem/ListItem.module.scss'
import { ActivityItem } from '../../../types/ActivityItem';
import PendingListItem from './PendingListItem/PendingListItem';
import CompletedListItem from './CompletedListItem/CompletedListItem';
import EditingListItem from './EditingListItem/EditingListItem';

interface Props {
    activityItem: ActivityItem,
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
}

function ListItem ({ activityItem, setActivitiesList}: Props){

    if (activityItem.status === "completed"){
        return (
            <li className={`${style.listItem} ${style.completedActivity}`}>
                <CompletedListItem activityItem={activityItem} setActivitiesList={setActivitiesList}></CompletedListItem>
            </li>
        )
    }
    else if (activityItem.status === "editing"){
        return (
            <li className={`${style.listItem} ${style.show}`}>
                <EditingListItem activityItem={activityItem} setActivitiesList={setActivitiesList}></EditingListItem>
            </li>
        )
    }
    else {
        return (
            <li className={`${style.listItem} ${style.show}`}>
                <PendingListItem activityItem={activityItem} setActivitiesList={setActivitiesList}></PendingListItem>
            </li>
        )
    }
}

export default ListItem