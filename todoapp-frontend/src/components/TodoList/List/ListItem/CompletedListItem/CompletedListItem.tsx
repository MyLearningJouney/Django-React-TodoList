import React, { SetStateAction } from 'react';
import { ActivityItem } from '../../../../../types/ActivityItem';
import { User } from '../../../../../types/User';
import CancelIcon from '../../../Icons/CancelIcon/CancelIcon';
import CheckIcon from '../../../Icons/CheckIcon/CheckIcon';
import PencilIcon from '../../../Icons/PencilIcon/PencilIcon';
import TrashIcon from '../../../Icons/TrashIcon/TrashIcon';
import style from '../CompletedListItem/CompletedListItem.module.scss'
import handleCancelComplete from './IconHandler/handleCancelCompleteIcon';

interface Props {
    activityItem: ActivityItem,
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
    token: string
    user: User
}

function CompletedListItem ({ activityItem, setActivitiesList, user, token}: Props){
    
    return(
            <>
                <div className={style.listTextWrapper}>
                    <span className={style.listActivity}>{activityItem.activity}</span>
                    <span className={style.listCompletedDate}>{activityItem.completedDate/*.toString()*/}</span>
                </div>
                <div className={style.listIconsWrapper}>
                    <CancelIcon 
                        type={"todolist"} 
                        onClick={event => handleCancelComplete({event,setActivitiesList,activityItem, user, token})}
                    />
                    <PencilIcon 
                        type={"hide"} 
                    />
                    <TrashIcon 
                        type={"hide"} 
                    />
                </div>
            </>
        )
    }

export default CompletedListItem