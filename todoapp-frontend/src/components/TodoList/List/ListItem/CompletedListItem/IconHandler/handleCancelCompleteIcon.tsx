import { SetStateAction } from "react"
import TodoAppDataService from "../../../../../../services/TodoAppDataService"
import { ActivityItem } from "../../../../../../types/ActivityItem"
import { User } from "../../../../../../types/User"
import DateFormatDB from "../../../../../../utils/DateFormatDB"

interface Props {
    activityItem: ActivityItem,
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
    event: React.MouseEvent<HTMLButtonElement>
    token: string
    user: User
}

function handleCancelComplete({activityItem,setActivitiesList,event,user,token}: Props) {
    event.preventDefault()

    const cancelCompletedActivity: ActivityItem = {
        activity: activityItem.activity,
        createdDate: activityItem.createdDate,
        completedDate: activityItem.completedDate,
        status: "pending",
        id: activityItem.id
    };

    const cancelCompletedActivityDB = {...cancelCompletedActivity, 
        createdDate: DateFormatDB(cancelCompletedActivity.createdDate),
        completedDate: DateFormatDB(cancelCompletedActivity.completedDate), 
        user: user.userid}

    TodoAppDataService.updateTodo(activityItem.id, cancelCompletedActivityDB, token)
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
                return cancelCompletedActivity
            }
            return activity
        }))
}

export default handleCancelComplete