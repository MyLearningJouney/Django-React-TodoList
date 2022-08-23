import { SetStateAction } from "react"
import { ActivityItem } from "../../../../../types/ActivityItem"

interface Props {
    activityItem: ActivityItem,
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
    event: React.MouseEvent<HTMLButtonElement>
    editActivity:string
}

function handleConfirmEdit({activityItem,setActivitiesList,event,editActivity}: Props) {
    event.preventDefault()
    setActivitiesList(prevActitivies => 
        prevActitivies.map(activity => 
        {
            if (activityItem.id === activity.id){
                return {...activity, status: "pending", activity:editActivity}
            }
            return activity
        }))
}

export default handleConfirmEdit