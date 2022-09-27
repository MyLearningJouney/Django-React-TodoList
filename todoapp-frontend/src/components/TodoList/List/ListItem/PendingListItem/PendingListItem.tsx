import React, { SetStateAction } from 'react';
import { ActivityItem } from '../../../../../types/ActivityItem';
import CheckIcon from '../../../Icons/CheckIcon/CheckIcon';
import PencilIcon from '../../../Icons/PencilIcon/PencilIcon';
import TrashIcon from '../../../Icons/TrashIcon/TrashIcon';
import handleComplete from './IconHandlers/handleCompleteItem';
import style from '../PendingListItem/PendingListItem.module.scss'
import handleDelete from './IconHandlers/handleDeleteItem';
import handleEdit from './IconHandlers/handleEditItem';
import { User } from '../../../../../types/User';

interface Props {
    activityItem: ActivityItem,
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
    token: string
    user: User
}

function PendingListItem ({ activityItem, setActivitiesList, token, user}: Props){
    
    return(
            <>
                <div className={style.listTextWrapper}>
                    <span className={style.listActivity}>{activityItem.activity}</span>
                    <span className={style.listDate}>{activityItem.createdDate/*.toString()*/}</span>
                </div>
                <div className={style.listIconsWrapper}>
                    <CheckIcon 
                        type={"todolist"} 
                        onClick={event => handleComplete({event,setActivitiesList,activityItem,token,user})}
                    />
                    <PencilIcon 
                        type={"todolist"} 
                        onClick={event => handleEdit({event,setActivitiesList,activityItem})}
                    />
                    <TrashIcon 
                        type={"todolist"} 
                        onClick={event => handleDelete({event,setActivitiesList,activityItem,token})}
                    />
                </div>
            </>
        )
    }

export default PendingListItem