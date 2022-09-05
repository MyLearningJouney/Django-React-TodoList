import { SetStateAction } from "react"
import TodoAppDataService from "../../../../../../services/TodoAppDataService"
import { ActivityItem } from "../../../../../../types/ActivityItem"
import { User } from "../../../../../../types/User"
import DateFormatDB from "../../../../../../utils/DateFormatDB"

interface Props {
    activityItem: ActivityItem,
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
    event: React.MouseEvent<HTMLButtonElement>
    editActivity:string
    token: string
    user: User
}

function handleConfirmEdit({activityItem,setActivitiesList,event,editActivity,user,token}: Props) {

    event.preventDefault()

    const editedActivity: ActivityItem = {
        activity: editActivity,
        createdDate: activityItem.createdDate,
        completedDate: activityItem.completedDate,
        status: "pending",
        id: activityItem.id
    };

    const editedActiviyDB = {...editedActivity, 
        createdDate: DateFormatDB(editedActivity.createdDate),
        completedDate: DateFormatDB(editedActivity.completedDate), 
        user: user.userid}

    TodoAppDataService.updateTodo(activityItem.id, editedActiviyDB, token)
    .then((response) => {
        console.log(response.data);
    })
        .catch((e) => {
            console.log(e);
    });

    setActivitiesList(prevActitivies => 
        prevActitivies.map(activity => 
        {
            if (activityItem.id === activity.id){
                return editedActivity
            }
            return activity
        }))
}

export default handleConfirmEdit