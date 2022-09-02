import React, { SetStateAction } from 'react';
import { ActivityItem } from '../../../../../types/ActivityItem';
import CheckIcon from '../../../Icons/CheckIcon/CheckIcon';
import PencilIcon from '../../../Icons/PencilIcon/PencilIcon';
import TrashIcon from '../../../Icons/TrashIcon/TrashIcon';
import handleComplete from './IconHandlers/handleCompleteItem';
import style from '../PendingListItem/PendingListItem.module.scss'
import handleDelete from './IconHandlers/handleDeleteItem';
import handleEdit from './IconHandlers/handleEditItem';

interface Props {
    activityItem: ActivityItem,
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
}

function PendingListItem ({ activityItem, setActivitiesList}: Props){


    return(
            <>
                <div className={style.listTextWrapper}>
                    <span className={style.listActivity}>{activityItem.activity}</span>
                    <span className={style.listDate}>{activityItem.createdDate/*.toString()*/}</span>
                </div>
                <div className={style.listIconsWrapper}>
                    <CheckIcon 
                        type={"todolist"} 
                        onClick={event => handleComplete({event,setActivitiesList,activityItem})}
                    />
                    <PencilIcon 
                        type={"todolist"} 
                        onClick={event => handleEdit({event,setActivitiesList,activityItem})}
                    />
                    <TrashIcon 
                        type={"todolist"} 
                        onClick={event => handleDelete({event,setActivitiesList,activityItem})}
                    />
                </div>
            </>
        )
    }

export default PendingListItem