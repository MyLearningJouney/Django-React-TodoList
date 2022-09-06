import { SetStateAction } from "react"
import TodoAppDataService from "../../../../../../services/TodoAppDataService"
import { ActivityItem } from "../../../../../../types/ActivityItem"
import { User } from "../../../../../../types/User"
import DateFormat from "../../../../../../utils/DateFormat"
import DateFormatDB from "../../../../../../utils/DateFormatDB"

interface Props {
    activityItem: ActivityItem,
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
    event: React.MouseEvent<HTMLButtonElement>
    token: string
    user: User
}

function handleComplete({activityItem,setActivitiesList,event,token,user}: Props) {
    
    event.preventDefault()

    const completedActivity: ActivityItem = {
        activity: activityItem.activity,
        createdDate: activityItem.createdDate,
        completedDate: DateFormat(new Date(Date.now())),
        status: "completed",
        id: activityItem.id
    };

    const completedActiviyDB = {...completedActivity, 
        createdDate: DateFormatDB(completedActivity.createdDate),
        completedDate: DateFormatDB(completedActivity.completedDate), 
        user: user.userid}

    TodoAppDataService.updateTodo(activityItem.id, completedActiviyDB, token)
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
                    return completedActivity
                }
                return activity
            }))

}

export default handleComplete