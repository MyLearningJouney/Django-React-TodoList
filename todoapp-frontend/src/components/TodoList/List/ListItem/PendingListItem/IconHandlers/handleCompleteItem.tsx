import { SetStateAction } from "react"
import { ActivityItem } from "../../../../../../types/ActivityItem"
import DateFormat from "../../../../../../utils/DateFormat"

interface Props {
    activityItem: ActivityItem,
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
    event: React.MouseEvent<HTMLButtonElement>
}

function handleComplete({activityItem,setActivitiesList,event}: Props) {
    event.preventDefault()
    setActivitiesList(prevActitivies => 
        prevActitivies.map(activity => 
        {
            if (activityItem.id === activity.id){
                return {...activity, status: "completed", completedDate: DateFormat(new Date(Date.now()))}
            }
            return activity
        }))
}

export default handleComplete